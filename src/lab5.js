/**
 Todo: Complete this lab 

 - Explore node `path` module
 - Add console log in addition to
  a brief explanation of the most important functions of path module
 
 */

import path from 'path';

const basename = path.basename('/foo/bar/baz/asdf/quux.html');
console.log('path.basename:', basename); 

const dirname = path.dirname('/foo/bar/baz/asdf/quux.html');
console.log('path.dirname:', dirname);



const joinPath = path.join(dirname, basename);
console.log(joinPath);
