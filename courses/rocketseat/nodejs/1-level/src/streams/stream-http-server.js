import http from 'node:http';
import { Transform } from 'node:stream';

const PORT = 3334;

class InverseNumberStream extends Transform {
  _transform(chunk, encondig, callback) {
    const transformed = Number(chunk.toString()) * -1;

    console.log(transformed)

    callback(null, Buffer.from(String(transformed)));
  }
}

// Assim que chega um dado, é processado e enviado
// const server = http.createServer((req, res) => {
//   return req
//     .pipe(new InverseNumberStream())
//     .pipe(res);
// });

// Ler todos os dados antes de processar
const server = http.createServer(async (req, res) => {
  const buffers = [];

  // Espera todo os pedaços (chunks) serem lidos antes de executar o código após o for
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  console.log({fullStreamContent})

  return res.end(fullStreamContent)
});

server.listen(PORT);