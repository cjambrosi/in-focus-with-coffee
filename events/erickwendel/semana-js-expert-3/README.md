# Semana JS Expert 3.0 <!-- omit in toc -->

## Sumário <!-- omit in toc -->

- [Publicar o *server* no Heroku](#publicar-o-server-no-heroku)
  - [Criar o projeto via terminal no Heroku](#criar-o-projeto-via-terminal-no-heroku)
  - [Excuir o App do Heroku](#excuir-o-app-do-heroku)
- [Publicar o *client* como pacote do NPM](#publicar-o-client-como-pacote-do-npm)
  - [Criar um comando executável global na máquina](#criar-um-comando-executável-global-na-máquina)
  - [Subindo para o NPM](#subindo-para-o-npm)
  - [Instalar o *client* como um pacote normal do NPM](#instalar-o-client-como-um-pacote-normal-do-npm)
  - [Remover o pacote do site NPM](#remover-o-pacote-do-site-npm)

## Publicar o *server* no Heroku

No diretório "server", é necessário inicializar o repositório Git:

> git init

Comite todos os arquivos.

### Criar o projeto via terminal no Heroku

Instalar o CLI do Heroku globalmente:

> npm i -g heroku

Agora é preciso logar no Heroku:

> heroku login

Verficar os Apps existentes na conta:

> heroku apps

Criar o App no Heroku:

> heroku apps:create hacker-chat-cja

Será criado um repositório Git remoto no Heroku e adiconado um *remote* na máquina local (tipo o GitHub).

Também retornará uma URL para acessar o App.

> <https://hacker-chat-cja.herokuapp.com>

Verificar a *origin* do repositório:

> git remote -v

Subir o projeto para o repositório no Heroku:

> git push heroku master

Feitor isso, será realizado um deploy automático pelo Heroku.

Abrir o App na URL gerada:

> heroku open

Verificar os logs do App:

> heroku logs -t

Qualquer nova requisição será mostrada.

### Excuir o App do Heroku

Para remover remotamente o App, use:

> heroku apps:delete

Depois será solicitado o nome do App. Neste caso:

> hacker-chat-cja

Verifique se o App realmente foi excluido com:

> heroku apps

## Publicar o *client* como pacote do NPM

Site do NPM: <https://www.npmjs.com>

Antes é preciso tornar o `index.js` do client, em um executável.

No `index.js`, é preciso especificar onde o NodeJS está localizado. Para o nosso caso, será utilizado o padrão de sistemas Unix, onde funcionará somente em sistemas Linux, no WSL do Windows ou em terminais que entendam esses comandos do Linux. Abra o arquivo e na primeira linha defina o path:

```javascript
#!/usr/bin/env node
```

É precisar dar permissão para que o `index.js` seja um arquivo executável:

> chmod +x index.js

### Criar um comando executável global na máquina

Abra o arquivo `package.json` e insira a seguinte propriedade:

```json
"bin": {
  "hacker-chat": "index.js"
},
```

Agora após a instalação do pacote, é possível rodar utilizando `hacker-chat` no terminal.

Ainda no arquivo `package.json`, na propriedade **name** altere para o nome do seu usuário no site do NPM em conjunto com o nome do pacote que será criado. Exemplo:

```json
{
  "name": "@cjambrosi/hacker-chat-client",
```

### Subindo para o NPM

Logo na sua conta NPM pelo terminal:

> npm login

Informe o seu usuário e senha com o e-mail.

Feito isso, é já é possível publicar o pacote com o comando:

> npm publish --access public

Retornará o nome do pacote como deve ser instalado pelo NPM.

### Instalar o *client* como um pacote normal do NPM

Para instalar o pacote de forma global:

> npm i -g @cjambrosi/hacker-chat-client

Comando para executar o chat:

> hacker-chat --username cjambrosi --room sala01

Onde:

- **--username:** Usuário do novo participante do chat;
- **--room:** Sala onde esse usuário entrará;
- **--hostUri:** Opcional, endereço do servidor. Pode ser o localhost.

### Remover o pacote do site NPM

Remover o pacote global da máquina:

> npm unlink -g nome-do-pacote

Remover do site:

> npm unpublish --force
