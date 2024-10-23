import http from 'http';
import { writeFileSync } from 'fs';
import { createReadStream } from 'fs';
/**
 Todo: Follow the todos in this file to complete it
 */

// Todo run this code only once to generate a big file
// --
// Generate a big file using `writeFileSync`
Array.from({ length: 100000 }, (_, i) => {
  writeFileSync("./src/utils/big.txt", `Oulalalalalal y'a bcp de lignes ${i}\n`, {
    flag: "a",
  }); // flag: "a" for appending
});

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     fs.createReadStream('./utils/big.txt', 'utf8', (err, data) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Internal Server Error');
//         return;
//       }
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       stream.pipe(res);
//     });
//   }
// });

// Todo create an http server



// Todo: serve text to the client.
// Todo: What's the problem?

// Todo: use `createReadStream` to file stream to serve text to the client.

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const stream = createReadStream('./src/utils/big.txt', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    stream.pipe(res);
  }
});


server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});