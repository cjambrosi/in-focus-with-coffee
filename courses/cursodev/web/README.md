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
  - [Client e Server](#client-e-server)
  - [Hospedagem e Deploy](#hospedagem-e-deploy)

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

### Client e Server

{ ... }

### Hospedagem e Deploy

Vercel: <https://vercel.com>
