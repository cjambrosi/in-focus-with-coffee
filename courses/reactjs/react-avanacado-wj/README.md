# React Avançado: Crie aplicações com NextJS, GraphQL e mais <!-- omit in toc -->

[Udemy Link](https://www.udemy.com/course/react-avancado/ 'React Avançado: Crie aplicações com NextJS, GraphQL e mais')

FAQ: <https://github.com/react-Avancado/faq>

Boilerplate original: <https://github.com/React-Avancado/boilerplate>

## Sumário <!-- omit in toc -->

- [Módulo 1: Parte 1 - Introdução Teórica](#módulo-1-parte-1---introdução-teórica)
  - [Aula 3 - Introdução ao NextJS](#aula-3---introdução-ao-nextjs)
    - [Links para estudo](#links-para-estudo)
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
    - [Links úteis](#links-úteis)
  - [Aula 10 - Criando o boilerplate com create-next-app](#aula-10---criando-o-boilerplate-com-create-next-app)
    - [Links úteis](#links-úteis-1)
  - [Aula 11 - Configurando o TypeScript no NextJS](#aula-11---configurando-o-typescript-no-nextjs)
    - [Links úteis](#links-úteis-2)
  - [Aula 12 - Configurando o .editorconfig](#aula-12---configurando-o-editorconfig)
    - [Links úteis](#links-úteis-3)
  - [Aula 13 - Configurando o ESLint](#aula-13---configurando-o-eslint)
    - [ESLint no terminal](#eslint-no-terminal)
    - [Links úteis](#links-úteis-4)
  - [Aula 14 - Configurando o Prettier com o ESLint](#aula-14---configurando-o-prettier-com-o-eslint)
    - [Links úteis](#links-úteis-5)
  - [Aula 15 - Configurando um git hook com Husky e Lint-Staged](#aula-15---configurando-um-git-hook-com-husky-e-lint-staged)
    - [Links úteis](#links-úteis-6)
  - [Aula 16 - Instalando e Configurando o Jest com TypeScript](#aula-16---instalando-e-configurando-o-jest-com-typescript)
    - [Links úteis](#links-úteis-7)
  - [Aula 17 - Instalando o React Testing Library (RTL) e escrevendo primeiros testes](#aula-17---instalando-o-react-testing-library-rtl-e-escrevendo-primeiros-testes)
    - [Links úteis](#links-úteis-8)
  - [Aula 18 - Usando o findRelatedTests para rodar somente testes necessários](#aula-18---usando-o-findrelatedtests-para-rodar-somente-testes-necessários)
    - [Links úteis](#links-úteis-9)
  - [Aula 19 - Instalando o Styled Components e configurando o SSR](#aula-19---instalando-o-styled-components-e-configurando-o-ssr)
    - [Links úteis](#links-úteis-10)
  - [Aula 20 - Criando estilos globais com createGlobalsStyle](#aula-20---criando-estilos-globais-com-createglobalsstyle)
    - [Links úteis](#links-úteis-11)
  - [Aula 21 - Criando estilos no primeiro componente](#aula-21---criando-estilos-no-primeiro-componente)
    - [Links úteis](#links-úteis-12)
  - [Aula 22 - Melhorando snapshots com Jest-styled-components](#aula-22---melhorando-snapshots-com-jest-styled-components)
    - [Links úteis](#links-úteis-13)
  - [Aula 23 - Configurando o Storybook e escrevendo stories](#aula-23---configurando-o-storybook-e-escrevendo-stories)
    - [Links úteis](#links-úteis-14)
  - [Aula 24 - Migrando Storybook para versão 6.x](#aula-24---migrando-storybook-para-versão-6x)
    - [Links úteis](#links-úteis-15)
  - [Aula 25 - Usando Storybook Essentials e Controls](#aula-25---usando-storybook-essentials-e-controls)
    - [Links úteis](#links-úteis-16)
  - [Aula 26 - Configurando PWA](#aula-26---configurando-pwa)
    - [Links úteis](#links-úteis-17)
  - [Aula 27 - Iniciando um projeto através do nosso boilerplate](#aula-27---iniciando-um-projeto-através-do-nosso-boilerplate)
    - [Links úteis](#links-úteis-18)
  - [Aula 28 - Extra: PR - corrigindo cobertura de testes](#aula-28---extra-pr---corrigindo-cobertura-de-testes)
    - [Links úteis](#links-úteis-19)
  - [Aula 29 - Extra: Servindo estáticos corretamente no build do Storybook](#aula-29---extra-servindo-estáticos-corretamente-no-build-do-storybook)
    - [Links úteis](#links-úteis-20)
  - [Aula 30 - Extra: Mantendo o boilerplate com atualizado usando Dependabot e Github Actions](#aula-30---extra-mantendo-o-boilerplate-com-atualizado-usando-dependabot-e-github-actions)
  - [Aula 31 - Extra: Automatizando criação de arquivos](#aula-31---extra-automatizando-criação-de-arquivos)
    - [Links úteis](#links-úteis-21)
  - [Aula 32 - FIX: Corrigindo configuração do jest-styled-components](#aula-32---fix-corrigindo-configuração-do-jest-styled-components)
  - [Aula 33 - FIX: Definindo typings para jest-styled-components](#aula-33---fix-definindo-typings-para-jest-styled-components)
- [Módulo 2: Iniciando com Strapi](#módulo-2-iniciando-com-strapi)
  - [Aula 34 - Strapi por debaixo dos panos](#aula-34---strapi-por-debaixo-dos-panos)
    - [Links úteis](#links-úteis-22)
  - [Aula 35 - Requisitos para o Strapi](#aula-35---requisitos-para-o-strapi)
    - [Links úteis](#links-úteis-23)
  - [Aula 36 - Comandos do PostgreSQL](#aula-36---comandos-do-postgresql)
    - [Trabalhando na Interface do PostgreSQL](#trabalhando-na-interface-do-postgresql)
    - [Links úteis](#links-úteis-24)
  - [Aula 37 - Iniciando o Strapi local](#aula-37---iniciando-o-strapi-local)
    - [Links úteis](#links-úteis-25)
  - [Aula 38 - Iniciando o Strapi com Docker](#aula-38---iniciando-o-strapi-com-docker)
    - [Links úteis](#links-úteis-26)
  - [Aula 39 - Apresentação do projeto da Landing Page](#aula-39---apresentação-do-projeto-da-landing-page)
    - [Links úteis](#links-úteis-27)
  - [Aula 40 - Apresentação do CMS do Strapi](#aula-40---apresentação-do-cms-do-strapi)
    - [Links úteis](#links-úteis-28)
  - [Aula 41 - Arquivos iniciais do Strapi](#aula-41---arquivos-iniciais-do-strapi)
    - [Links úteis](#links-úteis-29)
  - [Aula 42 - Fields do Strapi](#aula-42---fields-do-strapi)
    - [Links úteis](#links-úteis-30)
- [Módulo 2 (extra): Criando estrutura de dados para o CMS](#módulo-2-extra-criando-estrutura-de-dados-para-o-cms)
  - [Aula 43 - Criando logo e componente de Header](#aula-43---criando-logo-e-componente-de-header)
    - [Links úteis](#links-úteis-31)
  - [44 Criando Section About Project - Rich Text](#44-criando-section-about-project---rich-text)
    - [Links úteis](#links-úteis-32)
  - [45 Criando Section Tech - Repeatable Component](#45-criando-section-tech---repeatable-component)
    - [Links úteis](#links-úteis-33)
  - [46 Criando Section Concepts](#46-criando-section-concepts)
    - [Links úteis](#links-úteis-34)
  - [47 Criando Section Modules](#47-criando-section-modules)
    - [Links úteis](#links-úteis-35)
  - [48 Criando Agenda e Pricing Box - reutilizando componente já criado](#48-criando-agenda-e-pricing-box---reutilizando-componente-já-criado)
    - [Links úteis](#links-úteis-36)
  - [49 Criando Collection Type para Authors](#49-criando-collection-type-para-authors)
    - [Links úteis](#links-úteis-37)
  - [50 Adicionando campo faltante em Authors](#50-adicionando-campo-faltante-em-authors)
    - [Links úteis](#links-úteis-38)
  - [51 Criando relations (has many)](#51-criando-relations-has-many)
    - [Links úteis](#links-úteis-39)
  - [52 Criando Section Reviews](#52-criando-section-reviews)
    - [Links úteis](#links-úteis-40)
  - [53 Criando Section FAQ](#53-criando-section-faq)
    - [Links úteis](#links-úteis-41)
  - [54 Atualizando Strapi para 3.0.6 (se já possuir essa versão ou maior, ignore)](#54-atualizando-strapi-para-306-se-já-possuir-essa-versão-ou-maior-ignore)
    - [Links úteis](#links-úteis-42)
  - [55 Adicionando um plugin customizado (CKEditor)](#55-adicionando-um-plugin-customizado-ckeditor)
    - [Links úteis](#links-úteis-43)
  - [56 Importando e Exportando dados no PostgreSQL](#56-importando-e-exportando-dados-no-postgresql)
    - [Links úteis](#links-úteis-44)
  - [57 Permissões para rotas de Rest API](#57-permissões-para-rotas-de-rest-api)

## Módulo 1: Parte 1 - Introdução Teórica

### Aula 3 - Introdução ao NextJS

[Link para os slides](https://docs.google.com/presentation/d/1Q9dQ3etOKdgPt8kvmuC9oliDqAlARZOia3mhQGDGB3k/edit#slide=id.g8565c632f8_0_0)

O NextJS é um **Framework Web** desenvolvido em **ReactJS** lançado em 2016 por Guilhermeo Rauch. Suporta SSG, SSR e até SPA.

Um **Framework Web**, é um sistema opinativo com **estrutura** e **ferramentas** já definidas.

O que o **NextJS** tem/faz?

- Renderização no servidor (Server Side Rendering - SSR)
- Geração de estáticos (Static Site Generation - SSG)
- CSS-in-JS (Styled-jsx, Styled Components, Emotion, etc)
- Zero Configuration (rotas, hot reloading, code splitting...)
- Completamente extensível (controle completo do Babel/Webpack, plugins, etc)
- Otimizado para produção

Tipos de uma aplicação:

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

#### Links para estudo

<https://nextjs.org/learn/basics/create-nextjs-app> (Tutorial oficial passo-a-passo)
<https://dev.to/kefranabg/demystifying-ssr-csr-universal-and-static-rendering-with-animations-m7d> (Animações vistas nos slides)
<https://marinaaisa.com/blog/cook-websites-based-on-your-needs/> (Explicações sobre quando usar um ou outro)
<https://github.com/vercel/next.js/tree/canary/examples> (Vários exemplos oficiais do NextJS com outras tecnologias)

### Aula 4 - Introdução ao GraphQL

[Link para os slides](https://docs.google.com/presentation/d/1XhGUPXgbUGBqyexLm3HuV9Rg-8YdPM_vQ7d4wf4vRAw/edit#slide=id.g8565c632f8_0_0)

**GraphQL** é uma **linguagem de consulta** de dados desenvolvida e usada pelo Facebook desde 2012.

#### Rest API x GraphQL

Rest API:

- Problemas:
  - Dificulades para evoluir a API (criação de N versões)
  - Entrega de dados nem sempre necessários
  - Aumento no tamanho da requisição
  - Rotas altamente acopladas

GraphQL:

- Vantagens:
  - Permite evolução constante
  - Entrega somente dados requisistados (tamanho menor e mais rápido)
  - Rota única, dados altamente desacoplados

### Aula 5 - Introdução ao GraphQL Clients

[Link para os slides](https://docs.google.com/presentation/d/1QctAckhGlvs0NMgf_GsRdqui_cm0UqJOew55WFChjNg/edit#slide=id.g8565c632f8_0_0)

Os **GraphQL Clients** são responsáveis por criar camadas de abstração para realizar queries/mutations, sistemas de cache, validações e otimizações.

Cliens mais conhecidos/utilizados:

- **FetchQL**
  - Vantagens:
    - Bastante leve
    - API simplificada
    - Escrito com ES2015 e modules
    - Isomórfico (Node/Browser)
  - Desvantagens:
    - Não possui sistema de cache
    - Não possui tratamento de dados e validações
    - Não tem contexto de estados
- **GraphQL Request**
  - Vantagens:
    - Super simples e leve
    - Baseado em Promises (async/await)
    - Suporte a TypeScript
    - Isomórfico (Node/Browser)
  - Desvantagens:
    - Não possui sistema de cache
    - Não possui tratamento de dados e validações
    - Não possui contexto de estado
- **uRQL**
  - Vantagens:
    - Bastante leve e focado em performance
    - Altamente extensível
    - Junto com Exchanges possui caching
    - Possui suporte offline
  - Desvantagens:
    - Biblioteca bastante nova (poucos materiais sobre)
    - Pouca adoção ainda (até o momento)
- **Relay Modern**
  - Vantagens:
    - Focado em performance
    - Pré-compila as queries do GraphQL em build time (evita que o usuário baise o parser)
    - Possui sistema de caching/states
  - Desvantagens:
    - Necessita de configurações a mais no tooling
    - Curva de aprendizado maior devido a mais detalhes para o funcionamento
- **Apollo Client**
  - Vantagens:
    - Largamente utilizado no mercado
    - Possui sistema de caching/states
    - API simplificada e com suporte a Hooks
    - Muito material online
  - Desvantagens:
    - Extramente grande!
    - Atualizações constante com Breaking Changes

### Aula 6 - Introdução ao Strapi - Headless CMS

[Link para os slides](https://docs.google.com/presentation/d/1tDRIv1zG0FpH-1GnznTroEG5xgxNJ7rG0eVXkCJeT2Q/edit)

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

Há vários tipos para **Fields**: Texto, Rich Text, Number, Data, Booleano, Relação, Email, Senha, Enumeração, Mídia, JSON, UID, Component, Dynamic Zone...

### Aula 7 - Introdução ao CSS-in-JS

[Link para os slides](https://docs.google.com/presentation/d/1MhqVH0ieg8ILsQVTY-HJFzuDFyIHiTF2zmPu9QZbmxU/edit)

**CSS** é muito difícil! É sério! Quem diz o contrário, é porque quer ser legal...

Problemas com o **CSS**:

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

[Link para os slides](https://docs.google.com/presentation/d/1togS6dJDG514q_bT6Atsfa6ogMMyoTCGUuJt48I4gCg/edit#slide=id.g8565c632f8_0_0)

Por que escrever testes?

- Código complexo não é simples de se debuggar só com o olho
- Testar é uma forma robusta de **validar software**
  - Funciona como eu espero?
  - Funciona como o usuário espera?
  - Se eu atualizar esse trecho, o código quebra?
- Testes funcionam como uma primeira camada de documentação

Que tipos de testes existem? Bom, existem vários níveis de testes, mas aqui veremos apenas dois:

- Testes Unitários
  - Testam **isoladamente** pequenas unidades de código
  - O código está se comportando como o **desenvolvedor** espera?
- Testes Funcionais
  - Checa se as unidades funcionam também entre si
  - Testes podem conter múltiplas classes, métodos, etc
  - O programa funciona de acordo com o que o **usuário** espera?

#### Metodoliga de Teste

Test-driven development (TDD): (ciclo) -> Escrevemos um Teste -> Fazemos o Teste passar -> Refatoramos ->

É muito importante que o teste seja escrito orientado à funcionalidade e não a implementação, para não correr o risco de "maquiar" o teste. Pois como sabemos os truques da implementação, esses testes podem não ser confiáveis.

#### Ferramentas

State of JS: <https://2019.stateofjs.com/testing/>

Baseados nos níveis de **satisfação** e **adoção**, nosso framework escolhido for o **Jest**.
Além dele possuir várias ferramentas já incluídas, como facilidade para mocks, realtório de cobertura, métodos para tratar intervals, snapshots e outros detalhes.

Para testar nossos componentes em React, a escolha for a biblioteca **React Testing Library (RTL)**, por ela possuir melhor suporte as novas tecnologias do React como os **hooks** e também uma **renderização real** do componente.

E nossa biblioteca para end-to-end for o **Cypress**, também devido aos níveis de satisfação e adoção na comunidade, além de ser a mais performática dentre as bibliotecas do tipo.

## Módulo 1: Parte 2 - Criando nosso Boilerplate do NextJS

### Aula 9 - Requisitos para o projeto

{ ... }

#### Links úteis

- Lista de vídeos para configurar o Windows: <https://www.youtube.com/playlist?list=PLlAbYrWSYTiOpefWtd6uvwgKT1R-94Zfd>

### Aula 10 - Criando o boilerplate com create-next-app

Comando para criar um *Next App*:

- Com o Yarn:

  > yarn create next-app

- Com o NPM:

  > npx create-next-app

Ler sobre **Sistema de Monorepo**

#### Links úteis

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

No objeto encontrado dentro do arquivo `tsconfig.json`, alterar o valor do atributo **strict** para **true**.

#### Links úteis

- Documentação oficial do NextJS com TypeScript: <https://nextjs.org/docs/basic-features/typescript>

- Mini-série TypeScript: <https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/46989d2568b87c14d2bc251b99eff70df53087c9>

### Aula 12 - Configurando o .editorconfig

Exemplo de configuração do arquivo `.editorconfig`:

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

#### Links úteis

- Site oficial do EditorConfig: <https://editorconfig.org>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/94d8978f80d229ac9be9ce9c50fd6b0f87737802>

### Aula 13 - Configurando o ESLint

Comando para instalar o ESLint no projeto:

> npx eslint --init

Desligar a regra de prop-types:

- Dentro do arquivo `.eslintrc.json`, em **rules** adicione a opção abaixo:

  > "react/prop-types": "off"

No NextJS, o React já é importado globalmente. Para desabilitar esse alerta o ESLint, use o comando abaixo em **rules**:

> "react/react-in-jsx-scope": "off"

Desabilitar a tipagem obrigatória de retorno:

> "@typescript-eslint/explicit-module-boundary-types": ["off"]

- O TypeScript é inteligente e sabe o tipo de retorno, então só é preciso usar quando realmente for necessario.

Definir versão do React:

```json
"settings": {
  "react": {
    "version": "detect"
  }
}
```

#### ESLint no terminal

Para verificar somente:

> eslint source_directory

Para verificar e tentar corrigir:

> eslint source_directory --fix

#### Links úteis

- Site oficial do Eslint: <https://eslint.org>

- Eslint Plugin React Hooks: <https://www.npmjs.com/package/eslint-plugin-react-hooks>

- Eslint React Prop Types Rule: <https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md>

- Eslint JSX in Scope Rule: <https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md>

- TypeScript-Eslint Explicit Module Boundary Rule: <https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/adfdc0eef4be3016e3915323d5102a111251c84b>

### Aula 14 - Configurando o Prettier com o ESLint

Instalar o Prettier:

> yarn add --dev eslint-config-prettier eslint-plugin-prettier

Configuração do arquivo `.prettierrc`:

```json
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

Adicione também no arquivo `.eslintrc.json` em **plugins** a opção:

> "plugin:prettier/recommended"

#### Links úteis

- Site oficial do Prettier: <https://prettier.io>

- Integrando com o ESLint: <https://github.com/prettier/eslint-config-prettier#installation>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/1156e1690b671861c85662aef57123dc7acc88ca>

### Aula 15 - Configurando um git hook com Husky e Lint-Staged

Instalar um lint para verificar o código antes de comitar:

> yarn add --dev lint-staged husky

#### Links úteis

- Repositório do Husky: <https://github.com/typicode/husky>

- Repositório do Lint-staged: <https://github.com/okonet/lint-staged>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/d2529246e76be1bcc8803d4ee8257d8e6716d9e8>

### Aula 16 - Instalando e Configurando o Jest com TypeScript

Instalações:

> yarn add --dev jest @babel/preset-typescript @types/jest

Adicionar as propriedades *jest* e *node* como **true**, no arquivo `.eslintrc.json` em **env**?

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true, // Para habilitar o trabalho com Jest
    "node": true // Configuração para utilizar o module.exports e não acusar warnings
  },
```

Criar o arquivo `jest.config.js` na raiz:

```javascript
module.exports = {
  testEnvironment: 'jsdom', // Dizer o tipo de ambiente para teste
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignorar pastas
  collectCoverage: true, // Cobertura de tudo, funções e etc
  collectCoverageFrom: ['src/**/*.ts(x)'], // De onde coletar para fazer a cobertura
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'] // Carregar configurações antes dos testes
}
```

Criar o diretório `.jest` e dentro criar o arquivo `.setup.ts`, para inserir informações futuras ao Jest:

Criar o arquivo `.babelrc` na raiz, referente as informações do Babel abaixo:

```json
{
  "presets": [
    "next/babel", // Serve para escrever o código de teste com as coisas mais novas do JavaScript
    "@babel/preset-typescript" // Entender o código em TypeScript
  ]
}
```

Adicionar o comando de teste (`"test": "jest"`) no arquivo `package.json` em **scripts**:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint src --max-warnings=0",
  "test": "jest" // Comando para iniciar os testes
},
```

#### Links úteis

- Site oficial do Jest: <https://jestjs.io>

- Documentação do Jest para TypeScript: <https://jestjs.io/docs/en/getting-started#using-typescript>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/0d29711688f376c6ddbac135ce7103d1d3a33ec9>

### Aula 17 - Instalando o React Testing Library (RTL) e escrevendo primeiros testes

Instalação do React Testing Library e do Jest-Dom:

> yarn add --dev @testing-library/react @testing-library/jest-dom

Importar o Jest-Dom no arquivo em `.jest/setup.ts` para utilização no projeto:

```typescript
import '@testing-library/jest-dom'
```

Escrevendo o primeiro teste:

```typescript
// File: client/src/components/Main/test.tsx

import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /react avançado/i
      })
    ).toBeInTheDocument()
  })
})

```

Arquivo que será testado:

```typescript
// File: client/src/components/Main/index.tsx

const Main = () => (
  <main>
    <h1>React Avançado</h1>
  </main>
)

export default Main
```

Comando para fazer com que o teste fique assistindo as mudanças e testar na hora de fazer o commit:

```json
// File: package.json

"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint src --max-warnings=0",
  "test": "jest",
  "test:watch": "yarn test --watch" // Adicionar essa propriedade
},
"lint-staged": {
    "src/**/*": [
      "yarn lint --fix",
      "yarn test --findRelatedTests --bail" // yarn test --findRelatedTests --bail, irá parar o commit no primeiro erro que encontrar | --findRelatedTests: somente se encontrar arquivos para testar
    ]
  },
```

#### Links úteis

- Site oficial do RTL: <https://testing-library.com/docs/react-testing-library/intro>

- Jest-Dom: <https://github.com/testing-library/jest-dom#installation>

- Cheatsheet do RTL: <https://testing-library.com/docs/react-testing-library/cheatsheet>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/934d608cecab497d8bc31b74cdebdf1b9d8aa94d>

### Aula 18 - Usando o findRelatedTests para rodar somente testes necessários

`--findRelatedTests`: Argumento para o comando de teste do Jest. Com ele, o Jest só irá acusar erros quando encontrar testes e não dará mais erro por não encontrá-los.

#### Links úteis

- Documentação sobre findRelatedTests: <https://jestjs.io/docs/en/cli#--findrelatedtests-spaceseparatedlistofsourcefiles>

### Aula 19 - Instalando o Styled Components e configurando o SSR

O Styled Components dentro da estrutura do NextJS com serve-side é um pouco diferente. É preciso fazer uma configuração para ele renderizar (server-side rendering) também junto com o servidor. Se não for configurado, é possível que as páginas sejam renderizadas antes do style components e assim não aplicando-o.

Instalando as dependências do Babel e do TypeScript:

> yarn add --dev @types/styled-components babel-plugin-styled-components

Configurar o Styled Components em **plugins** no arquivo `.babelrc`:

```json
// File: .babelrc

{
"plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true
      }
    ]
  ],
  "presets": [
    "next/babel",
    "@babel/preset-typescript"
  ]
}
```

Instalando o Styled Components:

> yarn add styled-components

Fazendo funcionar o Styled Components dentro do NextJS, sobrescrevendo o arquivo default do NextJS **_document**:

- Dentro do diretório `pages`, crie o arquivo chamado de `_document.tsx`.

- Cole o código padrão abaixo e pronto:

```typescript
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

#### Links úteis

- Site oficial do Styled Components: <https://styled-components.com>

- Instalação do Styled Components: <https://styled-components.com/docs/basics#installation>

- Configuração do Styled com NextJS: <https://styled-components.com/docs/advanced#nextjs>

- Customizando o _document: <https://nextjs.org/docs/advanced-features/custom-document>

Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/3303d664a5d3acd9c4f5b4eb7a72f61b528f41f8>

### Aula 20 - Criando estilos globais com createGlobalsStyle

Como configurar *Absolut Imports*:

- No arquivo `tsconfig.json` inserir a propriedade **baseUrl** com o diretório dos códigos ou o que preferir. Exemplo:

```json
{
  "compilerOptions": {
    "baseUrl": "src", // <--
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

- Assim, não será mais preciso passar o caminho relativo com "../" (na maioria dos lugares). Por exemplo:

```typescript
import GlobalStyles from 'styles/global'
```

#### Links úteis

- Documentação do createGlobalsStyle: <https://styled-components.com/docs/api#createglobalstyle>

- Customizando o _app: <https://nextjs.org/docs/advanced-features/custom-app>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/3e43f7d917b79a2875d1eeb1fe0794460e88ae3a>

### Aula 21 - Criando estilos no primeiro componente

{ ... }

#### Links úteis

- Arquivo corrigindo toHaveStyle - moduleMapper: <https://github.com/React-Avancado/boilerplate/blob/master/jest.config.js>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/4a887c039cfab5d23b9ec3b87f22edbdae537438>

### Aula 22 - Melhorando snapshots com Jest-styled-components

Integrando o Styled Components com o Jest:

- Instalando o *jest-styled-components*:

  > yarn add --dev jest-styled-components

- Fazer a importação necessãrio no arquivo de configuração do Jest:

  ```typescript
  // File: .jest/setup.ts

  import 'jest-styled-components'
  ```

#### Links úteis

- Documentação do Jest Styled Components: <https://styled-components.com/docs/tooling#jest-integration>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/939187f102aa648179a66c9f93334a7c8282f1ad>

### Aula 23 - Configurando o Storybook e escrevendo stories

Storybook é uma ferramenta para podermos testar os componentes de UI de forma isolada.

Instalando o Storybook:

> npx sb init

Obs: Na versão 5.3 utilizada na aula, ainda não suporta o TypeScript, então é preciso instalar alguns presets. Na versão 6 em diante, não é preciso instalar nada adicional.

**Decorator** serve para englobar os componentes através de *wrappers*, pode ser estilos, temas e etc.

Configurando o Storybook Addon Knobs (Não é mais necessário, verificar a Aula 25):

> yarn add @storybook/addon-knobs --dev

Executando o Storybook no projeto:

> yarn storybook

#### Links úteis

- Site oficial do Storybook: <https://storybook.js.org>

- Documentação para Storybook com React: <https://storybook.js.org/docs/react/get-started/introduction>

- Preset para TypeScript: <https://storybook.js.org/docs/react/api/presets>

- Sobre como escrever stories: <https://storybook.js.org/docs/react/get-started/whats-a-story>

- Sobre decorators e como usar: <https://storybook.js.org/docs/react/configure/storybook-addons>

- Addon de Knobs: <https://github.com/storybookjs/storybook/tree/master/addons/knobs>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/1b53ec85df786febf158157f4410bfaeffc013c6>

### Aula 24 - Migrando Storybook para versão 6.x

{ ... }

#### Links úteis

- Site oficial do Storybook: <https://storybook.js.org>

- Documentação para Storybook: <https://storybook.js.org/docs/react/get-started/introduction>

- Context for Mocking (ThemeProvider, GlobalStyles): <https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/1b53ec85df786febf158157f4410bfaeffc013c6>

### Aula 25 - Usando Storybook Essentials e Controls

Agora com as novas versões do "addon", é possível utilizar somente o *addons-essentials*.

O arquivo *main* em `.storybook/main.js`, ficará com os seguintes "addons" (somente o *addon-essentials*):

```typescript
module.exports = {
  stories: [
    '../src/components/**/stories.mdx',
    '../src/components/**/stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials']
}
```

O arquivo *stories.tsx* dentro do componente *Main* ficará assim:

```typescript
import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Tile default',
    description: 'Description default'
  }
} as Meta

export const Basic: Story = (args) => <Main { ...args } />
Basic.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS, NextJS e Styled Components'
}
```

#### Links úteis

- Documentação do Essentials: <https://storybook.js.org/docs/react/essentials/introduction>

- Documentação do Controls: <https://storybook.js.org/docs/react/essentials/controls>

- Artigo no Medium sobre migração: <https://medium.com/storybookjs/storybook-6-migration-guide-200346241bb5>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/pull/59/files>

### Aula 26 - Configurando PWA

Instalar o [next-pwa](https://web.dev/progressive-web-apps):

> yarn add next-pwa

É preciso criar o arquivo de configuração do NextJS `next.config.js`, na raiz do projeto. Onde serão inseridas as configurações de plugins, entre outras coisas, para o NextJS.

- Dentro dele, é preciso inserir o código de condiguração do *next-pwa*:

```typescript
// File: next.config.js

const isProd = process.env.NODE_ENV === 'prodution' // Desabilitar o PWA quando estiver no ambiente de DEV (yarn dev)

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd 
  }
})
```

Para utilizar a variavel `NODE_ENV`, é possivel criar um arquivo na raiz do projeto chamado de `.env` ou passar como parâmetro ao rodar

>

#### Links úteis

- Web Dev - PWA: <https://web.dev/progressive-web-apps>

- Site do Next-PWA: <https://www.npmjs.com/package/next-pwa>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/a409075383c260d77356ded39915098da40b3f14>

### Aula 27 - Iniciando um projeto através do nosso boilerplate

Parar inciar um projeto a partir de um "esqueleto", é precisa usar o comando normal de criação de um projeto em ReactJS, seguido do argumento **-e** e a URL do repositório pretendido. Exemplo:

> yarn create next-app -e https://github.com/cjambrosi/reactjs-boilerplate-ts

- Será solicitado o nome da aplicação. Isso depende de como será estruturado o projeto, geralmente o nome pode ser **client**.

Também é possível passar o nome como parâmetro no comando, assim:

> yarn create next-app -e https://github.com/cjambrosi/reactjs-boilerplate-ts client

#### Links úteis

- Mudanças na documentação do boilerplate: <https://github.com/React-Avancado/boilerplate/commit/baf5c9536c4d9f6ee1b93e9df3c849eb5af4850b>

- Repositório final do boilerplate: <https://github.com/React-Avancado/boilerplate>

### Aula 28 - Extra: PR - corrigindo cobertura de testes

{ ... }

#### Links úteis

- Pull Request: <https://github.com/React-Avancado/boilerplate/pull/1>

### Aula 29 - Extra: Servindo estáticos corretamente no build do Storybook

{ ... }

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/commit/a6f28b773c54e5bd358d806a5ed8de49b649c762>

### Aula 30 - Extra: Mantendo o boilerplate com atualizado usando Dependabot e Github Actions

O [Dependabot](https://dependabot.com), é um Bot que verifica quais dependências do projeto tiveram falhas de segurança ou atualizações. É preciso criar uma conta integrando com o GitHub, ou criando um arquivo **YAML** chamado de `dependabot.yaml` no repositorio, dentro de um diretório chamado de `.github/` na raiz.

Para garantir que não haverá incompatibilidade e *breaking change*, é preciso rodar a nova versão dos pacotes ou códigos que foram atualizados, como por exemplo os testes já configurados (lints, builds e etc). Para isso, é possível atilizar no GitHub o **GitHub Actions** <https://docs.github.com/pt/free-pro-team@latest/actions>. Com ele é possível rodar nos repositórios do GitHub todos os comandos de lints, testes, todo um fluxo de testes de código antes de realizar o deploy para algum lugar (isso é um CI, exemplo do Travis).

Configurando:

- Na raiz do projeto, crie o diretório `.github`.

- Dentro de `.github`, crie o diretório `workflows`.

- No diretório `workflows`, crie o arquivo `ci.yml` com o código de exemplo abaixo (sem os comentários):

  ```yaml
  # File: .github/workflows/ci.yml

  name: ci # Nome de workflow action (por padrão é ci)
  on: [pull_request] # Determinar onde eu quero que roda esse ci, neste caso, quando existir PRs

  jobs: # Trablhos que ele irá realizar
    build:
      runs-on: ubuntu-latest # Qual tipo de máquina irei rodar (mais comum)
      steps:
        - name: Checkout Repository # Para pegar os dados do repositório
          uses: actions/checkout@v2

        - name: Setup Node # Já que o Projeto utilizada
          uses: actions/setup-node@v1
          with:
            node-version: 14.x

        - name: Install dependencies # Instala as dependências
          run: yarn install

        - name: Linting # Roda o lint para saber se o PR está valido
          run: yarn lint

        - name: Test # Roda os teste de códigos
          run: yarn test

        - name: Build # Rodar o build do projeto, pois é preciso garantir que o build também esteja funcionando com nossas atualizações
          run: yarn build
  ```

### Aula 31 - Extra: Automatizando criação de arquivos

Instalar o [FlopJS](https://plopjs.com):

> yarn add -D plop

Configurando:

- Na raiz do projeto, crie o diretório `generators`

- Dentro de `generators`, crie o arquivo `plopfile.js` e insira o código de exemplo abaixo:

  ```javascript
  module.exports = function (plop) {
    plop.setGenerator('component', {
      description: 'application component',

      // inquirer prompts
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name?'
        }
      ],

      // actions to perform
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/index.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/stories.tsx',
          templateFile: 'templates/stories.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/styles.ts',
          templateFile: 'templates/styles.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/test.tsx.hbs'
        }
      ]
    })
  }
  ```

- Agora crie o diretório `templates`. Dentro dele, crie os templates com seus respectivos conteúdos, que serão utilizados pelo PlopJS para a geranção dos *Components*. Exemplo:

  - index.tsx.hbs
  - stories.tsx.hbs
  - styles.ts.hbs
  - test.tsx.hbs

- Também é preciso criar o comando no arquivo `package.json` para gerar o template, passando o diretório `generators`. Assim como no exemplo abaixo:

  ```json
  "scripts": {
    "generate": "yarn plop --plopfile generators/plopfile.js",
  }
  ```

Gerando um componente:

- No terminal, use o comando abaixo:

  > yarn generate

  - Será solicitado o nome do componente.

- Ou pode passar o nome do componente como argumento no comando, assim por exemplo:

  > yarn generate button

Sobre a extensão `.hbs`: *Handlebars*, uma linguagem de template onde contém um modelo escrito em código HTML e incorporado com expressões de barras.

#### Links úteis

- Site oficial do Plopjs: <https://plopjs.com>

- Código feito em aula: <https://github.com/React-Avancado/boilerplate/pull/42/files>

### Aula 32 - FIX: Corrigindo configuração do jest-styled-components

{ ... }

### Aula 33 - FIX: Definindo typings para jest-styled-components

Reinicializar o servido TypeScript pelo VSCode:

- Pressione os atalhos `CTRL + Shift + P` e selecione a opção **TypeScript: Restart TS server**

## Módulo 2: Iniciando com Strapi

### Aula 34 - Strapi por debaixo dos panos

{ ... }

#### Links úteis

- Site oficial do Strapi: <https://strapi.io>

- Repositório do Strapi: <https://github.com/strapi/strapi>

- Site do Buffet.js (Design Style do Strapi): <https://buffetjs.io>

- Roadmap do Strapi: <https://portal.productboard.com/strapi/1-roadmap/tabs/2-under-consideration>

- Site oficial do KoaJS: <https://koajs.com>

- Site oficial do Lerna (Monorepo): <https://lerna.js.org>

- Knex (SQL Query Builder): <http://knexjs.org>

### Aula 35 - Requisitos para o Strapi

{ ... }

#### Links úteis

- Documentação oficial Strapi - Instalação: <https://strapi.io/documentation/developer-docs/latest/getting-started/installation.html>

- Como instalar com a CLI: <https://strapi.io/documentation/developer-docs/latest/installation/cli.html>

- Como instalar com o Docker: <https://strapi.io/documentation/developer-docs/latest/installation/docker.html>

- Site oficial do PostgreSQL - Download: <https://www.postgresql.org/download>

- Instalando bancos no WSL 2: <https://docs.microsoft.com/pt-br/windows/wsl/tutorials/wsl-database>

- Site oficial do Docker: <https://www.docker.com/get-started>

### Aula 36 - Comandos do PostgreSQL

Comando para iniciar o banco PostgreSQL:

> sudo service postgresql start

- Deve informar a senha do usuário

Verificar se o serviço do banco de dados está funcionando:

> sudo service postgresql status

Parar o serviço do banco de dados:

> sudo service postgresql stop

Verificar a versão do PostgreSQL e se está funcionando:

> psql --version

Criar um novo usuário no PostgreSQL:

> sudo -u postgres createuser nome-do-usuario

Criar um novo banco de dados:

> sudo -u postgres createdb nome-do-banco-de-dados

#### Trabalhando na Interface do PostgreSQL

Para entrar na interface do PostgreSQL:

> sudo -u postgres psql

Comando para listar os usuários do PostgreSQL:

> \du

Comando para listar os bancos de dados do PostgreSQL:

> \l

Quando é criado um novo usuário no PostgreSQL, posteriromente é preciso criar uma senha e vinculá-lo a um banco de dados.

- Criar uma senha para o usuário:

  > ALTER USER nome-do-usuario WITH ENCRYPTED PASSWORD 'senha';

  - Se deu tudo certo, será retornada mensagem: **ALTER ROLE**.

- Conceder os privilégios necessãrios para o usuário em um determinado banco de dados:

  > GRANT ALL PRIVILEGES ON DATABASE nome-do-banco TO nome-do-usuario;

  - Se deu tudo certo, será retornada mensagem: **GRANT**.

Comando para sair da interface:

> \q

#### Links úteis

- Instalando PostgreSQL no Windows WSL: <https://docs.microsoft.com/pt-br/windows/wsl/tutorials/wsl-database>

- Comandos do PostgreSQL: <https://harshityadav95.medium.com/postgresql-in-windows-subsystem-for-linux-wsl-6dc751ac1ff3>

### Aula 37 - Iniciando o Strapi local

#### Links úteis

- Instalando utilizando a CLI e PostgreSQL local: <https://strapi.io/documentation/developer-docs/latest/installation/cli.html>

### Aula 38 - Iniciando o Strapi com Docker

#### Links úteis

- Site oficial Docker - Downloads: <https://www.docker.com/get-started>

- Instalando o Docker no Linux (Ubuntu): <https://docs.docker.com/engine/install/ubuntu>

- Instalando Docker no WSL2: <https://docs.docker.com/docker-for-windows/wsl>

- Imagem do Strapi Docker no Github: <https://github.com/strapi/strapi-docker>

- Imagem do Strapi no Docker Hub: <https://hub.docker.com/r/strapi/strapi>

### Aula 39 - Apresentação do projeto da Landing Page

#### Links úteis

- Repositório da Landing Page (sem API): <https://github.com/React-Avancado/landing-page>

- Site oficial do Heroku (host do backend): <https://www.heroku.com>

- Site oficial do Netlify (host estático): <https://www.netlify.com>

- Playlist sobre o Netlify: <https://www.youtube.com/watch?v=a1cIjP1bueM&list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth>

### Aula 40 - Apresentação do CMS do Strapi

#### Links úteis

- Repositório da Landing Page API (Strapi): <https://github.com/React-Avancado/landing-page-api>

### Aula 41 - Arquivos iniciais do Strapi

#### Links úteis

- Repositório da Landing Page API (Strapi): <https://github.com/React-Avancado/landing-page-api>

### Aula 42 - Fields do Strapi

#### Links úteis

## Módulo 2 (extra): Criando estrutura de dados para o CMS

### Aula 43 - Criando logo e componente de Header

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/7eea942dc0aaec2c3ed712d2cddc8fd026a3a314>

### 44 Criando Section About Project - Rich Text

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/f5d650bea40a41404dc15739f9b7b63b608e6019#diff-6891f1497d37c36624800d9ce838c3a9>

### 45 Criando Section Tech - Repeatable Component

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/f5d650bea40a41404dc15739f9b7b63b608e6019#diff-a9bb481b3cd5be590cbf4aa6a45395d6>

### 46 Criando Section Concepts

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/3f023ed1905faf3b47108be91162e394ab0cd810>

### 47 Criando Section Modules

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/33c76444eb48cd6114b9f04e609ff3c8b105bd2e>

### 48 Criando Agenda e Pricing Box - reutilizando componente já criado

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/d496dc28ca1c824c1deff3fadb93177695dcc71a>

### 49 Criando Collection Type para Authors

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/73e6eb738267838a501c5f661a2a4840b38ea7f2>

### 50 Adicionando campo faltante em Authors

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/bce92d8a6db8393d9068a38ba055cff871cfde66>

### 51 Criando relations (has many)

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/f9fedef24c66613eb4eca18075ec1ab102ab2d78>

### 52 Criando Section Reviews

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/6e752e9eb05ee7a00885d8e7a1f085d01ed573fd>

### 53 Criando Section FAQ

#### Links úteis

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/239a9f0975f1d2f405f730a898daa1426bc54064>

### 54 Atualizando Strapi para 3.0.6 (se já possuir essa versão ou maior, ignore)

#### Links úteis

- Release do Strapi 3.0.6: <https://github.com/strapi/strapi/releases/tag/v3.0.6>

- Migration Guides do Strapi: <https://strapi.io/documentation/developer-docs/latest/migration-guide>

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/69b8df08541b41b1cc549605c8f557586a947cca>

### 55 Adicionando um plugin customizado (CKEditor)

#### Links úteis

- Documentação sobre registrar um novo field: <https://strapi.io/documentation/developer-docs/latest/guides/registering-a-field-in-admin.html>

- Site oficial do CKEditor 5: <https://ckeditor.com/ckeditor-5>

- Código feito em aula: <https://github.com/React-Avancado/landing-page-api/commit/ba8a9d616c86919a4ad125e5d2aa4c30e51936af>

### 56 Importando e Exportando dados no PostgreSQL

#### Links úteis

- Documentaçãp dp pg_dump: <https://www.postgresql.org/docs/current/app-pgdump.html>

- Documentação do psql: <https://www.postgresql.org/docs/current/app-psql.html>

- Zip com uploads e dump: <https://github.com/React-Avancado/landing-page-api/blob/master/data.zip>

### 57 Permissões para rotas de Rest API
