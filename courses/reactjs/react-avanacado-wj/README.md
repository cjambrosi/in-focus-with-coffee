# React Avançado: Crie aplicações com NextJS, GraphQL e mais <!-- omit in toc -->

[Udemy Link](https://www.udemy.com/course/react-avancado/ 'React Avançado: Crie aplicações com NextJS, GraphQL e mais')

- [Módulo 1: Introdução Teórica](#módulo-1-introdução-teórica)
  - [Aula 3 - Introdução ao NextJS](#aula-3---introdução-ao-nextjs)
  - [Aula 4 - Introdução ao GraphQL](#aula-4---introdução-ao-graphql)
    - [Rest API x GraphQL](#rest-api-x-graphql)
  - [Aula 5 - Introdução ao GraphQL Clients](#aula-5---introdução-ao-graphql-clients)
  - [Aula 6 - Introdução ao Strapi - Headless CMS](#aula-6---introdução-ao-strapi---headless-cms)
    - [Headless CMS](#headless-cms)
    - [Strapi](#strapi)
    - [Como o Strapi funciona](#como-o-strapi-funciona)
  - [Aula 7 - Introdução ao CSS-in-JS](#aula-7---introdução-ao-css-in-js)
  - [Aula 8 - Introdução a Testes de Software](#aula-8---introdução-a-testes-de-software)

## Módulo 1: Introdução Teórica

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

### Aula 8 - Introdução a Testes de Software

Slides: <https://docs.google.com/presentation/d/1togS6dJDG514q_bT6Atsfa6ogMMyoTCGUuJt48I4gCg/edit#slide=id.g8565c632f8_0_0>