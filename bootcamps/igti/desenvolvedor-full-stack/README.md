# Bootcamp Online - Desenvolvedor Full Stack <!-- omit in toc -->

Link: <https://www.igti.com.br>

- [Módulo 01](#módulo-01)
  - [Aula 1 - Visual Studio Code](#aula-1---visual-studio-code)
  - [Aula 2 - Node.js](#aula-2---nodejs)
  - [Aula 3 - Noções de HTML](#aula-3---noções-de-html)
  - [Aula 4 - Noções de CSS](#aula-4---noções-de-css)
  - [Aula 5 - Introdução ao JavaScript](#aula-5---introdução-ao-javascript)
  - [Aula 6 - JavaScript - Comandos de Bloco](#aula-6---javascript---comandos-de-bloco)
  - [Aula 7 - JavaScript - Manipulação do DOM](#aula-7---javascript---manipulação-do-dom)
  - [Aula 8 - JavaScript - Formulários e Manipulação de Eventos](#aula-8---javascript---formulários-e-manipulação-de-eventos)
  - [Aula 9 - CRUD com HTML, CSS e JavaScript](#aula-9---crud-com-html-css-e-javascript)
  - [Trabalho Prático do Módulo](#trabalho-prático-do-módulo)
  - [Aula 10 - JavaScript moderno - Introdução](#aula-10---javascript-moderno---introdução)
  - [Aula 11 - JavaScript moderno - Manipulação de arrays](#aula-11---javascript-moderno---manipulação-de-arrays)
  - [Aula 12 - JavaScript moderno - Rest/Spread operator e destructuring](#aula-12---javascript-moderno---restspread-operator-e-destructuring)
  - [Aula 13 - Refatoração do projeto de CRUD](#aula-13---refatoração-do-projeto-de-crud)
  - [Aula 14 - Introdução à programação assíncrona com JavaScript](#aula-14---introdução-à-programação-assíncrona-com-javascript)
  - [Aula 15 - Funções setTimeout e setInterval](#aula-15---funções-settimeout-e-setinterval)
  - [Aula 16 - Requisições HTTP com JavaScript](#aula-16---requisições-http-com-javascript)
  - [Aula 17 - Exercício guiado](#aula-17---exercício-guiado)
  - [Desafio do Módulo](#desafio-do-módulo)
- [Módulo 02](#módulo-02)
- [Módulo 03](#módulo-03)

## Módulo 01

### Aula 1 - Visual Studio Code

- Debugger for Chrome

- Prettier - Code formatter

- Live Server

### Aula 2 - Node.js

- npm install -g live-server

### Aula 3 - Noções de HTML

- Não é linguagem de progração e sim marcação, estrutura conteúdo.

- Escrevemos de forma declarativa, ou seja, escreve o que tem que ser feito e o navegador se vira pra renderizar.

- Utilize sempre caminhos relativos em imagens, arquivos e etc (./ ../).

### Aula 4 - Noções de CSS

- CSS Reset, geralmente os frameworks já estão configurados para isso, do contrário é recomendado fazer.

  - <https://meyerweb.com/eric/tools/css/reset>

### Aula 5 - Introdução ao JavaScript

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

### Aula 6 - JavaScript - Comandos de Bloco

- Operador Ternário:

  ```javascript
  var resposta = (a > b) ? 'Maior' : 'Menor';
  var resposta = (a > b) ? 'Maior' : (a < b) ? 'Menor' : 'Igual';
  ```

- Uma função pode retornar mais de um valor, porém é preciso retornar um objeto com chave valor. Caso contrário é 1 ou nada (void).

- Comparar valores:

  ```javascript
   function compareNumbers(a, b) {
     // return a > b ? 1 : a < b ? -1 : 0;
     retrun a - n;
   }
  ```
  
### Aula 7 - JavaScript - Manipulação do DOM

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

### Aula 8 - JavaScript - Formulários e Manipulação de Eventos

- **eventPreventDefault:** "Evite o comportamento default", como por exemplo enviar para o servidor e ai manipular os dados.

### Aula 9 - CRUD com HTML, CSS e JavaScript

  { ... }

### Trabalho Prático do Módulo

  { ... }

### Aula 10 - JavaScript moderno - Introdução

- **Template Literals**

  ```javascript
  let a = 3, b = 10, c = 7;
  let str = `Meus números são ${a}, ${b} e ${c}`
  ```

- Boa prática usar *'use strict'*, no incio do arquivo em escopo de funções. Isso mostra mais erros caso ocorram e para a execução do script.

- **var** tem escopo abrangente e **let** tem o escopo reduzido.

- Uma variável do tipo **const** não é possível reatribuir valores. Com "certa" excessão de objetos e arrays, não é possível atribuir um novo objeto ou array, mas é pissível alterar os valores das propriedades do objeto ou dar push de um novo valor no array.

- Tipos de funções:

  ```javascript
  // Função comum do ECM5
  function sum(a, b) {
    return a + b;
  }

  // Função anônima
  const sum2 = function (a, b) {
    retrun a + b;
  }

  // Arrow function
  const sum3 = (a, b) {
    return a + b; 
  }

  // Arrow function reduzida (apenas uma instrução)
  const sum3 = (a, b) => a + b;

  // Default parameters 
  // (Não pode no primeiro, pois quando se chama a função, o primeiro parâmetro é sempre obrigatório)
  const sum4(a, b = 10) => a + b;
  ```

### Aula 11 - JavaScript moderno - Manipulação de arrays

  Com excessão do *sort()* (a princípio), todos são métodos **imutáveis**, ou seja, não altera o objeto original, é criado um novo.
  
  Em métodos não mutáveis, não é preciso retorar ao objeto igualando-o a outro ou a ele mesmo, pois o método altera a estrutura orinal. Por exemplo:

  ```javascript
  // Altera a estrutura original.
  allCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  // Filter é imutável, por isso é preciso retornar a um novo objeto.
  favoriteCountries = favoriteCountries.filter(country => country.id !== id);
  ```

- **map:** Gera um novo array transformando os dados.

  ```javascript
  // Retornar um novo objeto
  const nomeEmailArray = people.results.map(person => {
    return {
      nome: person.name,
      email: person.email
    }
  });
  ```

- **filter:** gera um novo array filtrando elementos com base em proposição (if/else).

  ```javascript
  const olderThan50 = people.results.filter(person => {
    return person.dob.age > 50;
  });
  ```

- **forEach:** percorre todos os elementos do array, aplicando lógica.

  ```javascript
  // Incluir nova propriedade no objeto
  const mappedPeople.forEach(person => {
    person.nameSize = 
      person.name.title.length + 
      person.name.first.length + 
      person.name.last.length;
  });
  ```

- **reduce:** realiza cáculo interativo com base nos elementos.

  ```javascript
  // Somar as idades de todos (substitui for, por exemplo)
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  ```

- **find:** encontra elementos com base em proposições (if/else).

  ```javascript
  // Encontrar primeira ocorrência
  const found = people.results.find(person => {
    return person.location.state === 'Minas Gerais';
  });
  ```

- **some:** verifica se há pelo menos um elemento que atenda à proposição retornando true/false (if/else) ou predicado.

  ```javascript
  // Se encontrou algo de acordo com o critério | true/false
  const found = people.results.some(person => {
    return person.location.state === 'Amazonas';
  });
  ```

- **every:** verifica se todos os elementos atendem à proposição, retornando true/false (if/else).

  ```javascript
  // Se todos form iguais ao critério
  const every = people.results.every(person => {
    return person.nat === 'BR';
  });
  ```

- **sort:** ordena elementos com base em critérios.

  ```javascript
  // startsWith: função padrão do JS
  const mappedNames = people.results
  .map(person => { 
    // return person.name.first; // Retorna Array de strings
    return {
      name: person.name.first; // Retorna Array de strings
    };
  })
  .filter(person => person.name.startsWith('A'))
  .sort((a, b) => {
    return a.name.localeCompare(b.name); // return -1, 0, 1
    // return a.name.length - b.name.length; // return -1, 0, 1
  });
  // .sort(); // Se for puramente string ou tipos numéricos (int, float) funciona tranquilo (talvez)
  ```

### Aula 12 - JavaScript moderno - Rest/Spread operator e destructuring

- Operador **...(spread)** ou espalhar. Em arrays, ele espalha os itens do array, que podem ser recuperados para compor outro array.

  ```javascript
  // Concatenar dois objetos
  const marriedMen = people.results.filter(
    person => person.name.title === 'Mr'
  );

  const marriedWomen = people.results.filter(
    person => person.name.title === 'Ms'
  );

  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: 'Oi'}];
  console.log('marriedPeople', marriedPeople);
  ```

- Operador **...(rest)** ou agrupar. Comum na utilização em funções, agrupando os parâmetros em um array. Sendo sua principal aplicação permitir funções com número infinito de parâmetros.

  ```javascript
  function infiniteSum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 3, 4, 5, 6, 20, 30, 50));
  ```

- **Destructuring**. Facilita a escrita ao trabalhar com objetos, torna o código claro e também é possível utilizar a técnica de destructuring com arrays, usando [].

  ```javascript
  const first = people.results[0];

  // Isso é repetitivo
  const username = first.login.username;
  const password = first.login.password;

  // Usando Destructuring
  const { username, password } = first.login;
  
  console.log('username', username);
  console.log('password', password);
  ```

### Aula 13 - Refatoração do projeto de CRUD

- Dica: Numa função que precise passar 2 parâmetros, mas só é precisar utilizar o segundo, usasse como boa prática o "**_**" como primeiro parâmetro. Ex:

  ```javascript
  globalNames = globalNames.filter((_, i) => i !== index );
  ```

### Aula 14 - Introdução à programação assíncrona com JavaScript

- Operações. Ex:

  - Requisão de APIs.

  - Processamento intenso de dados.

  - Comunicação com bancos de dados.
  
- É extremamente importante que o javascript **não espere o término de instruções lentas**.

- A principal técnica para grantir a afirmação acima é a utilização de **event loop**.

  - Funções a serem executadas ficam em uma pilha lógica de invocações (call stack).

  - Quando a função utiliza Web APIs, ela precisa passar pelo event loop, pois está sujeita a lentidões.

  - O **event loop** executa uma função por vez e faz a orquestração que permite execução assíncrona.

  - Em geral, funções que usam WEB APIs possuem **callbacks** (funções passadas por parâmetro).

  - <https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5>

### Aula 15 - Funções setTimeout e setInterval

- setTimeout(): É utilizada para postergar a execução de uma função e o tempo de atraso é configurável em milissegundos.

- setInterval(): É semelhante ao setTimeout(), mas repete a execução a cada X milissegundos. Pode ser cancelada com **clarInterval**, mas para isso é preciso guardar a referência em uma varável.

  ```javascript
  const timer = document.querySelector('#timer');
  let count = 0;

  const interval = setInterval(() => {
    timer.textContent = ++count;

    if (count === 10) {
      this.clearInterval(interval);
      return;
    }

    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = `${count},5`;
      }, 500);
    }
  }, 1000);
  ```

### Aula 16 - Requisições HTTP com JavaScript

- Comando **Fetch**.

  - Utilizado para requisições HTTP.

  - Trabalha internamente com promises.

  - O primeiro retorno do fetch são dados binários.

  - Em geral, convertemos esses dados para JSON, que retorna outra promise.

  - Vale a leitura sobre a bibliota **axios**.

  ```javascript
  const userGitHub = fetch('https://api.github.com/users/cjambrosi');
  console.log('promise:', userGitHub);
  
  // catch: captura quando da problema
  // then: captura deu certo
  fetch('https://api.github.com/users/cjambrosi').then(resource => {
    console.log('Promise resolvida');
    console.log('resource', resource);
    resource.json().then(data => {
      console.log('data', data);
      showData(data);
    });
  });
  
  console.log('Depois resolvida');

  const showData = data => {
    const user = document.querySelector('#user');
    console.log(`${data.login} - ${data.name}`);
    user.textContent = `${data.login} - ${data.name}`;
  }
  ```

- **Promises**.

  - São construções cuja a execução **retorna algo no futuro**, ou seja, é uma **promessa de execução**.

  - A execução pode ser **resolvida (ok)**, ou **rejeitada (erro)**.
  
  - A promise resolvida é interceptada com **then**.

  - A promise rejeitada é interceptada com **catch**.

  - Resolve parcialmente o problema do **callback heel**, ou seja, funções que eram passadas por parâmetros de outras funções (triângulo lateral).

  ```javascript
  fetch('https://api.github.com/users/cjambrosi')
    .then(resource => {
      resource.json().then(data => {
        console.log('data', data);
        showData(data);
      });
    })
    .catch(error => {
      console.error('Erro na requisição');
    });
  
  // Exemplo criação de Promise
  const  divisionPromise = (a, b) => {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject('Não é possível dividr por 0');
      }

      resolve(a / b);
    });
  };

  divisionPromise(10, 2).then(result => {
    console.log('result', result);
  });
  divisionPromise(10, 0).then(result => {
    console.log('result', result);
  })
  .catch(errorMessage => {
    console.log(`Falha na divisão ${errorMessage}`);
  });
  ```

- **Async/Await**.

  - Açúcar sintático (syntax sugar) sobre promises.

  - Melhoram a **legibilidade** do código.

  - Dá a impressão de código síncrono.

  - Deve-se decorar a função com **async**.

  - Toda intrução relacionada à promise deve ser precedida de **await**.

  ```javascript
  // Exemplo criação de Promise
  const  divisionPromise = (a, b) => {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject('Não é possível dividr por 0');
      }

      resolve(a / b);
    });
  };

  // Isso é muito confuso
  const executeDivisionPromise = () => {
    divisionPromise(10, 0).then(result => {
      console.log('result', result);
    })
    .catch(errorMessage => {
      console.log(`Falha na divisão ${errorMessage}`);
    });
  }
  executeDivisionPromise();

  const executeDivisionPromiseAsyncAwait = async () => {
    const division = await divisionPromise(10, 2);
    console.log('divisionAsync', division);

    const division2 = await divisionPromise(10, 0);
    console.log('divisionAsync2', division2);
  }
  executeDivisionPromiseAsyncAwait();

  // Exemplo de Async com Fetch
  const doFetchAsync = async () => {
    const res = await fetch('https://api.github.com/users/cjambrosi');
    const json = await res.json();
    console.log('json', json);
  }
  doFetchAsync();
  ```

### Aula 17 - Exercício guiado

{ ... }

### Desafio do Módulo

{ ... }

## Módulo 02

## Módulo 03
