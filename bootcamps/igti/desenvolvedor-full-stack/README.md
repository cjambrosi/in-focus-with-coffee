# Bootcamp Online - Desenvolvedor Full Stack

## Módulo 01

Aula 1 - Visual Studio Code

- Debugger for Chrome

- Prettier - Code formatter

- Live Server

Aula 2 - Node.js

- npm install -g live-server

Aula 3 - Noções de HTML

- Não é linguagem de progração e sim marcação, estrutura conteúdo.

- Escrevemos de forma declarativa, ou seja, escreve o que tem que ser feito e o navegador se vira pra renderizar.

- Utilize sempre caminhos relativos em imagens, arquivos e etc (./ ../).

Aula 4 - Noções de CSS

- CSS Reset, geralmente os frameworks já estão configurados para isso, do contrário é recomendado fazer.

  - <https://meyerweb.com/eric/tools/css/reset>

Aula 5 - Introdução ao JavaScript

- Tipos de dados:

  - Number: 1, -3, 8.56

  - String: "Teste", "3.14", 'Aspas Simples'

  - Boolean: true, false

  - Null: null (Explicitamente definido pelo programador)

  - Undefined: undefined (ausência de valor)

  - Object: (Tipo não primitivo) [1, 3, 5], [6, 'sete', true], {id: 2, nome: 'Raphael'}

  - Tipagem fraca

  - false, 0, null, undefined são tipos considerados *Falsy*, ou seja, tendem a ser falsos

  - true, 1, [1], {id: 1} são tipos considerados *Truthy*, ou seja, tendem a ser vedadeiros

  - Exemplo de igualdade:

    `2 === '2' = false; 2 == '2' = verdadeiro;`

Aula 6 - JavaScript - Comandos de Bloco

- Operador Ternário:

  ```javascript
  var resposta = (a > b) ? 'Maior' : 'Menor';
  var resposta = (a > b) ? 'Maior' : (a < b) ? 'Menor' : 'Igual';```

- Uma função pode retornar mais de um valor, porém é preciso retornar um objeto com chave valor. Caso contrário é 1 ou nada (void).

- Compara valores:

  ```javascript
   function compareNumbers(a, b) {
     // return a > b ? 1 : a < b ? -1 : 0;
     retrun a - n;
   }
  ```
  
Aula 7 - JavaScript - Manipulação do DOM

  ```javascript
  var title = document.querySelector('h1'); // Se tiver mais de 1 elemento, só vai pegar 1
  title.textContent = 'Mudar texto';

  var peseronalDataArray = documento.querySelectorAll('.personal-data') // Pega todos os elementos que tem a classe;
  console.log(peseronalDataArray);
  peseronalDataArray = Array.from(peseronalDataArray);
  console.log(peseronalDataArray);

  for (var i = 0; i < peseronalDataArray.length; i++) {
    var currentElement = peseronalDataArray[i];
    currentElement.classList.add('classe-css');
    currentElement.classList.remove('outra-classe-css');
  }
  ```

Aula 8 - JavaScript - Formulários e Manipulação de Eventos

- **eventPreventDefault:** "Evite o comportamento default", como por exemplo enviar para o servidor e ai manipular os dados.

Aula 9 - CRUD com HTML, CSS e JavaScript

Trabalho Prático do Módulo

## Módulo 02

## Módulo 03
