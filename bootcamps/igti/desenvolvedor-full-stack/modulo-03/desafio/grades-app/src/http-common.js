import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://grade-api-cja.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
