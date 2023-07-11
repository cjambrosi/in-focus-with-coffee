# Aulas /Web <!-- omit in toc -->

[Curso.dev](https://curso.dev 'curso.dev')

## Sumário <!-- omit in toc -->

- [Dia 1](#dia-1)
  - [Bem vindo(a)](#bem-vindoa)
  - [Como estão organizadas as aulas?](#como-estão-organizadas-as-aulas)
  - [Pista Rápida e Pista Lenta](#pista-rápida-e-pista-lenta)
- [Dia 2](#dia-2)
  - [Pista Rápida: Dia 2](#pista-rápida-dia-2)
  - [Git? GitHub? É tudo a mesma coisa?](#git-github-é-tudo-a-mesma-coisa)
  - [Repositório: onde tudo começa](#repositório-onde-tudo-começa)
  - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
  - [Codespaces](#codespaces)
- [Dia 3](#dia-3)
  - [Pista Rápida: Dia 3](#pista-rápida-dia-3)
  - [A fundação](#a-fundação)
  - [A primeira parede](#a-primeira-parede)
- [Dia 4](#dia-4)
  - [Pista Rápida: Dia 4](#pista-rápida-dia-4)
  - [Protocolos e rodando o site de forma local](#protocolos-e-rodando-o-site-de-forma-local)
  - [Página inicial](#página-inicial)
  - [Um desafio importante](#um-desafio-importante)
- [Dia 5](#dia-5)
  - [Pista Rápida: Dia 5](#pista-rápida-dia-5)
  - [Onde fica o "Git"? E como era feito antes disso?](#onde-fica-o-git-e-como-era-feito-antes-disso)
  - [Git Log (e o Jogo dos 7 Erros)](#git-log-e-o-jogo-dos-7-erros)
  - [Git Commit (e a Escada Infinita)](#git-commit-e-a-escada-infinita)
  - [Git Diff e Amend (e a Viagem no Tempo)](#git-diff-e-amend-e-a-viagem-no-tempo)
- [Dia 6](#dia-6)
  - [Pista Rápida: Dia 6](#pista-rápida-dia-6)
  - [Git Push](#git-push)
  - [Fazendo commits de forma mais rápida](#fazendo-commits-de-forma-mais-rápida)
  - [Git Push De Novo (mas agora com ainda mais "força")](#git-push-de-novo-mas-agora-com-ainda-mais-força)
- [Dia 7](#dia-7)
  - [Pista Rápida: Dia 7](#pista-rápida-dia-7)
  - [Client e Server](#client-e-server)
  - [Hospedagem e Deploy](#hospedagem-e-deploy)
  - [Fazendo novos Deploys](#fazendo-novos-deploys)
  - [Encerramento do Desafio (Resultados de todo mundo) 🎉](#encerramento-do-desafio-resultados-de-todo-mundo-)
- [Pitstop](#pitstop)
  - [Se você puder ajudar, eu agradeço muito 🤝](#se-você-puder-ajudar-eu-agradeço-muito-)
- [Dia 8](#dia-8)
  - [Pista Rápida: Dia 8](#pista-rápida-dia-8)
  - [Programação "Orgânica" versus "Impressora 3D"](#programação-orgânica-versus-impressora-3d)
  - [Por que meus projetos sempre dão certo?](#por-que-meus-projetos-sempre-dão-certo)
- [Dia 9](#dia-9)
  - [Pista Rápida: Dia 9](#pista-rápida-dia-9)
  - [Qual o “segredo” para organização de tarefas?](#qual-o-segredo-para-organização-de-tarefas)
  - [Como peitar projetos de qualquer tamanho?](#como-peitar-projetos-de-qualquer-tamanho)
  - [Criando a primeira Milestone e Issues do Projeto](#criando-a-primeira-milestone-e-issues-do-projeto)
- [Dia 10](#dia-10)
  - [Pista Rápida: Dia 10](#pista-rápida-dia-10)
  - [Uma história macabra sobre "Estilização de Código"](#uma-história-macabra-sobre-estilização-de-código)
  - [Sincronização das configurações do Editor](#sincronização-das-configurações-do-editor)
  - [Configurar o EditorConfig](#configurar-o-editorconfig)
  - [Configurar o Prettier](#configurar-o-prettier)
  - [Extra: Configurar o Prettier Ignore](#extra-configurar-o-prettier-ignore)

## Dia 1

Figma:

Repositório do Projeto:

### Bem vindo(a)

{ ... }

### Como estão organizadas as aulas?

{ ... }

### Pista Rápida e Pista Lenta

{ ... }

## Dia 2

### Pista Rápida: Dia 2

{ ... }

### Git? GitHub? É tudo a mesma coisa?

{ ... }

### Repositório: onde tudo começa

{ ... }

### Ambiente de Desenvolvimento

{ ... }

### Codespaces

{ ... }

## Dia 3

### Pista Rápida: Dia 3

{ ... }

### A fundação

"Se você deseja fazer uma torta de maçã do zero, você deve, primeiro, criar o universo." - Carl Sagan

Arquivos que terminam com **rc**, como por exemplo `.bashrc`, `.nvmrc`, `vimrc` e `npmrc`. Significam arquivos **Run Commands**, convesão para arquivos de scripts que possuem instruções de inicialização.

Se quiser padronizar a versão do Node.js em projeto, é preciso criar um arquivo chamado de `.nvmrc` e informar a versão do Node.js. Possuindo o NVM instalado, é só executar o comando:

> nvm install

### A primeira parede

Sobre Paralisia por análise: <https://pt.wikipedia.org/wiki/Paralisia_por_an%C3%A1lise>

## Dia 4

### Pista Rápida: Dia 4

{ ... }

### Protocolos e rodando o site de forma local

Protocolo nadas mais é que um tipo de acordo de transferência entre as duas partes conectadas. Ditando como será inciaciado, como terminará e etc...

Alguns protocolos:

- HTTP (Hypertext Transfer Protocol): Protocolo que define regras para transferências de documentos.
- FTP (File Transfer Protocol): Destinado para transferência de arquivos.
- SMTP (Simple Mail Transfer Protocol): Um dos padrões utilizados para transferência de mensagens de e-Mail.

Ler sobre o protocolo **UDP**. Bastante utilizado em jogos online e video chamadas. Pois não possui a camada TCP (checagem de pacotes) e compensa essa perda com outras formas.

Camada                       | Protocolos
---------------------------- | ------
7 - Camada de Aplicação      | HTTP, FTP, SMTP, DNS, DHCP
6 - Camada de Apresentação   | TLS, SSL, SSH, MPEG
5 - Camada de Sessão         | NetBIOS, RPC, SIP
4 - Camada de Transporte     | TCP, UDP
3 - Camada de Rede           | IP, ICMP, ARP
2 - Camada de Enlace de Dado | Ethernet, Wi-Fi, Bluetooth
1 - Camada Física            | Cabos, sinais elétricos, ondas de rádio

Vídeo da diverença entre UDP e TPC: <https://youtu.be/ZEEBsq3eQmg>

### Página inicial

{ ... }

### Um desafio importante

{ ... }

## Dia 5

### Pista Rápida: Dia 5

{ ... }

### Onde fica o "Git"? E como era feito antes disso?

{ ... }

### Git Log (e o Jogo dos 7 Erros)

Comando para mostrar mais detalhes do log (Onde o Git tem salvo no seu "banco de dados" localizado no diretório `.git`):

> git log --stat

Comando para listar os logs de forma resumida:

> git log --oneline

### Git Commit (e a Escada Infinita)

{ ... }

### Git Diff e Amend (e a Viagem no Tempo)

Comando para editar o último commit feito:

> git commit --amend

Citação sobre o caracteter de quebra de linha:

> Uma vez perguntei para um programador sobre esse caracter invisível Cbr(10) (\n), o mesmo me disse isso que é um "retorno de carro". Como assim um retorno de carro?!
>
> Ele me deu uma explicação com a seguinte analogia: No nosso tempo existia a Máquina de Escrever, sim a Máquina de Escrever, que para mim é a primeira máquina wireless, então digitando, ou melhor datilografando ao chegar no final de cada linha era preciso puchar uma alavanca para que o "carro" retrocedesse para assim comerçarmos uma nova linha... daí a expressão "retorno de carro"

## Dia 6

### Pista Rápida: Dia 6

{ ... }

### Git Push

{ ... }

### Fazendo commits de forma mais rápida

{ ... }

### Git Push De Novo (mas agora com ainda mais "força")

{ ... }

## Dia 7

### Pista Rápida: Dia 7

{ ... }

### Client e Server

{ ... }

### Hospedagem e Deploy

Vercel: <https://vercel.com>

### Fazendo novos Deploys

**Principle of Least Privilege** (Princípio do Menor Privilégio ou Princípio do Privilégio Mínimo): Para uma maior segurança de sistemas é recomendado a menor quantidade de acessos, credências ou privilégios que uma conta pode possuir dentro do sistemo. Onde tudo pode se tornar um vetor para tipos de ataques, como ataques por falhas técnicas e engenharia social (elo mais fraco). Então, só habilite para uma determinda conta no sistema somente funcionaldiades realmente necessárias, incluindo sistemas de integração (GitHub, Vercel, Jenkins, pagamentos e etc).

### Encerramento do Desafio (Resultados de todo mundo) 🎉

{ ... }

## Pitstop

### Se você puder ajudar, eu agradeço muito 🤝

{ ... }

## Dia 8

### Pista Rápida: Dia 8

> Senioridade não vem exclusivamente de conhecimentos técnicos. Uma pessoa somente com conhecimentos técnicos é um especialista e independente de quanto esse especialista sabe sobre um assunto, ele tem suas inseguranças e dificuldades.

### Programação "Orgânica" versus "Impressora 3D"

Perder o controle dos dois pontos a baixo, aumentam as chances do projeto sucumbir.

**Over Engineering**: Complicar demais algo que poderia ter cido programada mais simples.

**Feature Creep**: Quando um projeto possui tantos recursos que mais atrapalha do que ajuda.

### Por que meus projetos sempre dão certo?

**Moral**: O mundo é difícil, as coisas são difíceis, quanto com menos moral você encarar o mundo (triste), mas difícil ainda ficará o mundo. Ou seja, dependo de qual o seu ponto de vista para encarar o mundo, onde existe o fato que aconteceu que não pode ser alterado (escolher mudar o que aconteceu) e a forma como interpretamos o que aconteceu, onde é possível mudar ou escolhermos a forma de interpretar. Escolher não sofrer mais do que a dor da própria realidade. Exemplo: Escolherme interpretar o que aconteceu como um curso, para aprender com o fato.

**Prática**: "One man's trash is another man's treasure" ou "O lixo (inútil) de uns é o tesouro de outros". Tome cuidade quando alguém disser que algo que vocês está fazendo, estudando, construindo ou falando é um lixo, pois no mundo dessa pessoa pode realmente ser um lixo, porém para muitas outras pode ser um tesouro, inclusive para você mesmo. Por isso é desastraso querer viver nas espectativas do mundo de outras pessoas e extremamente podero quando dentro de vocês está super alinhado. Estoicismo.

## Dia 9

### Pista Rápida: Dia 9

{ ... }

### Qual o “segredo” para organização de tarefas?

Nível 1: Ser lembrado individualmente. Utilizar post-it, folhas ou ferramentas para criar lista de tarefas.

Nível 2: Ser lembrado em grupo. Quadros Kanban, marcar progresso com linha do tempo.

Nível 3: Expandir conhecimento. Trello, GitHub, Jira e etc. Software para gerenciar tarefas do nível 2.

Nível 4: Gerar métricas. Mensurar produtividades das pessoas trabalhando nas tarefas.

- Nota: Muitas vezes, alguns gestores se esforçam muito mais para mensurar quantas das barreira técnicas uma pessoa está pulando, ao invés de mensurar as barreira de negócio um produto ou serviço está conseguindo pular. Quando um gestor se perde nisso e começa a usar a mensuração com fim ao invés de um meio (onde é contratado para fazer a gestão das tarefas e vive disso), é preciso tomar cuidado, pois pode se configuar em um insentivo desalinhado e isso pode se tornar truculento.

### Como peitar projetos de qualquer tamanho?

{ ... }

### Criando a primeira Milestone e Issues do Projeto

{ ... }

## Dia 10

### Pista Rápida: Dia 10

{ ... }

### Uma história macabra sobre "Estilização de Código"

{ ... }

### Sincronização das configurações do Editor

{ ... }

### Configurar o EditorConfig

Por padrão o VSCode não entende o arquivo `.editorconfig`. Para que ele possa entender, é preciso instalar o plugin [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

Dica para destacar palavras no comando de commit, adicionar crase na palavra (usar áspas simples). Exemplo: `git commit -m 'feat: this is `example`'`

### Configurar o Prettier

Instalar o [Prettier](https://prettier.io) no projeto:

> npm i prettier -D

Adicionar os dois comandos a baixo no arquivo `package.json` em "scripts":

```bash
"lint:check": "prettier --check .",
"lint:fix": "prettier --write ."
```

Configurar o VSCode:

- Instalar o plugin [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) no VSCode;
- Nas configuração do VSCode:
  - Editor: Default formatter = Prettier Code formatter;
  - Editor: Format On Save = Habilitar;
  - Files: Auto Save = Off;

### Extra: Configurar o Prettier Ignore

Na raix do projeto, criar o arquivo `.prettierignore` e adicionar o diretório `.next`.
