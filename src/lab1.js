/**
 Todo: create a function that sets a timeout of 3000ms and 
  do the following inside its callback:
  - console.table an array of elements
  - console.log __dirname
  - console.log __filename
  - console.log require
  - console.log module
  - console.log process
  - console.log window
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function ConsoleLogsThings() {
    setTimeout(() => {
        console.table(['Damien', 'David', 'Corentin', 'Colin', 'Théo', 'Mohammed']);
        console.log('le dirname :' + __dirname);
        console.log('le filename :' + __filename);
        console.log('le require :' + require);
        console.log('le module :' + module)
        console.log('le process :' + process.onv.TERM_PROGRAM_VERSION);
        // console.log('window :' + window);
});
}

ConsoleLogsThings();