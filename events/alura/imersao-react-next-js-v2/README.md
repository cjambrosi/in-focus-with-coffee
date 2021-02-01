# Imersão React Next.JS - 2ª Edição

Repositório da imersão: <https://github.com/alura-challenges/aluraquiz-base>

Sobre **Jamstack**: <https://jamstack.org>

Repositória da aplicação desenvolvida: <https://github.com/cjambrosi/jsz-quiz>

## Aula 01 - React, Next, Styled Components

No repositório do NextJS no GitHub, existe um grande quantidade de boilerplates para iniciarmos um projeto com determinadas configurações definidas. Exemplo com o Styled Components já configurado: [Example app with styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)

Plugin para Styled Components no VSCode: [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

Biblioteca de estilos semelhantes ao [Materialize](https://materializecss.com), para ReactJS: [Material-UI](https://material-ui.com)

Sobre Template Literals: [JavaScript: Template Literals & Tag Functions for Beginners](https://hackernoon.com/javascript-template-literals-tag-functions-for-beginners-758a041160e1)

Site da Vercel, onde é possível hospedar, realizar deploys entre coisas com o NextJS: <https://vercel.com>

### Sobre a aula

Nessa primeira aula de React vamos criar uma página inicial para você montar seu quiz personalizado e também já vamos colocá-la no ar!

Vamos usar **styled-components** para criar componentes com estilo (literalmente falando) e diversos recursos do **Next.js** para, entre outras ferramentas que vamos ver nas próximas aulas, dar o código inicial do projeto e gerar os arquivos de *build*. Enquanto isso, vamos descobrindo como o React funciona e quais suas partes principais.

Conteúdo detalhado dessa aula

- Iniciar um projeto com o boilerplate do React com Next.js e styled-components;
- Criar componentes React usando styled-components;
- Implementar tema (theme) para a interface;
- Fornecer as informações de tema e dados do quiz através de uma base de dados "mockada";
- Usaremos o Next.js para criar a tag `<head>` e as meta-infos necessárias;
- Faremos a publicação (deploy) na Vercel.

Além disso, não deixe de subir seu projeto no GitHub e publicá-lo na Vercel da forma que fizemos no vídeo.

> Após publicar seu projeto na Vercel, adicione no About do GitHub o endereço com o seu nome de user, nos Topics marque imersao-react, alura e aluraquiz e dê uma star no repositório do projeto!

Desafios dessa aula!

- Crie seu próprio tema festivo, por exemplo de Halloween;
- Utilize o protótipo do Figma (link abaixo) e crie o CSS "do zero";
- Desafio do Paulo: Implemente a meta tag og:image utilizando a mesma imagem do background;
- Desafio da Ju: Pensar em como passar da página inicial para a página de quiz.

Links importantes para você acompanhar a aula

- [Protótipo da interface no Figma](https://www.figma.com/file/cg1MIzSRRss8ggpypQbmdD/AluraQuiz?node-id=0%3A1)
- [Arquivo 'db.js'](https://github.com/alura-challenges/aluraquiz-base/blob/v1/db.json)
- [Código da Aula](https://github.com/alura-challenges/aluraquiz-base/tree/v1)
- [Gist com o CSS dos componentes usados na aula](https://github.com/alura-challenges/aluraquiz-base/pull/1/files)
- [Instale o NodeJS](https://nodejs.org/pt-br)
- [Exemplo Next.js com styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)
- [Next.js](https://nextjs.org)
- [styled-components](https://styled-components.com)
- [VSCode Styled Components - melhora a sintaxe do CSS no JS](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [Repositório do código final da aula 1](https://github.com/alura-challenges/aluraquiz-base/tree/v1)

Links citados nessa aula

- [Série Git e GitHub para sobrevivência](https://www.youtube.com/playlist?list=PLh2Y_pKOa4Uf-cUQOVNGlz_GVHx8QYoE6)
- [DOM e o que estudar antes de aprender React](https://www.youtube.com/watch?v=QzDjdlF1BQI)
- [VisualStudio Code: instalação, teclas de atalho, plugins e integrações](https://www.alura.com.br/artigos/visualstudio-code-instalacao-teclas-de-atalho-plugins-e-integracoes)
- [Exemplos de paleta de cores com MaterialUI](https://material-ui.com/customization/color)
- [Exemplos de paleta de cores com Adobe Color](https://color.adobe.com/trends)
- [Joguinho para treinar posicionamento com CSS Flexbox](https://flexboxfroggy.com/#pt-br)
- [O que são tagged functions](https://www.alura.com.br/artigos/tagged-template-literals)

Conteúdos extras

- [Features que fazem o Next.js valer a pena](https://www.youtube.com/watch?v=pb5yKjCW004)
- [Como é a infra por trás do build de um projeto React?](https://www.youtube.com/watch?v=LMCtGvLJT6c)
- [Como o React funciona? Implemente o seu](https://www.youtube.com/watch?v=5MzOCxSWrrc)
- [Criando uma Pokedex com Next.js](https://www.youtube.com/watch?v=c8mVlakBESE)
- [Styled Components, por onde começar? Os poderes do CSS in JS](https://www.youtube.com/watch?v=QdfjWRc4ySA)
- [CSS Reset](https://necolas.github.io/normalize.css)

## Aula 2 - Linter, Rotas e State

Instalar o ESLint somente para o ambiente de DEV:

> yarn add eslint --dev

- Se utilizar o **yarn** como gerenciador de pacote, é preferível excluir o arquivo **package-lock.json**, pois a *lib* do ESLint instala suas dependências com o **npm**, por esse motivo o arquivo é gerado. Excluido o arquivo, é preciso rodar comando `yarn install`.

Comandos adicionados no **package.json**:

```json
// File: package.json

"eslint:init": "eslint --init", // Inicializar o linter no projeto
"lint": "eslint ./ --fix" // Executar o linter na linha de comando para corrigir padrões de código
```

É possível rodar o **fix** do lint no VSCode. Para isso, precione o atalho `Ctrl + Shift + P` e digite o comando `eslint fix all auto`.

### Sobre a aula

Agora vamos ver como lidar com os estados (*states*) do React através dos *React hooks*, entender o que é uma SPA(Single Page Application), criar rotas dentro da nossa aplicação e evoluir nossos componentes.

Continuando a explorar as possibilidades do Next.js, vamos criar novas páginas dentro da nossa SPA e utilizar a ferramenta *next/router* para fazer o gerenciamento das rotas entre elas e também organizar e separar os componentes que estamos criando.

Conteúdo detalhado dessa aula

- Instalar e rodar o Eslint, biblioteca de linting para JS;
- Entender o que é uma SPA;
- Criar componentes complexos com styled-components;
- Utilizar props com os componentes;
- Capturar de eventos em formulários (como clique);
- Gerenciar estado (*state*) de componentes com hooks;
- Passar dados em URLs através de query params;
- Utilizar *next/router* para implementação de rotas;

Desafios dessa aula!

- Configurar as regras de linting no arquivo .eslintrc
- Implementar o input e o botão com styled-components, como no protótipo do Figma
- Pegar o nome passado no query param da URL e exibir na tela
- Reutilizar o componente Widget para fazer a tela /quiz
- Investigar os imports com { } e a estrutura de tupla ([ , ])

Links importantes para você acompanhar a aula

- [fonte Lato no Google Fonts](https://fonts.google.com/specimen/Lato?query=lato)
- [Arquivos que foram alterados nessa aula](https://github.com/alura-challenges/aluraquiz-base/pull/64/files)
- [Código completo da Aula 02](https://github.com/alura-challenges/aluraquiz-base/tree/v2) não esqueça de clicar na estrela do repo!

Links citados nessa aula

- [Babel](https://babeljs.io)
- [Vídeo sobre React Router](https://www.youtube.com/watch?v=4Tb8dp5GYqI)
- [ESLint](https://eslint.org)
- [Plugin do ESLint para Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Conteúdos extras

- [Destructuring em JavaScript](https://www.youtube.com/watch?v=f8a-qwKC5yk)
- [Colocando animações nas suas apps com Lottie](https://www.youtube.com/watch?v=dZH9aDX8T-0&list=PLTcmLKdIkOWnB8M6jEtg22yiTl3xSZHtZ)
- [Efeito de desenhar com CSS](https://www.youtube.com/watch?v=4cEMgap9wpk&t)
- [Konami Code com JavaScript](https://www.youtube.com/watch?v=6KS4t97yMlI)
- [Dicas para validar ideias com JavaScript](https://www.youtube.com/watch?v=mGXPon0H-Ks)

## Aula 3 - Inputs e página de Quiz

Instalar lib para ajudar a saber com que tipos de dados se está trabalhando (que lembre tipagem):

> yarn add prop-types

### Sobre a aula

Nesta aula vamos reforçar um dos temas principais do React: o gerenciamento de estados e do ciclo de vida dos componentes. Alterando estados e identificando para momento deste ciclo, é possível atualizar cada componente, alterar os componentes da tela e adicionar efeitos.

Para isso, vamos associar as ferramentas do React (*hooks*, componentes e JSX) à lógica do JavaScript moderno para carregar as questões e alternativas do nosso quiz.

Conteúdo detalhado dessa aula

- Criar o componente `<Input>`
- Trabalhar com as propriedades (props) dos componentes
- Garantir a tipagem das propriedades com a biblioteca prop-types
- Criar a página de quiz e seus componentes
- Criar componente `<LoadingWidget>` a partir do `<Widget>`
- Exibir as perguntas e alternativas na tela a partir do arquivo db.json
- Criar formulários para gerenciar as alternativas
- Trabalhar com os estados (*states*) da página de quiz para alternar carregamento, questões e resultado
- Entender o ciclo de vida dos componentes do React
- Utilizar *useEffects()* para adicionar ações ao componente da tela de quiz

Desafios dessa aula

- Desafio do Mario: Fazer a seleção das alternativas funcionar (no modo easy com alert() ou no modo hard com mudança de state)
- Desafio do Paulo: Traga suas questões de JavaScript, de Java, de PHP ou do que mais quiser e vamos trocar conhecimento!
- Desafio da Ju: Comece a pensar na lógica por trás do quiz. Contagem de pontos? Como e quando finalizar o jogo? Quem ganha ou perde?

Links importantes para você acompanhar a aula

- [Gist com o CSS dos componentes usados na aula](https://github.com/alura-challenges/aluraquiz-base/pull/103/files)
- [Repositório do código final da aula 3](https://github.com/alura-challenges/aluraquiz-base/tree/v3)

Links citados nessa aula

- [Documentação do React sobre checagem de tipos - em português!](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html)
- [Link da biblioteca prop-types no NPM](https://www.npmjs.com/package/prop-types)

Conteúdos extras

- [Desmistificando o Redux](https://www.youtube.com/watch?v=DbEpBeZ6yic)

## Aula 4 - Quiz, Pontuação e Integrações com Next.js

Com NextJS, é possível criar uma pasta chama de **api** (em pages) e criar uma função Lambda que retorna um **response** de um arquivo JSON salvo dentro do projeto, que pode ser consumida. Por exemplo: `http://localhost:3000/api/db`.

### Sobre a aula

Hora de finalizar a página de quiz, com todos os passos necessários para jogar: selecionar a alternativa, receber feedback na tela em caso de erro ou acerto, contagem de pontos e exibição da tela de resultados.

Durante o desenvolvimento, vamos ver mais sobre o funcionamento das props, como trabalhar com mais de uma instância do mesmo componente na tela, pensar na lógica para capturar cliques, tratar os resultados e engatilhar mudanças de estado a cada ação do usuário.

Para que você possa publicar seu quiz e divulgar outros quizzes na tela, vamos começar com as ferramentas do Next.js para criação de *endpoints* e manejo de requisições e respostas.

Conteúdo detalhado dessa aula

- Criar o componente `<Input>`
- Desenvolver o algoritmo de seleção de alternativa para cada pergunta
- Statements x expressões no React
- Ver mais sobre props do React e a prop *key*
- Manejo de estados com a renderização de várias instâncias de um mesmo componente
- Lógica da seleção de alternativas, habilitação do botão e troca de pergunta (utilizando estados, atributos do HTML e índices da array)
- Lógica da contagem de pontos com alteração de estado
- Atualização dos pontos com o ciclo de atualização do React
- Exibir a tela de resultados com a soma dos pontos e as alternativas escolhidas ao final das perguntas
- Usar atributo data-[] para passar informações de estilo para o componente das alternativas
- Criar *lambda servers* com Next.js para retornar *endpoints*
- Passar configurações de CORS para poder acessar quizes externos

Desafios dessa aula!

- Desafio do Paulo: Resolver a contagem de pontos utilizando um *bitset* (ou bitmap)!
- Mais um desafio do Paulo: Publique seu quiz na Vercel e faça barulho nas redes, tageando o @rauchg!
- Desafio da Ju: Pegue o *query param name* e exiba o nome da pessoa que está jogando na tela de resultados. **Dica: o Next.js tem uma lib pra te ajudar nisso!**

Dica para resolver o desafio dos quizes da galera. Vamos deixar aqui um trecho de código para te ajudar a resolver este desafio:

```javascript
<ExternalQuizList hasName={hasName}>
    {db.external.map((url) => {
        const prepareUrl = url
            .replace(/\//g, '')
            .replace('https:', '')
            .replace('.vercel.app', '');

        const [repoName, user] = prepareUrl.split('.');
        return (
            <li key={url}>
                <Widget.Topic href={`/quiz/${user}__${repoName}?name=${name}`}>
                    {`${user}/${repoName}`}
                </Widget.Topic>
            </li>
        );
    })}
</ExternalQuizList>
```

- A implementação por enquanto fica com você! A resposta deste desafio vem com a próxima (e última) aula!

Links importantes para você acompanhar a aula

- [Gist com o CSS dos componentes usados na aula](https://github.com/alura-challenges/aluraquiz-base/pull/177/files)
- [Repositório do código final da aula 4](https://github.com/alura-challenges/aluraquiz-base/tree/v4)
- [Código que usamos para criar o endpoint api/db](https://github.com/alura-challenges/aluraquiz-base/blob/aula04/pages/api/db.js)

Links citados nessa aula

- [Post do Soutinho sobre Fetch API](https://medium.com/@omariosouto/entendendo-como-fazer-ajax-com-a-fetchapi-977ff20da3c6)
- [Vídeo do Soutinho sobre array.reduce()](https://www.youtube.com/watch?v=O_bSjsLga48)

Como compartilhar seu quiz

Você pode, depois do deploy, simplesmente marcar a gente e também usar as hashtags *#ImersaoReact* e *#alura*. Mas quer fazer melhor? Você pode usar [esse plugin do Chrome](https://chrome.google.com/webstore/detail/screencastify-screen-vide/mmeijimgabbpbgpdklnllpncmdofkcpn) para gravar o seu site em ação, scrollar e mostrar efeitos especiais e ainda passear pelo seu código quando ele estiver interessante.

Poste no seu Instagram, Linkedin, Twitter ou Facebook e não esqueça de marcar *#ImersaoReact*, @aluraonline e nosso time para que a gente deixe um comentário e, quem sabe, você apareça nos extras das aulas!

## Aula 5 - Páginas dinâmicas, animações e Lottie

Instalar a biblioteca do Framer Motion:

> yarn add framer-motion

Site de animações: <https://lottiefiles.com>

Site muito bacana que explica os status de respostas do HTTP: <https://httpstatusdogs.com>

### Sobre a aula

Chegamos ao final desta Imersão! Para fechar, vamos usar os poderes do Next.js para criar conteúdos dinâmicos a partir de templates e fazer o gerenciamento destas páginas. Para arrematar, as animações com Framer Motion vão dar movimento para a montagem dos componentes.

Conteúdo detalhado dessa aula

- Listar endereços dos quizes da galera na página principal, a partir do arquivo db.json
- Reaproveitar o componente de Widget
- Acrescentar botões para os quizes da galera
- Criar rotas com parâmetros dinâmicos com Next.js
- Usar métodos de otimização por SSR para criar páginas dinâmicas
- Trabalhar com promessas utilizando a [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) e Promises
- Organizar o projeto com a pasta screens para definir leiautes de páginas
- Passar para a página de quiz as props dos quizes externos
- Usar o componente `<Link>` do Next.js para fazer a navegação no formato SPA
- Usar o [Framer Motion](https://www.framer.com/motion) para criar animações de entrada para os widgets

Desafios dessa aula!

- Desafio do Paulo: Refatorar a expressão regular que usamos para customizar os *links* dos quizes externos nos botões, para que funcionem em todos os *corner cases*.
- Desafio do Soltinho: Reaproveitar os componentes da página de quiz para montar a página do quiz externo.
- Desafio de Ju: Deixar os botões para os quizes da galera desabilitados enquanto o usuário não preencher o nome no input.

Links importantes para você acompanhar a aula

- [Gist com o CSS dos componentes usados na aula](https://github.com/alura-challenges/aluraquiz-base/pull/270/files)
- [Repositório do código final da aula 5](https://github.com/alura-challenges/aluraquiz-base/tree/v5)
- [Framer Motion](https://www.framer.com/motion)

Os quizes que a Alura e o DevSoutinho fizeram pra você se inspirar <3

- <https://aluraquiz-base.alura-challenges.vercel.app>
- <https://aluraquiz-css.omariosouto.vercel.app>
- <https://aluraquiz-devsoutinho.omariosouto.vercel.app>
- PS: Eles já estão usando o Lottie! Confere os códigos fonte
  - <https://github.com/crello/react-lottie/blob/master/example/src/LottieBasic.tsx>
  - <https://github.com/alura-challenges/aluraquiz-base/blob/main/src/screens/Quiz/index.js#L63>

Links citados nessa aula

- [Live sobre JAM Stack na Hipsters.Talks #35](https://www.youtube.com/watch?v=9E2xlG-m9Gs)
- [JavaScript replace: manipulando Strings e regex](https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex)
- [Post/vídeo sobre Node/threads ou algo assim 39:10](https://www.alura.com.br/imersao-react-next-js/LINKAQUI)
- [Vídeo: animações com Lottie](https://www.youtube.com/watch?v=dZH9aDX8T-0)

## Live - Consumindo APIs com NextJS e React

Link da Live: <https://www.youtube.com/watch?v=LLFOpH3bECU>

Dev em T da Aluar: <https://www.alura.com.br/dev-em-t>

Endpints API pública do GitHub: <https://docs.github.com/pt/rest/overview/endpoints-available-for-github-apps>

Ler sobre: **Kiss** (Keep it simple stupid)

```javascript
fetch('https://api.github.com/users/cjambrosi')
.then((respostaDoServidor) => { // Aqui o navegador ainda não carregou todo o conteúdo, somente sabe que bateu no servidor e recebeu uma resposta (200 ou 404). Ou tbm usar o async, daí não precisa do segundo then.
    return respostaDoServidor.json();
})
.then((respostaDoConvertida) => { // Aqui já é possível obter o conteúdo
    console.log(respostaDoConvertida);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('Passou na Caixa!');
});
```
