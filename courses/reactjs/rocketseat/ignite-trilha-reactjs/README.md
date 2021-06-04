# Ignite: Trilha ReactJS <!-- omit in toc -->

[Rocketseat](https://rocketseat.com.br 'Rocketseat')

[Ambiente de desenvolvimento - Trilha ReactJS](https://www.notion.so/Ambiente-de-desenvolvimento-Trilha-ReactJS-e7a377d183134647a177b6a34785f8c3)

## Sumário <!-- omit in toc -->

## Chapter I

Curiosidade do JavaScript: **let** vem de *let it change* ou seja, *deixa ela mudar*.

### Configurando Ambiente

#### Criando estrutura de pasta do projeto

Instalar o [Yarn](https://yarnpkg.com):

> npm install --global yarn

Iniciar um projeto Node:

> yarn init

- Ou

  > yarn init -y

Instalar o React:

> yarn add react

Instalar o React DOM:

> yarn add react-dom

#### Configurando o Babel

Babel serve basicamente para converter o código parav para outro, onde "todos" os browsers possam entender.

Instalação no projeto:

> yarn add @babel/core @babel/cli @babel/preset-env -D

Para que o Babel entenda o código do React, é preciso instalar outro *preset*.

> yarn add @babel/preset-react -D

Na raiz do projeto, criar o arquivo **babel.config.js**:

```javascript
// File: babel.config.js

module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {
        runtime: 'automatic' // Para não precisar importar o React em todo arquivo
      }]
    ]
}
```

#### Configurando o Webpack

Instalar as seguintes bibliotecas:

> yarn add webpack webpack-cli webpack-dev-server -D

Instalar o **babel-loader**:

> yarn add babel-loader -D

Criar o arquivo **webpack.config.js** na raiz do projeto. Como conveção e evitar problemas de diferenças entre Sistemas Operacionais referentes ao "path" das importações de arquivos, usar a biblioteca **path**.

```javascript
// File: webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'eval-source-map' : 'source-map',
	entry: path.resolve(__dirname, 'src', 'index.jsx'), // Qual arquivo principal da aplicação
	output: { // Qual arquivo será gerado pelo webpack
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
    hot: true,
	},
	plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		})
	].filter(Boolean), // Hack para filtrar/remover o que são valores booleanos 
	module: { // Regras de tratamento dependendo do tipo do arquivo
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		],
	}
}
```

Instalar o **html-webpack-plugin**:

> yarn add html-webpack-plugin -D

- Configurar no *webpack.config.js*:

```javascript
// File: webpack.config.js

plugins: [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html')
  })
],
```

Instalar o webpack-dev-server para sempre que atualizar um arquivo, ele gere automaticamente o bundle.

> yarn add webpack-dev-server -D

- Configurar no *webpack.config.js*:

```javascript
// File: webpack.config.js

devServer: {
  contentBase: path.resolve(__dirname, 'public')
},
```

Para iniciar o servidor:

> yarn webpack serve

- O projeto rodará na URL `http://localhost:8080`.

#### Utilizando Source Maps

Source Maps são basicamente uma forma de conseguir visualizar o código original da aplicação, mesmo quando todo esse código está transpilado por uma ferramenta.

- Configurar no *webpack.config.js*:

```javascript
// File: webpack.config.js

devtool: 'eval-source-map', // Parba o ambiente de desenvolvimentos
```

#### Configurando o Ambiente dev e produção

Configurar no *webpack.config.js*:

```javascript
// File: webpack.config.js

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'souce-map',
```

Instalar o cross-env, para diferentes ambientes:

> yarn add cross-env -D

Criar os scripts no arquivo *package.json*:

```json
"scripts": {
  "dev": "webpack serve",
  "build": "cross-env NODE_ENV=production webpack"
},
```

#### Importação de arquivos CSS

Instalar os loaders **style-loader** e **css-loader**, para enteder arquivos CSS:

> yarn add style-loader css-loader -D

Configurar no *webpack.config.js*:

```javascript
// File: webpack.config.js

module: {
  rules: [
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader']
    }
  ],
}
```

#### Utilizando SASS

Instalar o loader **sass-loader** e o **node-sass** para configurar no webpack e converter Scss em CSS:

> yarn add sass-loader node-sass -D

Configurar no *webpack.config.js*:

```javascript
// File: webpack.config.js

module: {
  rules: [
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ],
}
```

### Conceitos Importantes

#### Primeiro componente React

Basicamente, componentes do React são como as tags do HTML. São formas de encapsular uma quantidade de código, dentro de um único elemeto. Esse elemento terá sua própria funcionalidade, estilização e estrutura. Componentes são formas de organizar uma aplicação em vários pedaços que quando conectados, formam algo maior como uma página ou o App em sí.

O que é um componente no React?

- É uma função com o nome começando sempre com a primeira letra maiúscula. Essa função devolve um HTML;
- Como boa prática, quand o arquivo (.ts, tsx) é um componente sempre começar com a primeira letra maiúscula e deve existir apenas 1 componete por arquivo;

Exemplo de arquivo componente:

```javascript
// File: \src/App.jsx

import './styles/globals.scss';

export function App() {
    return <h1>Hello World</h1>
}
```

#### Propriedades no React

Sempre que uma função do React começar com "use", chamamos ela de **hook** ou **gancho**.

##### Componente

{ ... }

##### Propriedade

A propriedades funcionam assim como atributos funcionam em tags HTML. São informações, variáveis que é possivel passar para um componente funcionar de forma diferente.
Utilizando **props** é possível acessar essa propriedade em outro componente.

##### Estado

O React por padrão não fica monitorando as variáveis para saber se tiveram seus valores alterados, para então renderizar no componente em tela. Isso inclusive não seria performático. Para isso foi criado o conceito de **Estado**, que são variáveis que ele irá monitorar quando houver mudança e aí sim, mudar e renderizar a mudança em tela.

Exemplo de utilização do Estado do React:

```javascript
import { useState } from 'react';

export function Counter() {
  // let = let it change

  // Convenção na nomeação: valorMudar, setValorMudar
  const [counter, setCounter] = useState(0); // O use state retorna dois valores em formato de Array, por isso usar Atribuição via Desestruturação

  function increment() {
    setCounter(counter + 1); // Por causa da imutabilidade não é: counter++ ou counter += 1;
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}
```

Exemplo de *Fragment* (<></>):

```javascript
export function App() {
  return (
    <> 
      <RepositoryList />
      <Counter />
    </>
  )
}

```

#### A imutabilidade no React

Imutabilidade é um fundamento da computação, não só do React. Usado em diferças linguagens de programação e muito utilizado dentro da programação funcional.

Basicamente, o conceito de Imutabilidade prevê que uma variável nunca poderá ter seu valor alterado e sim receber um novo valor, ou seja, quandos dizemos que uma variável é imutável, quer dizer que não podemos alterar diretamente o conteúdo daquela variável, mas sim precisamos "assinar", dar um novo valor.

Exemplo de Mutação: no exemplo, estamos adicionando um novo usuário no final do array, ou seja, estamos mudando o valor original do Array.

```javascript
users = ['Goku', 'Gohan', 'Piccolo'];
users.push('Vegeta');

users = ['Goku', 'Gohan', 'Piccolo', 'Vegeta'];
```

Exemplo de Imutabilidade: no exemplo, está sendo criado um **novo** array, um novo espaço na memória está sendo criado contendo a nova informação, ao invés de alterar uma informação que já esta salva na memória.

```javascript

users = ['Goku', 'Gohan', 'Piccolo'];
newUsers = [...users, 'Vegeta'];

newUsers = ['Goku', 'Gohan', 'Piccolo', 'Vegeta'];
```

#### Fast Refresh no Webpack

É um forma de conseguir alterar, salvar e ter o código refletido na aplicação, mantendo o estado dos componentes.

Instalar o [React Refresh Webpack Plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin):

> yarn add @pmmmwh/react-refresh-webpack-plugin react-refresh -D

Configurando

```javascript
// File: webpack.config.js

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

plugins: [
  isDevelopment && new ReactRefreshWebpackPlugin(),
].filter(Boolean), // Hack para filtrar/remover o que são valores booleanos
module: {
  rules: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: { // Modificado
        loader: 'babel-loader',
        options: {
          plugins: [
            isDevelopment && require.resolve('react-refresh/babel')
          ].filter(Boolean)
        }
      }
    },
  ],
}
```

### Chamadas HTTP

useState: basicamente armazena estados de uma variável.

useEffect: serve basicamente para disparar uma função quando algo acontecer na aplicação, que pode ser quando o valor de uma variável mudou. Recebe dois parâmetro, **a função para executar** e quando executar (variável) que é o Array de dependências.

- Se o Array de Dependências estiver vazio, a função do useEffect só executará uma única vez, quando o componente for exibido na tela.

  ```javascript
  const [repositories, setRepositories] = useState([]);

  useEffect(()=> {
    fetch('https://api.github.com/users/user/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, []) // Parâmetro de dependências
  ```

- Cuidado para não deixar sem o segundo parâmetro (Array de Dependências), se não entrará em loop.

  ```javascript
  const [repositories, setRepositories] = useState([]);

  useEffect(()=> {
    fetch('https://api.github.com/users/user/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));
  }) // Sem parâmetro de dependências =0
  ```

- Cuidado para não colocar a mesma variável de dependencia que será alterada na função do useEffect, pois estrará em loop.

  ```javascript
  const [repositories, setRepositories] = useState([]);

  useEffect(()=> {
    fetch('https://api.github.com/users/user/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, repositories) // Mesma variável que será alterado como parâmetro de dependências =0
  ```

### Usando TypeScript

TypeScript é um *superset*, ou seja, um conjunto de funcionalidades adicionadas em cima da linguagem JavaScript. Porém, não há problemas em chamar o TypeScript de uma linguagem de programação.

TypeScript é um *Static Type Checking*, ou seja, é feito uma checagem de tipos na aplicação enquanto está sendo desenvolvida.

Os browsers não entendem TypeScript, por isso, toda a checagem é feita durante o desenvolvimento e depois é realizado uma transpilação do código para JavaScript.

O TypeScript possui inferência de tipos, ou seja, ele consegue determinar o tipo das variáveis na maioria dos casos. Por isso não é preciso tipar tudo pela frente.

#### Fundamentos do TypeScript

```typescript
type User = {
  name: string,
  email: string,
  address: {
    city: string,
    state?: string // ? Não é obrigatório
  }
}

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}.`;
}

const user = {
  name: 'John Doe', // Curiosidade: John Doe é fulano, Siclano nos EUA.
  email: 'john@doe.com',
  address: {
    city: 'New York',
    state: 'NY'
  }
}

showWelcomeMessage('Queijo'); // Error
showWelcomeMessage(user);
```

#### TypeScript no ReactJS

Instar o TypeScript como dependência de desenvolvimento:

> yarn add typescript -D

É preciso inicializar o TypeScript na aplicação:

> yarn tsc --init

- Será criado um arquivo chamado de `tsconfig.json` na raiz do projeto, contendo as configurações.

##### Configurando o tsconfig.json

Descomentar algumas propriedades e configurá-las:

```json
{
  "compilerOptions": {
    "lib": ["DOM", "DOM.Iterable", "ESNext"], // Adiciona funcionalidades. Agora sabemos que iremos lidar com o DOM e teremos tipagem, que antes não teriamos.
    "allowJs": true, // Habilita termos arquivos JS e TS na aplicação. Muito bom para transição de JS para TS.
    "jsx": "react-jsx", // Diz que estamos utilizando JSX do ReactJS.
    "noEmit": true, // Não emitir o código no build da aplicação.
    "strict": true, // Entrar no modo 'strict' de erros do JS.
    "moduleResolution": "node",
    "resolveJsonModule": true,  // Criada. Adiciona a possibilidade de importar arquivos JSON.  
    "isolatedModules": true,  // Criada.
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,                        
    "skipLibCheck": true,     
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"] // Onde o código de desenvolvimento vai estar.
}
```

##### Configurando o Webpack

Por default, o webpack não entende TypeScript. Para isso, é preciso instalar um interpretador.

Instalar o @babel/preset-typescript -D

> yarn add @babel/preset-typescript -D

No arquivo `babel.config.js` é preciso adicionar o novo preset.

```javascript
// File: babel.config.js

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
}
```

É preciso alterar a extensão dos componentes que o webpack vai ler.

```javascript
// File: webpack.config.js

entry: path.resolve(__dirname, 'src', 'index.tsx'),
resolve: {
  extensions: ['.js', '.jsx', '.ts', '.tsx']
},
module: {
  rules: [
    {
      test: /\.(j|t)sx$/, // TSX ou JSX
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            isDevelopment && require.resolve('react-refresh/babel')
          ].filter(Boolean)
        }
      }
    },
  ]
}
```

Algumas bibliotecas de terceiros não incluem as definições de tipos TypeScript, as tipagens, para o TypeScript entender como aquela biblioteca funciona. Na grande maioria, as definições de tipos de uma determinada biblioteca é criada pela comunidade ou é mantida em um repositório a parte.

Exemplo, o `react-dom`. Para instalar os *tipos* do react-dom, é preciso instalar um pacote a mais:

> yarn add @types/react-dom -D

Instalar os tipos do ReactJS (Atualmente já vem junto):

> yarn add @types/react -D

#### Componente com TypeScript

Um erro muito comum de iniciante, é tipar todas a propriedades vindas de uma API. Isso não é necessário, só é necessário tipar as informações/propriedades utilizadas na aplicação ou componente.

### Finalizando Aplicação

Extensão para o browser: [React Developer Tools](https://github.com/facebook/react)

## Chapter II

Figma - [Design do Projeto](https://www.figma.com/file/0xmu9mj2TJYoIOubBFWsk5/dtmoney-Ignite-(Copy)?node-id=0%3A1)

### Estrutura da aplicação

#### Estrutura com create-react-app

[Create React App](https://create-react-app.dev) é uma estrutura pré-configurada de um projeto ReactJS.

Comando para criar um novo projeto ReactJS com TypeScript:

> yarn create react-app project-name --template typescript

#### Instalando Styled Components

Extensão do VSCode: [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

Instalação da biblioteca [Styled Components](https://styled-components.com):

> yarn add styled-components

Instalação dos **types** da biblioteca:

> yarn add @types/styled-components -D

#### Criando Estilos Globais

Dentro de `/src`, criar a pasta `styles` e o arquivo `global.ts` (não precisa ser .tsx, pois não tem um componente React, somente estilo).

```typescript
// File: /src/styles/global.ts

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF;

    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  // Por padrão, a aplicação tem o tamanho de fonte de 16px (ideal para desktop)
  // REM: 1rem === ao tamanho do font-size da página
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16 * 0.9375 = 15
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 16 * 0.875 = 14
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; // Fontes mais detalhadas (nítidas) em browsers que utilizam motor do chrome
  }

  // Por padrão, os input, textarea e button, não importam as fontes do body
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
```

#### Fontes do Google Fonts

O link das fontes são introduzidos no `index.html` no diretório `public`.

### Consumindo API

#### Criando front-end sem back-end

Iremos utilizar ferramentas para que tenhamos um meio termo entre dados de um API e dados estáticos. Essas ferramentas, **nunca devem ser utilizadas em produção**.

- [MirageJS](https://miragejs.com): É possivel criar uma Fake API dentro do projeto front-end. Possui banco de dados integrado, é possível realizar relacionamentos, não é preciso rodar em um servidor separado e etc.

- [JSON Server](https://github.com/typicode/json-server): Ao criar um arquivo JSON com a estrutura de um objeto, cada chave do objeto será convertida em uma rota para a plicação. Ele executa de forma ou parte da aplicação, ou seja, não executa junto é preciso rodar um servidor somente para ele.

- [MSW](https://github.com/mswjs/msw): Cria *mocks* fictícios para a camada de network da aplicação. Semelhante ao MirageJS, porém possui menos funcionalidades.

#### Configurando MirageJS

Instalar o MiraJS:

> yarn add miragejs -D

#### Configurando cliente do Axios

Por quê não utilizar o **fetch** e utilizar outra biblioteca?

- No fetch é preciso colocar todo o endereço da nossa aplicação em cada requisição.

- É preciso transforma a resposta em json, cada vez que é realizada uma requisição.

Instalar o Axios:

> yarn add axios

### Modal & Forms

#### Configurando modal de criação

Instalar a biblioteca [react-modal](https://github.com/reactjs/react-modal):

> yarn add react-modal

Instalar os tipos da biblioteca:

> yarn add @types/react-modal -D

Dica de Pattern: Sempre que houver uma função que será usada para ações de usuários, como por exemplo eventos de click, inciar o nome com a palavra "handle".

#### Criando botões de Tupo

Instalar o [Polished](https://github.com/styled-components/polished). Um helper para customização de layout com fuções JavaScript.

> yarn add polished

Exemplo:

```typescript
import { darken } from 'polished'

// Hover de um button
&:hover {
  /* border-color: #aaa; */
  border-color: ${darken(0.1, `#d7d7d7`)};
}
```

#### Funcionamento do Botões

Utilizando [**Interface** com Styled Components](https://styled-components.com/docs/api#using-custom-props), é possível criar novas propriedades para um elemento.

Com Styled Components, quando for passada uma função dentro de uma interpolação para alterar algum elemento de CSS, automaticamente ele já traz todas as props do componente com sigo.

Exemplo:

```typescript
interface RadioBoxProps {
  isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
  background: ${ (props) => props.isActive ? '#ccc' : 'transparent' };
`
```

### Contextos e Hooks

Dica: Sempre evitar **Prop Drilling**. Consiste passar valores por *props* vários subníveis/componentes a baixo.

Para que serve o **Contexto**?

Compartilhamento de estado entre vários componentes da aplicação.

Sempre que for criar um *Hook* customizado, usar prefixo **use**. Por exmplo: `useTransactions()`. Os Hooks customizados, podem utilizar os hooks do próprio ReactJS.
