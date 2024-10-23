/**
 Todo: Complete this lab 

 - Add a new task in scripts of package.json to run `lab4.js`
 - Use argv of process module to get `filename` (a path to an existing file './utils/content.txt') and `text` (a text)
 - Use writeFile of fs module to write text in filename
 - Use readFile of fs module to read nameFile
 */

import { writeFile, readFile } from 'fs/promises';

const filename = process.argv[2]; // Le troisième argument est le nom du fichier
const text = process.argv.slice(3).join(' '); // Les arguments suivants sont le texte

// Todo writeFile
await writeFile(filename, text);

// Todo readFile

const content = await readFile(filename, 'utf-8');
console.log(content);