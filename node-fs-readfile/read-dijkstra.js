import { readFile } from 'node:fs/promises';

async function readDijkstraFile() {
  try {
    const data = await readFile('dijkstra.txt', 'utf8');

    console.log(data);
  } catch (error) {
    console.error('Error reading the file:', error);
  }
}

readDijkstraFile();
