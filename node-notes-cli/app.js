import { readFile, writeFile } from 'node:fs/promises';
const [, , op, arg1, arg2] = process.argv;
/** Returns the data from the file system. */
async function readData() {
  const file = await readFile('data.json', 'utf8');
  return JSON.parse(file);
}
/** Writes data to the file system. */
async function writeData(data) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}
function checkId(data, id) {
  if (!(id in data.notes)) {
    console.error('Hey, dummy, it is not there:', id);
    process.exit(1);
  }
}
function checkNote(data, id, note) {
  if (note === undefined || note === null) {
    console.error('Hey, dummy, no note:', note);
    process.exit(1);
  }
  if (note === data.notes[id]) {
    console.error('Hey, dummy, it is the same:', note);
    process.exit(1);
  }
}
try {
  switch (op) {
    case 'create':
      await createNote(arg1);
      break;
    case 'read':
      await readNotes();
      break;
    case 'update':
      updateNote(arg1, arg2);
      break;
    case 'delete':
      deleteNote(arg1);
      break;
    default:
      console.log('Bad op', op);
      process.exit(1);
  }
} catch (err) {
  console.error('Badness happened', err);
  process.exit(2);
}
async function createNote(note) {
  const data = await readData();
  checkNote(data, data.nextId, note);
  data.notes[data.nextId++] = note;
  await writeData(data);
}
async function readNotes() {
  const data = await readData();
  if (data.notes.length === 0) {
    console.log('No notes');
    return;
  }
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}
async function updateNote(id, note) {
  const data = await readData();
  checkId(data, id);
  checkNote(data, id, note);
  data.notes[id] = note;
  await writeData(data);
}
async function deleteNote(id) {
  const data = await readData();
  checkId(data, id);
  delete data.notes[id];
  await writeData(data);
}
