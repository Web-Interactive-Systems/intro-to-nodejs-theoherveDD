/**
 Todo: follow the todos in file to complete the lab
 - 
 */

import EventEmitter from "events";

// Todo use EventEmitter

const Emitter = new EventEmitter();



// Todo: write listener 1 that logs the following, `data` and `token` are emitted


Emitter.on('eventplayload', (data, token) => {
  console.log(
    `Recieved payload ${JSON.stringify(data, null, 2)} with token: ${token}`
  );
});



Emitter.on('eventmessage', () => {
console.log(
  "A second listener as well"
);
});

setInterval(() => {
  // Émettre des événements toutes les 2 secondes
  const data ='hhahahaahha';
  const token = '12345';
  Emitter.emit('eventplayload', data, token);
  Emitter.emit('eventmessage');
}, 2000);
