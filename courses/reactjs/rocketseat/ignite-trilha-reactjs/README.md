# Ignite: Trilha ReactJS <!-- omit in toc -->

[Rocketseat](https://rocketseat.com.br 'Rocketseat')

## Sumário <!-- omit in toc -->

## Chapter I

### Criando estrutura de pasta do projeto

Iniciar um projeto Node:

> yarn init

Ou

> yarn init -y

Instalar o React:

> yarn add react

Instalar o React DOM:

> yarn add react-dom

### Configurando Babel

Instalação no projeto:

> yarn add @babel/core @babel/cli @babel/preset-env -D

Criar o arquivo **babel.config.js**:

```javascript
// File: babel.config.js

module.exports = {
    presets: [
        '@babel/preset-env'
    ]
}
```

Para que o Babel entenda o código do React, é preciso instalar outro *preset*.

> yarn add @babel/preset-react -D

### Configurando o Webpack

> yarn add webpack webpack-cli webpack-dev-server -D

Instalar o **babel-loader**:

> yarn add babel-loader -D

Criar o arquivo **webpack.config.js** na raiz do projeto. Como conveção e evitar problemas e Sistemas Operacionais diferentes com o "path" das importações de arquivos, usar a biblioteca **path**.

```javascript
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // Qual arquivo principal da aplicação
    output: { // Qual arquivo será gerado pelo webpack
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: { // Regras de tratamento dependendo do tipo do arquivo
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ],
    }
}
```

Instalar o **html-webpack-plugin**:

> yarn add html-webpack-plugin -D

## Chapter II
## Chapter III
## Chapter IV
## Chapter V
