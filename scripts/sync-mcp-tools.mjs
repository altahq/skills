import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { McpToolsFile } from './plays.mjs';

// The tools the Alta connector offers the model, read from the alta repo, so a play never names one that is gone.
const ServerBuilder = 'apps/api/src/modules/mcp/server-builder.ts';
const ToolTypes = 'libs/shared/modules/src/lib/tools/types/tool-type.ts';

const altaCheckout = process.argv[2];
if (!altaCheckout) {
  console.error('Usage: node scripts/sync-mcp-tools.mjs <checkout of altahq/alta>');
  process.exit(2);
}

function enumValues(source, enumName) {
  const body = source.match(new RegExp(`export enum ${enumName} \\{([\\s\\S]*?)\\n\\}`))?.[1];
  if (!body) throw new Error(`enum ${enumName} not found in ${ToolTypes}`);
  return Object.fromEntries([...body.matchAll(/^\s*(\w+)\s*=\s*'([^']+)'/gm)].map(([, key, value]) => [key, value]));
}

const builder = readFileSync(path.join(altaCheckout, ServerBuilder), 'utf8');
const exposed = builder.match(/const MODEL_EXPOSED_TOOLS[^=]*=\s*\[([\s\S]*?)\](?: as const)?;/)?.[1];
if (!exposed) throw new Error(`MODEL_EXPOSED_TOOLS not found in ${ServerBuilder}`);

const types = readFileSync(path.join(altaCheckout, ToolTypes), 'utf8');
const enums = { BackendStaticTool: enumValues(types, 'BackendStaticTool'), McpTool: enumValues(types, 'McpTool') };

const tools = [...exposed.matchAll(/Tools\.(BackendStaticTool|McpTool)\.(\w+)/g)]
  .map(([, enumName, key]) => {
    const value = enums[enumName][key];
    if (!value) throw new Error(`${enumName}.${key} has no value in ${ToolTypes}`);
    return value;
  })
  .sort();

writeFileSync(McpToolsFile, `${JSON.stringify(tools, null, 2)}\n`);
console.log(`${tools.length} connector tools written to ${path.relative(process.cwd(), McpToolsFile)}`);
