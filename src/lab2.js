/**
 Todo: complete this lab by importing the needed 
 objects and functions from
 ./utils/constants.js and ./utils/helpers.js
 */
import hello from './utils/helpers.js'; //import default
import { foo, bar } from './utils/constants.js'; // import not default
import baz from './utils/constants.js';


hello(foo);
hello(bar);
hello(baz);
