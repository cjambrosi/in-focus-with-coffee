import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: {
    type: String, // Or | Number | Date | Object
    require: true // Or false
  },
  subject: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  value: {
    type: Number,
    require: true,
    min: 0,
    // validade(value) {
    //   if (value < 0) {
    //     throw new Error('Valor negativo para a nota, não é permitido!');
    //   }
    // }
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

const studentModel = mongoose.model('student', studentSchema, 'student'); // Se não repeter o 'student', o Mongoose não criar o modelo no singular e sim no plural 'students'.

export { studentModel };