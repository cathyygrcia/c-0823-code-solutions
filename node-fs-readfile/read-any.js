import { readFile } from 'node:fs/promises';

const filename = process.argv[2];

try {
  const data = await readFile(filename, 'utf8');

  console.log(data);
} catch (error) {
  console.error('Error reading the file:', error);
}
