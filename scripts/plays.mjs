import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const PlaysDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../plays');
export const McpToolsFile = path.join(PlaysDir, 'mcp-tools.json');
export const ConnectorHeading = '## Run it with the Alta connector';
export const ProductHeading = '## Run it in Alta';

export function playSlugs() {
  return readdirSync(PlaysDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(path.join(PlaysDir, entry.name, 'SKILL.md')))
    .map((entry) => entry.name)
    .sort();
}

export function readSkillMd(slug) {
  return readFileSync(path.join(PlaysDir, slug, 'SKILL.md'), 'utf8');
}

export function sectionOf(skillMd, heading) {
  const start = skillMd.indexOf(`\n${heading}\n`);
  if (start === -1) return null;
  const body = skillMd.slice(start + heading.length + 2);
  const end = body.search(/\n## /);
  return end === -1 ? body : body.slice(0, end);
}

// Top-level keys, plus the one-level map under `metadata`.
export function frontmatter(skillMd) {
  const match = skillMd.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;
  const fields = {};
  let nested = null;
  for (const line of match[1].split('\n')) {
    const child = line.match(/^\s+([\w-]+):\s*(.*)$/);
    if (child && nested) {
      fields[nested][child[1]] = child[2].trim();
      continue;
    }
    const top = line.match(/^([\w-]+):\s*(.*)$/);
    if (!top) continue;
    nested = top[2].trim() ? null : top[1];
    fields[top[1]] = nested ? {} : top[2].trim();
  }
  return fields;
}
