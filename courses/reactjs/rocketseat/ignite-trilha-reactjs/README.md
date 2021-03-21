# Ignite: Trilha ReactJS <!-- omit in toc -->

[Rocketseat](https://rocketseat.com.br 'Rocketseat')

## Sumário <!-- omit in toc -->

## Chapter I

Curiosidade do JavaScript: **let** vem de *let it change* ou seja, *deixa ela mudar*.

### Criando estrutura de pasta do projeto

Iniciar um projeto Node:

> yarn init

- Ou

  > yarn init -y

Instalar o React:

> yarn add react

Instalar o React DOM:

> yarn add react-dom

### Configurando o Babel

Instalação no projeto:

> yarn add @babel/core @babel/cli @babel/preset-env -D

Para que o Babel entenda o código do React, é preciso instalar outro *preset*.

> yarn add @babel/preset-react -D

Criar o arquivo **babel.config.js**:

```javascript
// File: babel.config.js

module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {
        runtime: 'automatic'
      }]
    ]
}
```

### Configurando o Webpack

Instalar as seguintes bibliotecas:

> yarn add webpack webpack-cli webpack-dev-server -D

Instalar o **babel-loader**:

> yarn add babel-loader -D

Criar o arquivo **webpack.config.js** na raiz do projeto. Como conveção e evitar problemas de diferenças entre Sistemas Operacionais referentes ao "path" das importações de arquivos, usar a biblioteca **path**.

```javascript
// File: webpack.config.js (FINAL)

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

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
    contentBase: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: { // Regras de tratamento dependendo do tipo do arquivo
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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

### Utilizando Source Maps

Source Maps são basicamente uma forma de conseguir visualizar o código original da aplicação mesmo quando todo esse código está transpilado por uma ferramenta.

- Configurar no *webpack.config.js*:

```javascript
// File: webpack.config.js

devtool: 'eval-source-map', // Parba o ambiente de desenvolvimentos
```

### Configurando o Ambiente dev e produção

Configurar no *webpack.config.js*:

```javascript
// File: webpack.config.js

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'souce-map',
```

Instalar o cross-env:

> yarn add cross-env -D

Criar os scripts no arquivo *package.json*:

```json
"scripts": {
  "dev": "webpack serve",
  "build": "cross-env NODE_ENV=production webpack"
},
```

### Importação de arquivos CSS

Instalar o **style-loader** e **css-loader**:

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

### Utilizando SASS

Instalando loader do webpack **sass-loader** e o **node-sass**, para converter Scss em CSS:

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

## Chapter II

### Primeiro componente React

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

### Propriedades no React

Sempre que uma função do React começar com "use", chamamos ela de **hook** ou **gancho**.

#### Componente

{ ... }

#### Propriedade

A propriedades funcionam assim como atributos funcionam em tags HTML. São informações, variáves que é possivel passar para um componente funcionar de forma diferente.
Utilizando **props** é possível acessar essa propriedade em outro componente.

#### Estado

O React por padrão não fica monitorando as variáveis para saber se tiveram seus valores alterados, para então renderizar no componente em tela. Isso inclusive não seria performático. Para isso foi criado o conceito de **Estado**, que são variáveis que ele irá monitorar quando houve mudança e aí sim, mudar renderizar a mudança.

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

### A imutabilidade no React

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

### Fast Refresh no Webpack

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

## Chapter III

useEffect: serve basicamente para disparar uma função quando algo acontecer na aplicação, que pode ser quando o valor de uma variável mudou. Recebe dois parâmetro, **a função para executar** e quando executar (variável) que é o Array de dependências.

Se o Array de Dependências estiver vazio, a função do useEffect só executará uma única vez, quando o componente for exibido na tela.

Cuidar para não deixar sem o segundo parâmetro (Array de Dependências), se não entrará em loop.

Cuidar para não colocar a mesma varivel de dependencia que será alterada na função do useEffect.



```javascript

```

## Chapter IV
## Chapter V
