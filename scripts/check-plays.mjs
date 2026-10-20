import { readFileSync } from 'node:fs';
import {
  ConnectorHeading,
  McpToolsFile,
  ProductHeading,
  frontmatter,
  playSlugs,
  readSkillMd,
  sectionOf,
} from './plays.mjs';

// What a skill's frontmatter may hold (the skill-creator validator's list).
const AllowedFrontmatter = ['name', 'description', 'license', 'allowed-tools', 'metadata', 'compatibility'];

const problems = [];
const slugs = playSlugs();
const connectorTools = new Set(JSON.parse(readFileSync(McpToolsFile, 'utf8')));

// Every play says how to run it both ways, and names only tools the connector has.
function checkRunSections(slug, skillMd) {
  const connector = sectionOf(skillMd, ConnectorHeading);
  const product = sectionOf(skillMd, ProductHeading);
  if (connector === null) problems.push(`${slug}: no "${ConnectorHeading}" section`);
  if (product === null) problems.push(`${slug}: no "${ProductHeading}" section`);
  const named = [...(connector ?? '').matchAll(/`([a-z]+(?:_[a-z]+)+)`/g)].map(([, name]) => name);
  for (const name of new Set(named)) {
    if (!connectorTools.has(name)) problems.push(`${slug}: names \`${name}\`, which the Alta connector does not have`);
  }
}

for (const slug of slugs) {
  const skillMd = readSkillMd(slug);
  const meta = frontmatter(skillMd);
  if (!meta) {
    problems.push(`${slug}: SKILL.md has no frontmatter`);
    continue;
  }
  const unknown = Object.keys(meta).filter((key) => !AllowedFrontmatter.includes(key));
  if (unknown.length) problems.push(`${slug}: frontmatter may not hold ${unknown.join(', ')}; put them under metadata`);
  if (meta.name !== slug) problems.push(`${slug}: frontmatter name is "${meta.name}"`);
  if (!meta.description) problems.push(`${slug}: no description`);
  else if (!/\bUse when\b/.test(meta.description)) problems.push(`${slug}: the description does not say when to use it`);
  if (!meta.metadata?.agent) problems.push(`${slug}: no metadata.agent`);
  if (!skillMd.includes('\n## Rules')) problems.push(`${slug}: no "## Rules" section`);
  if (!skillMd.includes('\n## What good looks like\n')) problems.push(`${slug}: no "## What good looks like" section`);
  checkRunSections(slug, skillMd);
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`${slugs.length} plays valid`);
