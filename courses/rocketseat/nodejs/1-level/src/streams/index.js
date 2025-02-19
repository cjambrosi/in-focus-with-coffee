// Apenas uma correção:

// Referente aos 10Mb de transferência, ao invés de Mega Bytes, quando é taxa de transferência de internet e roteadores, é Megabits.

// Então é 1024 * 8 / 10, que ao invés de 102,4 segundos, seria 819,2 segundos.

// Que ao invés de 1 minuto e 42 segundos, vai pra 13 minutos e 40 mais ou menos.

import { Readable, Transform, Writable } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;
  
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i))
        this.push(buf);
      }
    }, 1000)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encondig, callback) {
    const transformed = Number(chunk.toString()) * -1;

    //      Error, transformed data
    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());