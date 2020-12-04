# React Avançado: Crie aplicações com NextJS, GraphQL e mais <!-- omit in toc -->

[Udemy Link](https://www.udemy.com/course/react-avancado/ 'React Avançado: Crie aplicações com NextJS, GraphQL e mais')

FAQ: <https://github.com/react-Avancado/faq>

## Sumário <!-- omit in toc -->

- [Módulo 1: Parte 1 - Introdução Teórica](#módulo-1-parte-1---introdução-teórica)
  - [Aula 3 - Introdução ao NextJS](#aula-3---introdução-ao-nextjs)
  - [Aula 4 - Introdução ao GraphQL](#aula-4---introdução-ao-graphql)
    - [Rest API x GraphQL](#rest-api-x-graphql)
  - [Aula 5 - Introdução ao GraphQL Clients](#aula-5---introdução-ao-graphql-clients)
  - [Aula 6 - Introdução ao Strapi - Headless CMS](#aula-6---introdução-ao-strapi---headless-cms)
    - [Headless CMS](#headless-cms)
    - [Strapi](#strapi)
    - [Como o Strapi funciona](#como-o-strapi-funciona)
  - [Aula 7 - Introdução ao CSS-in-JS](#aula-7---introdução-ao-css-in-js)
    - [CSS-in-JS](#css-in-js)
    - [Bibliotecas de CSS-in-JS](#bibliotecas-de-css-in-js)
    - [Styled Components](#styled-components)
  - [Aula 8 - Introdução a Testes de Software](#aula-8---introdução-a-testes-de-software)
    - [Metodoliga de Teste](#metodoliga-de-teste)
    - [Ferramentas](#ferramentas)
- [Módulo 1: Parte 2 - Criando nosso Boilerplate do NextJS](#módulo-1-parte-2---criando-nosso-boilerplate-do-nextjs)
  - [Aula 9 - Requisitos para o projeto](#aula-9---requisitos-para-o-projeto)
    - [Link úteis](#link-úteis)
  - [Aula 10 - Criando o boilerplate com create-next-app](#aula-10---criando-o-boilerplate-com-create-next-app)
    - [Link úteis](#link-úteis-1)
  - [Aula 11 - Configurando o TypeScript no NextJS](#aula-11---configurando-o-typescript-no-nextjs)
    - [Link úteis](#link-úteis-2)
  - [Aula 12 - Configurando o .editorconfig](#aula-12---configurando-o-editorconfig)
    - [Link úteis](#link-úteis-3)
  - [Aula 13 - Configurando o ESLint](#aula-13---configurando-o-eslint)
    - [Link úteis](#link-úteis-4)
  - [Aula 14 - Configurando o Prettier com o ESLint](#aula-14---configurando-o-prettier-com-o-eslint)
    - [Link úteis](#link-úteis-5)
  - [Aula 15 - Configurando um git hook com Husky e Lint-Staged](#aula-15---configurando-um-git-hook-com-husky-e-lint-staged)
    - [Link úteis](#link-úteis-6)
  - [Aula 16 - Instalando e Configurando o Jest com TypeScript](#aula-16---instalando-e-configurando-o-jest-com-typescript)
    - [Link úteis](#link-úteis-7)
  - [Aula 17 - Instalando o React Testing Library (RTL) e escrevendo primeiros testes](#aula-17---instalando-o-react-testing-library-rtl-e-escrevendo-primeiros-testes)
    - [Link úteis](#link-úteis-8)
  - [Aula 18 - Usando o findRelatedTests para rodar somente testes necessários](#aula-18---usando-o-findrelatedtests-para-rodar-somente-testes-necessários)
    - [Link úteis](#link-úteis-9)
  - [Aula 19 - Instalando o Styled Components e configurando o SSR](#aula-19---instalando-o-styled-components-e-configurando-o-ssr)
    - [Link úteis](#link-úteis-10)
  - [Aula 20 - Criando estilos globais com createGlobalsStyle](#aula-20---criando-estilos-globais-com-createglobalsstyle)
    - [Link úteis](#link-úteis-11)
  - [Aula 21 - Criando estilos no primeiro componente](#aula-21---criando-estilos-no-primeiro-componente)
    - [Link úteis](#link-úteis-12)
  - [Aula 22 - Melhorando snapshots com Jest-styled-components](#aula-22---melhorando-snapshots-com-jest-styled-components)
    - [Link úteis](#link-úteis-13)
  - [Aula 23 - Configurando o Storybook e escrevendo stories](#aula-23---configurando-o-storybook-e-escrevendo-stories)
    - [Link úteis](#link-úteis-14)
  - [Aula 24 - Migrando Storybook para versão 6.x](#aula-24---migrando-storybook-para-versão-6x)
    - [Link úteis](#link-úteis-15)
  - [Aula 25 - Usando Storybook Essentials e Controls](#aula-25---usando-storybook-essentials-e-controls)
    - [Link úteis](#link-úteis-16)
  - [Aula 26 - Configurando PWA](#aula-26---configurando-pwa)
    - [Link úteis](#link-úteis-17)
  - [Aula 27 - Iniciando um projeto através do nosso boilerplate](#aula-27---iniciando-um-projeto-através-do-nosso-boilerplate)
    - [Link úteis](#link-úteis-18)
  - [Aula 28 - Extra: PR - corrigindo cobertura de testes](#aula-28---extra-pr---corrigindo-cobertura-de-testes)
    - [Link úteis](#link-úteis-19)
  - [Aula 29 - Extra: Servindo estáticos corretamente no build do Storybook](#aula-29---extra-servindo-estáticos-corretamente-no-build-do-storybook)
    - [Link úteis](#link-úteis-20)
  - [Aula 30 - Extra: Mantendo o boilerplate com atualizado usando Dependabot e Github Actions](#aula-30---extra-mantendo-o-boilerplate-com-atualizado-usando-dependabot-e-github-actions)
  - [Aula 31 - Extra: Automatizando criação de arquivos](#aula-31---extra-automatizando-criação-de-arquivos)
    - [Link úteis](#link-úteis-21)
  - [Aula 32 - FIX: Corrigindo configuração do jest-styled-components](#aula-32---fix-corrigindo-configuração-do-jest-styled-components)
  - [Aula 33 - FIX: Definindo typings para jest-styled-components](#aula-33---fix-definindo-typings-para-jest-styled-components)

## Módulo 1: Parte 1 - Introdução Teórica

### Aula 3 - Introdução ao NextJS

Slides: <https://docs.google.com/presentation/d/1Q9dQ3etOKdgPt8kvmuC9oliDqAlARZOia3mhQGDGB3k/edit#slide=id.g8565c632f8_0_0>

O NextJS é um **Framework Web** desenvolvido em **ReactJS** lançado em 2016 por Guilhermeo Rauch. Suporta SSG, SSR e até SPA.

Um **Framework Web**, é um sistema opinativo com **estrutura** e **ferramentas** já definidas.

O que o **NextJS** tem/faz?

- Renderização no servidor (Server Side Rendering - SSR)
- Geração de estáticos (Static Site Generation - SSG)
- CSS-in-JS (Styled-jsx, Styled Components, Emotion, etc)
- Zero Configuration (rotas, hot reloading, code splitting...)
- Completamente extensível (controle completo do Babel/Webpack, plugins, etc)
- Otimizado para produção

Tipos de uma aplicação

- Static Site Generation (HTML/CSS/JS) - GatsbyJS, Hexo
  - Vantagens:
    - Uso quase nulo do servidor;
    - Pode ser servido numa CDN (melhor cache);
    - Melhor performance entre todos;
    - Flexibilidade para usar qualquer servidor;
  - Desvantagens:
    - Tempo de build pode ser muito alto;
    - Dificuldade para escalar em aplicações grandes;
    - Dificuldade para realizar atualizações constantes;
- Client Side Rendering (Single Page Application - SPA) - Create React App
  - Vantagens:
    - Permite páginas ricas em interações sem recarregar;
    - Site rápido após o load inicial;
    - Ótimo para aplicações web;
  - Desvantagens:
    - Load inicial pode ser muito grande;
    - Performance imprevisível;
    - Dificuldade no SEO;
- Server Side Rendering (SSR) - NextJS
  - Vantagens:
    - Ótimo em SEO (tudo renderizado no servidor);
    - Meta tags com previews mais adequados;
    - Melhor performance para o usuário (o conteúdo vai ser visto mais rápido);
    - Código compartilhado com o backend em Node;
    - Menor processamento no lado do usuário;
  - Desvantagens:
    - TTFB (Time to first byte) maior, o servidor vai preparar todo o conteúdo para entregar;
    - HTML maior;
    - Reload completo nas mudanças de rota*

**Quando usar** cada um então?

- Static Site Generation (GatsbyJS, NextJS):
  - Quando é um site simples, sem muita interação do usuário.
  - Se você é a única pessoa que publica conteúdo.
  - Se o conteúdo muda pouco
  - Sem muitas páginas
  - Quando a performance é extramente importante
  - Exemplos: Blogs, Landing Pages, Porfólios
- Single Page Application (CRA)
  - Quando não temos tanta necessidade de indexar informações no Google
  - Quando o usuário faz muitas interações na página e não quer refreshes
  - Quando as informações vão ser diferentes para cada usuário (autenticação, por exemplo)
  - Exemplos: Twitter Web, Facebook Web, Spotify Web
- Server Side Rendering (NextJS)
  - Quando tem necessidade de um SPA, mas precisa de um loading mais rápido
  - Quando o conteúdo muda frequentemente
  - Quando trabalha com um número muito grande de páginas
  - Quando precisa de uma boa indexação no Google
  - Exemplos: Ecommerce, Sites de Notícias

Links para estudo:

- <https://nextjs.org/learn/basics/create-nextjs-app> (Tutorial oficial passo-a-passo)
- <https://dev.to/kefranabg/demystifying-ssr-csr-universal-and-static-rendering-with-animations-m7d> (Animações vistas nos slides)
- <https://marinaaisa.com/blog/cook-websites-based-on-your-needs/> (Explicações sobre quando usar um ou outro)
- <https://github.com/vercel/next.js/tree/canary/examples> (Vários exemplos oficiais do NextJS com outras tecnologias)

### Aula 4 - Introdução ao GraphQL

Slides: <https://docs.google.com/presentation/d/1XhGUPXgbUGBqyexLm3HuV9Rg-8YdPM_vQ7d4wf4vRAw/edit#slide=id.g8565c632f8_0_0>

**GraphQL** é uma **linguagem de consulta** de dados desenvolvida e usada pelo Facebook desde 2012.

#### Rest API x GraphQL

Rest API

- Problemas:
  - Dificulades para evoluir a API (criação de N versões)
  - Entrega de dados nem sempre necessários
  - Aumento no tamanho da requisição
  - Rotas altamente acopladas

GraphQL

- Vantagens:
  - Permite evolução constante
  - Entrega somente dados requisistados (tamanho menor e mais rápido)
  - Rota única, dados altamente desacoplados

### Aula 5 - Introdução ao GraphQL Clients

Slides: <https://docs.google.com/presentation/d/1QctAckhGlvs0NMgf_GsRdqui_cm0UqJOew55WFChjNg/edit#slide=id.g8565c632f8_0_0>

Os **GraphQL Clients** são responsáveis por criar camadas de abstração para realizar queries/mutations, sistemas de cache, validações e otimizações.

Cliens mais conhecidos/utilizados:

- FetchQL
  - Vantagens:
    - Bastante leve
    - API simplificada
    - Escrito com ES2015 e modules
    - Isomórfico (Node/Browser)
  - Desvantagens:
    - Não possui sistema de cache
    - Não possui tratamento de dados e validações
    - Não tem contexto de estados
- GraphQL Request
  - Vantagens:
    - Super simples e leve
    - Baseado em Promises (async/await)
    - Suporte a TypeScript
    - Isomórfico (Node/Browser)
  - Desvantagens:
    - Não possui sistema de cache
    - Não possui tratamento de dados e validações
    - Não possui contexto de estado
- uRQL
  - Vantagens:
    - Bastante leve e focado em performance
    - Altamente extensível
    - Junto com Exchanges possui caching
    - Possui suporte offline
  - Desvantagens:
    - Biblioteca bastante nova (poucos materiais sobre)
    - Pouca adoção ainda (até o momento)
- Relay Modern
  - Vantagens:
    - Focado em performance
    - Pré-compila as queries do GraphQL em build time (evita que o usuário baise o parser)
    - Possui sistema de caching/states
  - Desvantagens:
    - Necessita de configurações a mais no tooling
    - Curva de aprendizado maior devido a mais detalhes para o funcionamento
- Apollo Client
  - Vantagens:
    - Largamente utilizado no mercado
    - Possui sistema de caching/states
    - API simplificada e com suporte a Hooks
    - Muito material online
  - Desvantagens:
    - Extramente grande!
    - Atualizações constante com Breaking Changes

### Aula 6 - Introdução ao Strapi - Headless CMS

Slides: <https://docs.google.com/presentation/d/1tDRIv1zG0FpH-1GnznTroEG5xgxNJ7rG0eVXkCJeT2Q/edit>

O **Strapi** é um **Headless CMS** open-source feito 100% em JavaScript, totalmente customizável e orientado para desenvolvedores preocupados em agilidade.

Um **CMS** (Content Management System - Sistema de Gerenciamento e Conteúdo) é um software responsável por gerenciar o conteúdo, ou seja, permitir **criação**, **edição** e **organização** de um determinado conteúdo.

#### Headless CMS

Vantagens:

- Mesma entrega para diferentes tipos de dispositivos
- Agnóstico de frameworks (mesma base funciona com React, Vue, Angular, etc)
- Mais fácil na manutenção
- Mais ágil para criação de protótipos

#### Strapi

Vantagens:

- 100% open-source
- Altamente customizável (API e painel)
- Funciona com Rest API ou GraphQL e onde colocá-los
- Self Hosted (você controla seus dados e onde colocá-los)
- Roadmap bem definido e grande investimento

Algumas **features nativas**:

- Suporte a multiplos bancos de dados (SQLite, MongoDB, Postgres, MariaDB)
- Documentação automática com plugin de one-click
- Integração a Webhooks
- Autenticações e Permissões por padrão
- Integração com diferentes serviços (Cloundinary, SendGrid, Algolia, Redis)
- Sistema de emails
- Sistema de assets que otimiza imagens e cria em diferentes tamanhos

O que podemos fazer com o **Strapi**?

- Sites estáticos
- Sites Institucionais para empresas
- Sites de notícias
- Ecommerce
- O que você quiser!

Por que usar o **Strapi** ao invés de criar algo prório ou Wordpress, Contentful, DatoCMS?

- Mais agilidade ao criar algo próprio
- Codebase toda em JavaScript (mais fácil em manutenção)
- Sem mensalidades e controle do próprio dado (caso de Contentful, DatoCMS)

#### Como o Strapi funciona

Possui 3 tipos de estrutura de dados

- Collection Types (conjunto de dados padrão. Ex: usuários, produtos, categorias)
- Single Types (dado único. Ex: homepage, footer, menu)
- Component Types (estrutura de dados reutilizados. Ex: galerias, hero)

HÁ vários tipos para **Fields**: Texto, Rich Text, Number, Data, Booleano, Relação, Email, Senha, Enumeração, Mídia, JSON, UID, Component, Dynamic Zone...

### Aula 7 - Introdução ao CSS-in-JS

Slides: <https://docs.google.com/presentation/d/1MhqVH0ieg8ILsQVTY-HJFzuDFyIHiTF2zmPu9QZbmxU/edit>

**CSS** é muito difícil! É sério! Quem diz o contrário, é porque quer ser legal...

Problemas com **CSS**

- Falta de escopo local (uma lib de terceiro pode colidir com meu código)
- Especificidade e novamente, colisão de estilos!
- Código não utilizado (dead code)
- Falta de modularidade
- Dificuldade na manutenção de código quebrando sabe-se lá Deus onde

Os pré-processadores como **Less**, **Sass**, **Stylus** vieram ajudar em algumas coisas, mas continuaram com os problemas clássicos, além de abrir margem para **péssimas práticas**.

#### CSS-in-JS

Se refere a um conjunto de ideais para resolver os complexos problemas do **CSS**. E existem diferentes bibliotecas que fazem essa prática.

#### Bibliotecas de CSS-in-JS

- Aphrodite
- Emotion
- Glamor
- Styled Components
- Styled JSX
- Muitas outras (<https://github.com/michelebertoli/css-in-js>)

#### Styled Components

Vantagens:

- Critical CSS automático
- Escopo definido (sem colisão de classes)
- Remoção de CSS não utilizado
- Estilos dinâmicos (props, themes)
- Manutenção simplificada e sem dor
- Prefixos automatizados (webkits)

Exemplo de uso:

```javascript
import styled from 'styled-components'

export const Main = styled.div`
  align-items: center;
  display: flex;
`
```

Exemplo "complicado/transpilado":

```css
.styled__Main-sc-11b8j8d-1-bSsuBw {
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
```

Exemplo de Esitlo Dinâmico:

```javascript
const Button = styled.button`
  background-color: ${ props => props.primary ? 'palevioletred' : 'white' };
  color: ${ props => props.primary ? 'white' : 'palevioletred' };
`

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
)
```

Exemplo para Estender Estilos:

```javascript
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
)
```

### Aula 8 - Introdução a Testes de Software

Slides: <https://docs.google.com/presentation/d/1togS6dJDG514q_bT6Atsfa6ogMMyoTCGUuJt48I4gCg/edit#slide=id.g8565c632f8_0_0>

Por que escrever tester?

- Código complexo não é simples de se debuggar só com o olho
- Testar é uma forma robusta de **validar software**
  - Funciona como eu espero?
  - Funciona como o usuário espera?
  - Se eu atualizar esse trecho, o código quebra?
- Testes funcionam como uma primeira camada de documentação

Que tipos de teste existem?

Existem vários níveis de testes, mas aqui veremos apenas dois:

- Testes Unitários
  - Testam **isoladamente** pequenas unidades de código
  - O código está se comportando como o **desenvolvedor** espera?
- Testes Funcionais
  - Checa se as unidades funcionam também entre si
  - Testes podem conter múltiplas classes, métodos, etc
  - O programa funciona de acordo com o que o **usuário** espera?

#### Metodoliga de Teste

Test-driven development (TDD): (ciclo) -> Escrevemos um Teste -> Fazemos o Teste passar -> Refatoramos ->

É muit importante que o teste seja escrito orientado à funcionalidade e não a implementação, para não correr o risco de "maquiar" o teste. Pois como sabemos os truques da implementação, esses testes podem não ser confiáveis.

#### Ferramentas

State of JS: <https://2019.stateofjs.com/testing/>

Baseados nos níveis de **satisfação** e **adoção**, nosso framework escolhido for o **Jest**.
Além dele possuir várias ferramentas já incluídas, como facilidade para mocks, realtório de cobertura, métodos para tratar intervals, snapshots e outros detalhes.

Para testar nossos componentes em React, a escolha for a biblioteca **React Testing Library (RTL)**, por ela possuir melhor suporte as novas tecnologias do React como os **hooks** e também uma **renderização real** do componente.

E nossa biblioteca para end-to-end for o **Cypress**, também devido aos níveis de satisfação e adoção na comunidade, além de ser a mais performática dentre as bibliotecas do tipo.

## Módulo 1: Parte 2 - Criando nosso Boilerplate do NextJS

### Aula 9 - Requisitos para o projeto

#### Link úteis

- Lista de vídeos para configurar o Windows: <https://www.youtube.com/playlist?list=PLlAbYrWSYTiOpefWtd6uvwgKT1R-94Zfd>

### Aula 10 - Criando o boilerplate com create-next-app

Comando para criar um *Next App*:

- Com Yarn:

> yarn create next-app

- Com NPM:

> npx create-next-app

Ler sobre **Sistema de Monorepo**

#### Link úteis

- Site oficial no NextJS: <https://nextjs.org>
- Get Started do NextJS: <https://nextjs.org/docs/getting-started>
- Repositório com exemplos do NextJS: <https://github.com/vercel/next.js/tree/canary/examples>
- Repositório do Boilerplate: <https://github.com/React-Avancado/boilerplate>
- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/3852287bc059a0aab543eb0e1f16cbacde749433>

### Aula 11 - Configurando o TypeScript no NextJS

Criar o arquivo **tsconfig.json** na raiz do projeto e rodar o comando **yarn dev**, para o NextJS configurará-lo.

> touch tsconfig.json

Comando para habilitar o TypeScript no projeto, posteriromente rodar o comando **yarn dev**.

> yarn add --dev typescript @types/react @types/node

No objeto encontrado dentro do arquivo **tsconfig.json**, alterar o valor do atributo **strict** para **true**.

#### Link úteis

- Documentação oficial do NextJS com TypeScript: <https://nextjs.org/docs/basic-features/typescript>

- Mini-série TypeScript: <https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/46989d2568b87c14d2bc251b99eff70df53087c9>

### Aula 12 - Configurando o .editorconfig

Exemplo de configuração do arquivo .editorconfig

```bash
# EditorConfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

#### Link úteis

- Site oficial do EditorConfig: <https://editorconfig.org>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/94d8978f80d229ac9be9ce9c50fd6b0f87737802>

### Aula 13 - Configurando o ESLint

Comando para instalar o ESLint no projeto:

> npx eslint --init

Desligar a regra de prop-types:

- Dentro do arquivo **.eslintrc.json**, em **rules** adicione a opção a baixo:

> "react/prop-types": "off"

No NextJS, o react já importado globalmente. Para desabilitar esse alerta o ESLint, use o comando a baixo em **rules**:

> "react/react-in-jsx-scope": "off"

Desabilitar a tipagem obrigatória de retorno (TypeScript é inteligente em sabe o tipo de retorno, então só é preciso usar quando realmente for necessario).

> "@typescript-eslint/explicit-module-boundary-types": ["off"]

Definir versão do React:

```json
"settings": {
  "react": {
    "version": "detect"
  }
}
```

ESLint no terminal:

- Para verificar somente:

> eslint source_directory

- Para verificar e tentar corrigir:

> eslint source_directory --fix

#### Link úteis

- Site oficial do Eslint: <https://eslint.org>

- Eslint Plugin React Hooks: <https://www.npmjs.com/package/eslint-plugin-react-hooks>

- Eslint React Prop Types Rule: <https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md>

- Eslint JSX in Scope Rule: <https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md>

- TypeScript-Eslint Explicit Module Boundary Rule: <https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/adfdc0eef4be3016e3915323d5102a111251c84b>

### Aula 14 - Configurando o Prettier com o ESLint

Instalar o Prettier:

> yarn add --dev eslint-config-prettier eslint-plugin-prettier

Configuração do arquivo **.prettierrc**:

```json
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

Adicione também no arquivo **.eslintrc.json** em **plugins** a opção:

> "plugin:prettier/recommended"

#### Link úteis

- Site oficial do Prettier: <https://prettier.io>

- Integrando com o ESLint: <https://github.com/prettier/eslint-config-prettier#installation>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/1156e1690b671861c85662aef57123dc7acc88ca>

### Aula 15 - Configurando um git hook com Husky e Lint-Staged

Instalar um lint para verificar o código antes de comitar:

> yarn add --dev lint-staged husky

#### Link úteis

- Repositório do Husky: <https://github.com/typicode/husky>

- Repositório do Lint-staged: <https://github.com/okonet/lint-staged>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/d2529246e76be1bcc8803d4ee8257d8e6716d9e8>

### Aula 16 - Instalando e Configurando o Jest com TypeScript

Instalações:

> yarn add --dev jest @babel/preset-typescript @types/jest

#### Link úteis

- Site oficial do Jest: <https://jestjs.io>

- Documentação do Jest para TypeScript: <https://jestjs.io/docs/en/getting-started#using-typescript>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/0d29711688f376c6ddbac135ce7103d1d3a33ec9>

### Aula 17 - Instalando o React Testing Library (RTL) e escrevendo primeiros testes

#### Link úteis

- Site oficial do RTL: <https://testing-library.com/docs/react-testing-library/intro>

- Cheatsheet do RTL: <https://testing-library.com/docs/react-testing-library/cheatsheet>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/934d608cecab497d8bc31b74cdebdf1b9d8aa94d>

### Aula 18 - Usando o findRelatedTests para rodar somente testes necessários

#### Link úteis

- Documentação sobre findRelatedTests: <https://jestjs.io/docs/en/cli#--findrelatedtests-spaceseparatedlistofsourcefiles>

### Aula 19 - Instalando o Styled Components e configurando o SSR

#### Link úteis

- Site oficial do Styled Components: <https://styled-components.com>

- Instalação do Styled Components: <https://styled-components.com/docs/basics#installation>

- Configuração do Styled com NextJS: <https://styled-components.com/docs/advanced#nextjs>

- Customizando o _document: <https://nextjs.org/docs/advanced-features/custom-document>

Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/3303d664a5d3acd9c4f5b4eb7a72f61b528f41f8>

### Aula 20 - Criando estilos globais com createGlobalsStyle

#### Link úteis

- Documentação do createGlobalsStyle: <https://styled-components.com/docs/api#createglobalstyle>

- Customizando o _app: <https://nextjs.org/docs/advanced-features/custom-app>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/3e43f7d917b79a2875d1eeb1fe0794460e88ae3a>

### Aula 21 - Criando estilos no primeiro componente

#### Link úteis

- Arquivo corrigindo toHaveStyle - moduleMapper: <https://github.com/React-Avancado/boilerplate/blob/master/jest.config.js>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/4a887c039cfab5d23b9ec3b87f22edbdae537438>

### Aula 22 - Melhorando snapshots com Jest-styled-components

#### Link úteis

- Documentação do Jest Styled Components: <https://styled-components.com/docs/tooling#jest-integration>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/939187f102aa648179a66c9f93334a7c8282f1ad>

### Aula 23 - Configurando o Storybook e escrevendo stories

#### Link úteis

- Site oficial do Storybook: <https://storybook.js.org>

- Documentação para Storybook com React: <https://storybook.js.org/docs/react/get-started/introduction>

- Preset para TypeScript: <https://storybook.js.org/docs/react/api/presets>

- Sobre como escrever stories: <https://storybook.js.org/docs/react/get-started/whats-a-story>

- Sobre decorators e como usar: <https://storybook.js.org/docs/react/configure/storybook-addons>

- Addon de Knobs: <https://github.com/storybookjs/storybook/tree/master/addons/knobs>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/1b53ec85df786febf158157f4410bfaeffc013c6>

### Aula 24 - Migrando Storybook para versão 6.x

#### Link úteis

- Site oficial do Storybook: <https://storybook.js.org>

- Documentação para Storybook: <https://storybook.js.org/docs/react/get-started/introduction>

- Context for Mocking (ThemeProvider, GlobalStyles): <https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/1b53ec85df786febf158157f4410bfaeffc013c6>

### Aula 25 - Usando Storybook Essentials e Controls

#### Link úteis

- Documentação do Essentials: <https://storybook.js.org/docs/react/essentials/introduction>

- Documentação do Controls: <https://storybook.js.org/docs/react/essentials/controls>

- Artigo no Medium sobre migração: <https://medium.com/storybookjs/storybook-6-migration-guide-200346241bb5>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/pull/59/files>

### Aula 26 - Configurando PWA

#### Link úteis

- Site do Next-PWA: <https://www.npmjs.com/package/next-pwa>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/a409075383c260d77356ded39915098da40b3f14>

### Aula 27 - Iniciando um projeto através do nosso boilerplate

#### Link úteis

- Mudanças na documentação do boilerplate: <https://github.com/React-Avancado/boilerplate/commit/baf5c9536c4d9f6ee1b93e9df3c849eb5af4850b>

- Repositório final do boilerplate: <https://github.com/React-Avancado/boilerplate>

### Aula 28 - Extra: PR - corrigindo cobertura de testes

#### Link úteis

- Pull Request: <https://github.com/React-Avancado/boilerplate/pull/1>

### Aula 29 - Extra: Servindo estáticos corretamente no build do Storybook

#### Link úteis

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/a6f28b773c54e5bd358d806a5ed8de49b649c762>

### Aula 30 - Extra: Mantendo o boilerplate com atualizado usando Dependabot e Github Actions

### Aula 31 - Extra: Automatizando criação de arquivos

#### Link úteis

- Site oficial do Plopjs: <https://plopjs.com>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/pull/42/files>

### Aula 32 - FIX: Corrigindo configuração do jest-styled-components

### Aula 33 - FIX: Definindo typings para jest-styled-components
