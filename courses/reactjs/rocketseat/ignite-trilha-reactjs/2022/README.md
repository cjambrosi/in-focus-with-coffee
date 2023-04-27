# Ignite: Trilha ReactJS 2022 <!-- omit in toc -->

[Rocketseat](https://rocketseat.com.br 'Rocketseat')

[Ambiente de desenvolvimento - Trilha ReactJS](https://www.notion.so/Ambiente-de-desenvolvimento-Trilha-ReactJS-e7a377d183134647a177b6a34785f8c3)

## Sumário <!-- omit in toc -->

- [Projeto I](#projeto-i)
  - [Iniciando com React](#iniciando-com-react)
    - [Introdução](#introdução)
    - [Fundamentos do ReactJS](#fundamentos-do-reactjs)
    - [Bundlers \& Compilers](#bundlers--compilers)
    - [Criando um projeto React](#criando-um-projeto-react)
    - [Componentes](#componentes)
    - [Propriedades](#propriedades)
  - [Estrutura da aplicação](#estrutura-da-aplicação)
    - [CSS Modules](#css-modules)
    - [CSS global](#css-global)
    - [Componente: Header](#componente-header)
    - [Componente: Sidebar](#componente-sidebar)
    - [Finalizando Sidebar](#finalizando-sidebar)
    - [Componente: Post](#componente-post)
    - [Estilizações do Post](#estilizações-do-post)
    - [Formulário de comentários](#formulário-de-comentários)
    - [Componente: Comment](#componente-comment)
    - [Estilizações do Comentário](#estilizações-do-comentário)
    - [Componente: Avatar](#componente-avatar)
    - [Aplicando responsividade](#aplicando-responsividade)
  - [Os motores do React](#os-motores-do-react)
    - [Iterando no JSX](#iterando-no-jsx)
    - [Propriedades do Post](#propriedades-do-post)
    - [Estado (useState)](#estado-usestate)
    - [Inserindo comentários (Programação declarativa)](#inserindo-comentários-programação-declarativa)
    - [Entendendo a key](#entendendo-a-key)
    - [Comunicação entre componentes](#comunicação-entre-componentes)
    - [Removendo comentários (imutabilidade)](#removendo-comentários-imutabilidade)
    - [Validando formulário](#validando-formulário)
    - [Realizando likes nos comentários](#realizando-likes-nos-comentários)
    - [Entendendo closures no React](#entendendo-closures-no-react)
- [Projeto II](#projeto-ii)
- [Projeto III](#projeto-iii)
- [Projeto IV](#projeto-iv)
- [Projeto V](#projeto-v)

## Projeto I

Curiosidade do JavaScript: **let** vem de *let it change* ou seja, *deixa ela mudar*.

Figma: <https://www.figma.com/file/7OxotwczHdp0sY6XVEaXxe/Ignite-Feed-(Community)?t=Ba5VGG61mRNzg43L-0>

Repositório do Projeto: [01-fundamentos-reactjs]()

### Iniciando com React

{ ... }

#### Introdução

{ ... }

#### Fundamentos do ReactJS

Renderer Patterns: <https://www.patterns.dev/posts/rendering-patterns>

#### Bundlers & Compilers

Bundlers: gerenciadores de arquivos JavaScript que converte vários arquivos em um único arquivo. Exemplo: [WebpackJS](https://webpack.js.org), [Vite](https://vitejs.dev) e [Snowpack](https://www.snowpack.dev).

Compilers: compiladores de código, ferramentas que convertem o código de um formato para outro. Exemplo: [Babel](https://babeljs.io).

#### Criando um projeto React

Alterantiva ao NVM: [n](https://github.com/tj/n)

Comando para criar o projeto com o Vite:

> npm create vite@latest

#### Componentes

Default Exports vs Named Exports

- Default Exports: É possível nomear o componente/função na importação. Porém, há desvantagem de não possuir um bom *auto sense* do editor de texto e de ao copiar a estrutura de outro componente e esquecer de renomear, não ocorrerá erro, ficando com o nome errado.

- Named Exports: Só vantagens ;)

#### Propriedades

{ ... }

### Estrutura da aplicação

#### CSS Modules

{ ... }

#### CSS global

Exemplo de arquivo:

```css
:root {
  --white: #ffffff;
  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-600: #323238;
  --gray-700: #29292e;
  --gray-800: #202024;
  --gray-900: #121214;

  --green-300: #00b37e;
  --green-500: #00875f;

  --red-500: #f75a68;
}

:focus {
  outline: transparent;
  box-shadow: 0 0 2px var(--green-500);
}

* {
  margin: 0;
  padding: 0;

  /* Ler sobre: Box Model */
  box-sizing: border-box;
}

body {
  background: var(--gray-900);
  color: var(--gray-300);

  /* Para navegadores baseados em webkit (chrome, edge, brave) ficarem com as fontes como padrão mais finas (detalhadas). */
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  /* Utilizar medidas de fontes relativas. Melhora a acessibilidade. */
  font-size: 1rem;
}
```

#### Componente: Header

{ ... }

#### Componente: Sidebar

{ ... }

#### Finalizando Sidebar

Biblioteca de ícones: <https://phosphoricons.com>

#### Componente: Post

{ ... }

#### Estilizações do Post

{ ... }

#### Formulário de comentários

{ ... }

#### Componente: Comment

{ ... }

#### Estilizações do Comentário

{ ... }

#### Componente: Avatar

{ ... }

#### Aplicando responsividade

{ ... }

### Os motores do React

#### Iterando no JSX

{ ... }

#### Propriedades do Post

Utilizar a biblioteca [date-fns](https://date-fns.org) para trabalhar com data.

Exemplo:

```javascript
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
  locale: ptBR,
})

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true
})
```

#### Estado (useState)

#### Inserindo comentários (Programação declarativa)

#### Entendendo a key

#### Comunicação entre componentes

#### Removendo comentários (imutabilidade)

#### Validando formulário

#### Realizando likes nos comentários

#### Entendendo closures no React

## Projeto II

## Projeto III

## Projeto IV

## Projeto V
