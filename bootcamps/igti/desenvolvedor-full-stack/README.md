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
  - [Trabalho Prático](#trabalho-prático)
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
  - [Aula 1 - Backend, Frontend e API's](#aula-1---backend-frontend-e-apis)
    - [Backend](#backend)
    - [Frontend](#frontend)
    - [API (Application Programming Interface)](#api-application-programming-interface)
    - [Webservices](#webservices)
    - [REST (Representation State Transfer)](#rest-representation-state-transfer)
    - [URI (Uniform Resourcer Identifier)](#uri-uniform-resourcer-identifier)
  - [Aula 2 - NodeJS](#aula-2---nodejs-1)
  - [Aula 3 - Hello World Nodejs](#aula-3---hello-world-nodejs)
  - [Aula 4 - Node.js Event Loop](#aula-4---nodejs-event-loop)
  - [Aula 5 - Módulos do Node.js](#aula-5---módulos-do-nodejs)
  - [Aula 6 - Ferramentas para consumo de endpoints](#aula-6---ferramentas-para-consumo-de-endpoints)
  - [Trabalho Prático](#trabalho-prático-1)
  - [Aula 7 - ExpressJS: instalação e rotas](#aula-7---expressjs-instalação-e-rotas)
    - [Instalação](#instalação)
    - [Rotas do Express](#rotas-do-express)
  - [Aula 8 - Express: Middlewares, tratamento de erros e gravação de logs](#aula-8---express-middlewares-tratamento-de-erros-e-gravação-de-logs)
    - [Middlewares](#middlewares)
    - [Tratamento de erros](#tratamento-de-erros)
    - [Gravação de logs](#gravação-de-logs)
    - [Servindo arquivos estáticos](#servindo-arquivos-estáticos)
  - [Aula 9 - Apresentação da API e configurações iniciais](#aula-9---apresentação-da-api-e-configurações-iniciais)
  - [Aula 10 - Métodos POST e GET](#aula-10---métodos-post-e-get)
  - [Aula 11 - Métodos DELETE, PUT e PATCH](#aula-11---métodos-delete-put-e-patch)
  - [Aula 12 - Tratamento de erros, gravação de logs e validação de campos](#aula-12---tratamento-de-erros-gravação-de-logs-e-validação-de-campos)
  - [Aula 13 - Cors e Documentação](#aula-13---cors-e-documentação)
  - [Desafio do Módulo](#desafio-do-módulo-1)
- [Módulo 03](#módulo-03)
  - [Trabalho Prático](#trabalho-prático-2)
  - [Desafio do Módulo](#desafio-do-módulo-2)

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

  - false, 0, null, undefined são tipos considerados _Falsy_, ou seja, tendem a ser falsos

  - true, 1, [1], {id: 1} são tipos considerados _Truthy_, ou seja, tendem a ser vedadeiros

  - Exemplo de igualdade:

    `2 === '2' = false; 2 == '2' = verdadeiro;`

### Aula 6 - JavaScript - Comandos de Bloco

- Operador Ternário:

  ```javascript
  var resposta = a > b ? 'Maior' : 'Menor';
  var resposta = a > b ? 'Maior' : a < b ? 'Menor' : 'Igual';
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

var peseronalDataArray = documento.querySelectorAll('.personal-data'); // Pega todos os elementos que tem a classe;
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

### Trabalho Prático

{ ... }

### Aula 10 - JavaScript moderno - Introdução

- **Template Literals**

  ```javascript
  let a = 3,
    b = 10,
    c = 7;
  let str = `Meus números são ${a}, ${b} e ${c}`;
  ```

- Boa prática usar _'use strict'_, no incio do arquivo em escopo de funções. Isso mostra mais erros caso ocorram e para a execução do script.

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

Com excessão do _sort()_ (a princípio), todos são métodos **imutáveis**, ou seja, não altera o objeto original, é criado um novo.

Em métodos não mutáveis, não é preciso retorar ao objeto igualando-o a outro ou a ele mesmo, pois o método altera a estrutura orinal. Por exemplo:

```javascript
// Altera a estrutura original.
allCountries.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

// Filter é imutável, por isso é preciso retornar a um novo objeto.
favoriteCountries = favoriteCountries.filter((country) => country.id !== id);
```

- **map:** Gera um novo array transformando os dados.

  ```javascript
  // Retornar um novo objeto
  const nomeEmailArray = people.results.map((person) => {
    return {
      nome: person.name,
      email: person.email,
    };
  });
  ```

- **filter:** gera um novo array filtrando elementos com base em proposição (if/else).

  ```javascript
  const olderThan50 = people.results.filter((person) => {
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
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
  ```

- **some:** verifica se há pelo menos um elemento que atenda à proposição retornando true/false (if/else) ou predicado.

  ```javascript
  // Se encontrou algo de acordo com o critério | true/false
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });
  ```

- **every:** verifica se todos os elementos atendem à proposição, retornando true/false (if/else).

  ```javascript
  // Se todos form iguais ao critério
  const every = people.results.every((person) => {
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
    (person) => person.name.title === 'Mr'
  );

  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );

  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: 'Oi' }];
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

- Dica: Numa função que precise passar 2 parâmetros, mas só é precisar utilizar o segundo, usasse como boa prática o "**\_**" como primeiro parâmetro. Ex:

  ```javascript
  globalNames = globalNames.filter((_, i) => i !== index);
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
  fetch('https://api.github.com/users/cjambrosi').then((resource) => {
    console.log('Promise resolvida');
    console.log('resource', resource);
    resource.json().then((data) => {
      console.log('data', data);
      showData(data);
    });
  });

  console.log('Depois resolvida');

  const showData = (data) => {
    const user = document.querySelector('#user');
    console.log(`${data.login} - ${data.name}`);
    user.textContent = `${data.login} - ${data.name}`;
  };
  ```

- **Promises**.

  - São construções cuja a execução **retorna algo no futuro**, ou seja, é uma **promessa de execução**.

  - A execução pode ser **resolvida (ok)**, ou **rejeitada (erro)**.

  - A promise resolvida é interceptada com **then**.

  - A promise rejeitada é interceptada com **catch**.

  - Resolve parcialmente o problema do **callback heel**, ou seja, funções que eram passadas por parâmetros de outras funções (triângulo lateral).

  ```javascript
  fetch('https://api.github.com/users/cjambrosi')
    .then((resource) => {
      resource.json().then((data) => {
        console.log('data', data);
        showData(data);
      });
    })
    .catch((error) => {
      console.error('Erro na requisição');
    });

  // Exemplo criação de Promise
  const divisionPromise = (a, b) => {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject('Não é possível dividr por 0');
      }

      resolve(a / b);
    });
  };

  divisionPromise(10, 2).then((result) => {
    console.log('result', result);
  });
  divisionPromise(10, 0)
    .then((result) => {
      console.log('result', result);
    })
    .catch((errorMessage) => {
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
  const divisionPromise = (a, b) => {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject('Não é possível dividr por 0');
      }

      resolve(a / b);
    });
  };

  // Isso é muito confuso
  const executeDivisionPromise = () => {
    divisionPromise(10, 0)
      .then((result) => {
        console.log('result', result);
      })
      .catch((errorMessage) => {
        console.log(`Falha na divisão ${errorMessage}`);
      });
  };
  executeDivisionPromise();

  const executeDivisionPromiseAsyncAwait = async () => {
    const division = await divisionPromise(10, 2);
    console.log('divisionAsync', division);

    const division2 = await divisionPromise(10, 0);
    console.log('divisionAsync2', division2);
  };
  executeDivisionPromiseAsyncAwait();

  // Exemplo de Async com Fetch
  const doFetchAsync = async () => {
    const res = await fetch('https://api.github.com/users/cjambrosi');
    const json = await res.json();
    console.log('json', json);
  };
  doFetchAsync();
  ```

### Aula 17 - Exercício guiado

{ ... }

### Desafio do Módulo

{ ... }

## Módulo 02

### Aula 1 - Backend, Frontend e API's

#### Backend

Se refere a parte que fica hospedada no servidor, focando principalmente em como a aplicação funciona. Responsável por interagir com o banco de dados, granvando e buscando registros. Importane para armazenar as regras de negócio da aplicação.

Exemplos de linguagens:

- Java
- C#
- PHP
- JavaScript (NodeJS)

#### Frontend

Parte da aplicação com a qual o usuário interege. As páginas podem ser montadas no servidor e devolvidas prontas para o usuário ou montadas no próprio browser do usuário. (Server Side Rendering e Cliente Side Rendering).

- HTML
- CSS
- JavaScript

#### API (Application Programming Interface)

Conjunto de serviços que são expostos de forma a permitir a comunicação entre sistemas. Uma aplicação acessa recursos da outra sem saber como foram implementados (quem está fornecendo tem um maior controle sobre o que está sendo feito). Pode ser vista como um contrato, representado pela documentação.

#### Webservices

Serviços que fazem parte de uma API. Um Webservice somente transmite as informações, não sendo por si só uma aplicação possível de ser acessada pela web. Muitas empresas estão criando APIs de suas aplicações, de forma a possibilitar a fácil integração de outras aplicações.

Algumas características

- Facilidade na integração de sistemas: Depende do protocolo HTTP e um formato, com o JSON.
- Favorece a reutilização de software: Integração entre aplicações desenvolvidas em liguagens e plataformas diferentes.
- Segurança na integração: Evita que aplicações integrem diretamente pelo banco de dados.

#### REST (Representation State Transfer)

Descrito por Roy Fielding, um dos criadores do protocolo HTTP. Utiliza uma URI para realizar uma chamada de serviço.
Geralmente aplicações web que trabalham com REST utilizam o formato JSON.

#### URI (Uniform Resourcer Identifier)

URIs são interfaces de utilização do serviço, servindo como um contrato, exemplo: <http://www.teste.com.br/clientes/2>.
As URIs que uma API disponibiliza também são conhecidadas como seus **endpoints**.

Através dos endpoints é possível realizar várias operações. Além do endpoint, o cliente precisa informar o método HTTP:

- GET: Obter os dados de um recurso.
- POST: Criar um novo recurso.
- PUT: Substituir os dados de um determinado recurso.
- DELETE: Excluir um determinado recurso.

### Aula 2 - NodeJS

Foi criado em 2009 na tentativa de resolver o problema de arquiteturas bloqueantes. Plataformas como .NET, Java, ou PHP paralisam um processamento enquanto realizam um processo de I/O no servidor. Esta paralização é o chamado modelo bloqueante (Blocknig-Thread).

Enquanto uma requisição é processada, as demais ficam ociosas em espera. Esses servidores criam várias threads para darem vazão a fila de espera, pode ser necessário fazer upgrade dos hardwares.

O NodeJS possui uma arquitetura não bloqueante (non-blocking-thread). Apresentando uma boa performance em consumo de memória e utilizando ao máximo o poder de processamento dos servidores. Nele as aplicações são single-thread, ou seja, cada aplicação possui um único processo. Utiliza bastante a programação assíncrona, com o auxílio das funções callback do JavaScript.

Em uma arquitetura bloqueane, o jeito de lidar com essa concorrência seria criar múltiplas threads para lidar com as diversas requsições.

O NodeJS foi criado utilizando o V8, que é um motor JavaScript de código aberto, criado pela Google e utilizado no Google Chrome. Com ele é possível executar código JavaScript no servidor, mantendo um serviço rodando no servidor, que faz a interpretação e execução de códigos JavaScript.

A criação do NodeJS está muito ligada com a crescente utilização das SPAs. Também é possível criar aplicações desktop, com o auxílio de ferramentas como o Electron por exemplo. Pode ser utilizado em aplicações Real-Time, como aplicações colaborativas, por exemplo: Aplicativos de mensagens e jogos online.

O NodeJS não é muito recomendado para aplicações que lidam com algoritmos complexo e que consumam muita CPU. Esta limitação pode ser contornada com a utilização de **Workers** (Instaciar o NodeJS (V8) para um algoritmo específico, por exemplo).

### Aula 3 - Hello World Nodejs

Iniciar projeto em NodeJS

> npm install

Iniciar projeto em NodeJS aceitando todas as opções como _default_.

> npm install -y

```javascript
console.log(process.argv); // Fornecido pelo Node (Array)
```

### Aula 4 - Node.js Event Loop

O NodeJS é uma plataforma baseada em eventos. Isso significa tudo que acontece no NodeJS é uma reação a um evento. Seguindo a mesma filosofia de orientação de eventos do JavaScript. Uma transação processada passa por várias callbacks.

O NodeJS trabalhar dessa forma porque as operações de I/O e de rede são muito lentas.

Graças ao **Event Loop** o NodeJS trabalha com assincronismo, permitindo que seja desenvolvido uma aplicação orientada a eventos, graças ao Event Loop. O **Event Loop** basicamente é um loop infinito, que a cada iteração verifica se exitem novos eventos em sua fila de eventos.

O módulo responsável por emitir eventos é o EventEmitter. Quando um evento é emitido, ele é enviado para a fila de eventos, para que o Event Loop possa executá-lo e depois retornar seu callback.

O Event Loop possui uma _stack_, e sempre que um método é chamado ele entra na _stack_ para aguardar seu processamento.

Quando são executadas ações de I/O que demandaram tempo, o NodeJS envia essas operações para outra thread do sistema. Após outra thread dos sistema executar a tarefa I/O, ele envia essa tarefa para a Task Queue.

Na Task Queue há dois tipos de tasks, as _micro tasks_ e as _macro tasks_. Somente as _macro tasks_ devem ser processadas em um ciclo do Event Loop. As _micro taskas_ são tarefas que devem ser executadas rapidamente após alguma ação.

Após o Event Loop processar uma _macro task_ da Task Queue, ele deve processar todas as _micro tasks_ disponíveis antes de chamar outra _macro task_.

### Aula 5 - Módulos do Node.js

Módulos do NodeJS é o mesmo que uma biblioteca no JavaScript, é um conjunto de funções que podem ser incluídas em uma aplicação. O NodeJS segue o **CommonJS**, uma especificação de ecossistemas para JavaScript.

Porém, recentemente passou a oferecer suporte ao ES Modules (no momento, ainda experimental), padrão atual para exportação/importação de módulos. Assim é possível incluir um módulo que está em outro arquivo, sendo possível criar um módulo e importa-lo em outro arquivo facilmente.

- CommonJS: require
- ES Modules: import
- Exemplos de módulos nativos:
  - File System
  - Readline
  - Eventes
  - HTTP

Para utilizar o padrão ES Modules é preciso alterar a extensão do arquivo de **.js** para **.mjs** ou no arquivo **package.json** do projeto NodeJS, alterar/incluir o **type** para **module**.

```json
"type": "module"
```

Nas versões 12.18 do NodeJS para trás, é preciso rodar o _index.js_ com a seguinte flag:

> node index.js --experimental-modules

Exemplos de importação/exportação com o CommonJS:

```javascript
// File: operacoes.js

const nome = 'Teste Exportação';

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

module.exports = { soma, subtracao, nome }; // Exportação default, exportando um objeto.
```

```javascript
// File: operacoes2.js

function multiplicacao(a, b) {
  return a * b;
}

module.exports = multiplicacao;
```

```javascript
// File: index.js

const op = require('./operacoes.js');
const op2 = require('./operacoes2.js');

op.nome;
op.soma(2, 3);
op.subtracao(5, 3);
op2.multiplicacao(3, 4);
```

Exemplos de importação/exportação com o ES Modules:

```javascript
// File: operacoes.js

const nome = 'Teste Exportação';

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

export default { soma, subtracao, nome };
```

```javascript
// File: operacoes2.js

function multiplicacao(a, b) {
  return a * b;
}

export default multiplicacao;
```

```javascript
// File: exportacoesNomeadas.js

export function divisao(a, b) {
  // Tipo de exportação chamada de Exportação Nomeada.
  return a / b;
}

export function resto(a, b) {
  // Tipo de exportação chamada de Exportação Nomeada.
  return a % b;
}
```

```javascript
// File: index.js

import op from './operacoes.js';
import op2 from './operacoes2.js';

// Maneira de importar uma Exportação Nomeada.
import { divisao, resto } from './exportacoesNomeadas.js'; // Obriga usar o mesmo nome declarado no arquivo.

op.nome;
op.soma(2, 3);
op.subtracao(5, 3);
op2.multiplicacao(3, 4);

divisao(10, 2);
resto(7, 2);
```

Módulo Default - File System

```javascript
import fs from 'fs';

// Exemplo de Event Loop

// Esvrever em um arquivo
fs.writeFile('teste.txt', 'bla bla bla', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Arquivo escrito com sucesso!');

    // Adiciona conteúdo no final do arquivo
    fs.appendFile('teste.txt', '\nteste apeend file', function (err) {
      if (err) {
        console.log(err);
      }
    });

    // Ler um arquivo
    fs.readFile('teste.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});
```

- Lendo arquivo de forma Síncrona

  ```javascript
  import fs from 'fs';

  trye {
    console.log('1');
    fs.writeFileSync('teste.txt', 'bla bla bla');
    console.log('2');
    const data = fs.readFileSync('teste.txt', 'utf-8');
    console.log(data);
    console.log('3');
  } catch(err) {
    console.log(err);
  }
  ```

- Importar módulo em formato de Promises

  ```javascript
  import { promises as fs } from 'fs';

  // Maneira Ruim para ler um arquivo
  fs.writeFile('teste.txt', 'bla bla bla')
    .then(() => {
      fs.appendFile('teste.txt', '\nteste append file')
        .then(() => {
          fs.readFile('teste.txt', 'utf-8')
            .then((resp) => {
              console.log(resp);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });

  // Melhor maneira para ler um arquivo (asybc/await)
  async function init() {
    try {
      await fs.writeFile('teste.txt', 'bla bla bla');
      await fs.appendFile('teste.txt', '\nteste append file');
      const data = await fs.readFile('teste.txt', 'utf-8');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  ```

Módulo Default - File System JSON

```javascript
import { promises as fs } from 'fs';

//  JSON.stringify
async function writeJson() {
  try {
    // Valores iniciais
    const arrayCarros = ['Palio', 'Gol', 'Uno'];
    const obj = { carros: arrayCarros };

    // Leitura do conteúdo atual do objeto
    await fs.writeFile('teste.json', JSON.stringify(obj));
    const data = JSON.parse(await fs.readFile('teste.json'));

    // Modificado conteúdo objeto
    data.carros.push('Sandero');

    // Sobrescrito conteúdo do objeto
    await fs.writeFile('teste.json', JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}
```

Módulo Default - Read Line

- Permite entradas do usuário (terminal, por exemplo).

```javascript
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite um Número: ', (numero) => {
  console.log(numero);
  rl.close(); // Se quiser encerrar o programa
});

function pergunta() {
  rl.question('Digite um Número: ', (numero) => {
    if (parseInt(numero) === -1) {
      rl.close();
    } else {
      const multiplos = [];
      for (let i = 3; i < parseInt(numero); i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          multplos.push(i);
        }
      }

      console.log(multiplos);
      pergunta();
    }
  });
}
```

Módulo Default - Events

```javascript
// events.js

import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('testEvent', (obj) => {
  console.log(obj);
});

export default eventEmitter;
```

```javascript
// index.js

import ev from './events.js';

eventEmitter.on('testEvent', () => {
  console.log('Ouviu tbm!');
});

ev.emit('testEvent', 'bla bla bla');
```

Módulo Default - HTTP

> npm install nodemon -g

> nodemon index.js

```javascript
import http from 'http';

http
  .createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/teste') {
      res.write('GET /teste executado com sucesso!'); // Responde na tela para o usuário
    } else {
      res.write('Hello Word');
    }

    res.statusCode = 200;
    res.end();
  })
  .listen(8080);
```

### Aula 6 - Ferramentas para consumo de endpoints

Insomnia: <https://insomnia.rest/>

Postman: <https://www.postman.com/>

### Trabalho Prático

{ ... }

### Aula 7 - ExpressJS: instalação e rotas

O ExpressJS é um framework web para NodeJS. Com ele o desenvolvimento de aplicações é mais rápido e fácil em comparação ao desenvolvimento somente utilizando o NodeJS. Se autodescreve como um framework web rápido, flexível e minimalista para NodeJS.

Facilita o roteamento (se refere a como os endpoints respondem as solicitações) da aplicação, baseado nos métodos HTTP e URLs.

#### Instalação

Criar projeto Node.

> npm install -y

Instalar o pacote do ExpressJS.

> npm install express

Para não ter que "restartar" toda a vez o servidor, instale o Nodemon.

> npm install -g nodemon

- Para executar:

  > nodemon index.js

Exemplo de utilização do ExpressJS:

```javascript
// index.js

impot express from 'express';

const app = express();

app.post('/', (req, res) => {
  const a = 3;
  const a = 5;
  res.send('Resultado: ' + soma(a, b));
})

function soma(a, b) {
  const resultado = a + b;
  return resultado;
}

app.get('/', (req, res) => {
  res.send('GET | Hello World!');
});

app.listen(3000, () => {
  console.log('API Started!');
});
```


https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch


Tutor Marco Ramos 07:46 PM 
Oi Pedro.
Abra o prompt de comando como administrador e digite:
netstat -a -b
aí voce vai ter o nome do processo que está utilizando tal porta e você pode finalizá-lo pelo Gerenciador de Tarefas.


https://restfulapi.net/http-methods/

Tutor Odivaney Ramos 08:07 PM 
Eu me equivoquei Denner, o ideal é fazer algo paliativo como vc fez realmente.
Tutor Odivaney Ramos 08:08 PM 
https://www.it-swarm.dev/pt/node.js/como-enviar-numeros-inteiros-nos-parametros-de-consulta-no-servico-nodejs-express/1042501448/

#### Rotas do Express

Caracteres especiais na rota:

```javascript
// index.js

import express from 'express';

const app = express();

// Pega todos os tipos de requisições do método HTTP e retorna a mesma callback
app.all('/testeAll', (req, res) => {
  res.send(req.method);
});

// Ultimo caracter é opcional, exemplo: test
app.get('/teste?', (_, res) => {
  res.send('/teste?');
});

// Ultimo caracter pode repetir várias vezes, ex: testeeeee
app.get('/teste+', (_, res) => {
  res.send('/teste+');
});

// Pode inserir qualquer coisa depois do "one", que ele cairá na rota "one"
app.get('/one*blue', (_, res) => {
  res.send(req.path);
});

// Tudo dentro do () é tratado como unidade
app.post('/test(ing)?', (_, res) => {
  res.send('/test(ing)?');
});

// Utilizar expressões regulares. No caso, qualquer string contenhar a palavra "red"
app.get(/.*red$/, (_, res) => {
  res.send('/.*red$/');
});

app.list(3000, () => {
  console.log('API Started');
});
```

Parâmetros na rota:

```javascript
// index.js

import express from 'express';

const app = express();

// É preciso avisar ao Express que queremos utilizar JSON no envio do Boddy
app.use(express.json());

app.get('testParam/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('testParam/:id/:a?', (req, res) => {
  res.send(req.params.id + ' ' + req.params.a);
});

// Parâmetro NEXT, serve para passar para a próxima função callback
app.get(
  'testMultipleHandlers',
  (req, res, next) => {
    console.log('Callback 1');
    next();
  },
  (req, res) => {
    console.log('Callback 2');
    // É preciso fechar a requisição
    res.end(); // Se não tem resposta
    res.send('bla bla'); // Se tem resposta
  }
);

// Com Array
const callback1 = (req, res) => {
  console.log('Callback1');
  nex();
};

function callback2(req, res) {
  console.log('Callback2');
  nex();
}

const callback3 = (req, res) => {
  console.log('Callback3');
  res.end();
};

app.get('/testMultiplesHandlersArray', [callback1, callback2, callback3]);

app.list(3000, () => {
  console.log('API Started');
});
```

Parâmetros via Query na rota: É feito a partir de um ponto de interrogação, assim ele não faz parte da rota obrigatório. Sendo possível capturar em formato JSON. Ex:

`http://localhost:3000/testQuery?nome=joao&email=joao@gmail.com&...`

```javascript
// index.js

import express from 'express';

const app = express();

// É preciso avisar ao Express que queremos utilizar JSON no envio do Boddy
app.use(express.json());

app.get('testQuery', (req, res) => {
  res.send(req.query);
});

app.list(3000, () => {
  console.log('API Started');
});
```

Route do ExpressJS: Rotas que irão responder no mesmo endereço, mudando somente o tipo/verbo do método HTTP, podem ser agrupadas numa mesma rota. Devem ser definidas.

```javascript
// index.js

import express from 'express';

const app = express();

// É preciso avisar ao Express que queremos utilizar JSON no envio do Boddy
app.use(express.json());

app
  .route('/testRoute')
  .get((req, res) => {
    res.send('/testRoute GET');
  })
  .post((req, res) => {
    res.send('/testRoute POST');
  })
  .delete((req, res) => {
    res.send('/testRoute DELETE');
  });
// Poderia definir o método PUT, não é obrigatório, é possível definir só o que precisa

app.list(3000, () => {
  console.log('API Started');
});
```

### Aula 8 - Express: Middlewares, tratamento de erros e gravação de logs

#### Middlewares

Funções middlewares são funções que tem acesso ao seguinte:

- Objeto de solicitação (req).
- Objeto de resposta (res).
- Próxima função de middleware no ciclo de requisição e resposta do aplicativo (next).

Podem executar qualquer código, fazer mudanças nos objetos de solicitação, encerrar o ciclo e chamar a próxima função de middleware na pilha. Pode se uilizado para interceptar chamadas em específico ou qualquer chamada. São as funções que são executadas quando determinada rota é atingida.

É possível criar middlewares a nível de aplicação e a nível do roteador. Rotas no nível de roteador, é possível agrupar requisições e coloca-las em outro arquivo.

Nível de Aplicação:

```javascript
// index.js

import express from 'express';

const app = express();
app.use(express.json());

// Forma de executar um código, independente da requisição.
app.use((req, res) => {
  console.log(new Date());
  next();
});

app.get((req, res) => {
  res.send();
});

app.list(3000, () => {
  console.log('API Started');
});
```

Nível de Roteador:

```javascript
// carrosRouter.js

import express from 'express';

const router = express.Router();
// router.use(express.json());

router.get('/', (req, res) => {
  console.log('GET /carros');
  res.send('GET /carros');
});

router.get('/precos', (req, res) => {
  console.log('GET /carros/precos');
  res.send('GET /carros/precos');
});

export default router;
```

```javascript
// index.js

import express from 'express';
import carrosRouter from './carrosRouter.js';

const app = express();
app.use(express.json());

app.use('/carros', carrosRouter);

app.list(3000, () => {
  console.log('API Started');
});
```

#### Tratamento de erros

Tratamento de erros é uma parte muito importante de uma API, pois um erro pode ser originário de vários pontos. É importante que a API seja capaz de se recuperar de um erro e informar adequadamente ao usuário o que ocorreu. O Express faz um tratamento padrão caso nenhum outro tenha sido especificado.

Caso o erro tenha sido gerado a partir de um código assíncrono e deseja utilizar o tratamento padrão, é preciso passar o erro para o "next".

O Express permite que o desenvolvedor escreve as próprias funções para tratamento de erro, basta adicionar um quarto parâmetro na função de middleware.

O middleware para tratamento de excessões deve ser configurado por ultimo na instância do Express, assim ele receberá erros gerados em todas as definições anteriores.

É permitido que exista várias funções de tratamento de erros. Basta chama o "next" passando o objeto de erro como parâmetro, para envia o fluxo para próxima função. Neste caso a última função de tratamento deverá encerrar a requisição através do objeto de resposta.

```javascript
// index.js

import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  throw new Error('Error message test'); // Forçando um erro
});

// Em funções assincronas, se ocorrer um erro é preciso passar ele para o "next"
// se não a requisição entra em looping, pois não há retorno
// Sempre colocar o código em uma estrutura Try Catch
app.post('/', async (req, res, next) => {
  try {
    throw new Error('Error message async');
  } catch (err) {
    next(err);
  }
});

// Interessante usar ela final, se for utilizar em todas as funções a cima dela.
app.use((err, req, res, next) => {
  console.log('Erro 1');
  next(err); // É preciso enviar o erro para a proxima função, se houver uma próxima
});

app.use((err, req, res, next) => {
  console.log('Erro 2');
  res.status(500).send('Ocorreu um erro, tente novamente mais tarde.');
});

app.list(3000, () => {
  console.log('API Started');
});
```

#### Gravação de logs

Uma funcionalidade muito importante para uma API é a gravação de logs. Métodos do console nativo do JavaScript, como console.log, console.error, e console.warn, não é possível desativas seus logs, nem definir o nível de logs e são funções síncronas.

Existem várias bibliotecas de log para o Node que tentam oferecer uma solução de log mais completa. Como por exemplo a **Winston**. Que é uma biblioteca que permite vários tipos de transporte (por exemplo, gravar em uma Banco de Dados), permite a configuração de formatos de log, até 7 níveis, que são:
**error: 0**, **warn: 1**, **info: 2**, **http: 3**, **verbose: 4**, **debug: 5**, **silly: 6**.

Para instalar a biblioteca **Winston**:

> npm intall winston

```javascript
// index.js

import express from 'express';
import winston from 'winston';

const app = express();
app.use(express.json());

const { combine, printf, label, timestamp } = winston.format;

const myFormat = printf({
  (level, message, label, timestamp) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  }
});

// Configurações do Winston
const logger = winston.createLogger({
  level: 'silly', // Definir o nível para imprimir
  transports: [
    new winston.transports.Console(), // Ir para o console
    new winston.transports.File((filename: 'my-log.log')), // Ir para um arquivo
  ],
  format: combine(
    label({ label: 'my-app'}),
    timestamp(),
    myFormat
  )
});

logger.error('Error log');
logger.warn('Warn log');
logger.info('Info log');
logger.verbose('Verbose log');
logger.debug('Debug log');
logger.silly('Silly log');

logger.log('info', 'Hello with parameter!');

app.list(3000, () => {
  console.log('API Started');
});
```

#### Servindo arquivos estáticos

Uma funcionalidade interessante do Express é que ele permite que sejam servidos arquivos estáticos.

O **express.static**, que recebe como parâmetro o diretório raiz de onde estão localizados os arquivos partindo da raiz da aplicação (documentação da aplicação ou arquivo pro front-end). Pode-se utilizar estes métodos várias vezes para servir vários diretórios. Também, pode-se criar um diretório virtual, passando como parâmetro o nome desejado.

```javascript
// index.js

import express from 'express';

const app = express();
app.use(express.json());

// Caminho do diretório que poderá ser acessado
// No caso, diretório que contém imagens
app.use(express.static('public'));

// É possível definir que uma rota seja acessar por uma caminho virtual
app.use('/images', express.static('public'));

app.list(3000, () => {
  console.log('API Started');
});
```

### Aula 9 - Apresentação da API e configurações iniciais

{ ... }

### Aula 10 - Métodos POST e GET

{ ... }

### Aula 11 - Métodos DELETE, PUT e PATCH

{ ... }

### Aula 12 - Tratamento de erros, gravação de logs e validação de campos

{ ... }

### Aula 13 - Cors e Documentação

### Desafio do Módulo

## Módulo 03

### Trabalho Prático

### Desafio do Módulo
