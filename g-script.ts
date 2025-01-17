import { iso15924 } from 'iso-15924';
import fs from 'fs-extra';

const map = new Map<string, string[]>();

iso15924.forEach((script) => {
  const { pva, name } = script;
  if (!pva) return;
  map.set(pva, [...(map.get(pva) ?? []), name]);
});

const f = fs.createWriteStream('src/Script.ts');
f.write('/** Script Property */\n');
f.write('export enum Script {\n');
map.forEach((names, pva) => {
  // f.write(`  /** ${names.join(' | ')} */\n`);
  f.write(`  ${pva.replace('_', '')} = '\\\\p{Script=${pva}}',\n`);
});

f.write('}\n');
f.end();
