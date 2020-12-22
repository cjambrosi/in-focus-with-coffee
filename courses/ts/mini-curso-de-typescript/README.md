# Mini-curso de TypeScript <!-- omit in toc -->

> Se você sabe JavaScript, você sabe TypeScript. A diferença é que é preciso aprender a tipar.

Link da Playlist: <https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_>

## Sumário <!-- omit in toc -->

- [Sobre o TypeScript](#sobre-o-typescript)
- [Por que usar TypeScript](#por-que-usar-typescript)
- [Desvantagens do TypeScript](#desvantagens-do-typescript)
- [Alguns Mitos do TypeScript](#alguns-mitos-do-typescript)
- [Instalando o compilador e escrevendo primeiro código](#instalando-o-compilador-e-escrevendo-primeiro-código)
- [Como criar os Types ou Tipos](#como-criar-os-types-ou-tipos)
  - [Type Inference ou Inferência de Tipo](#type-inference-ou-inferência-de-tipo)
  - [Aliases e Union](#aliases-e-union)
  - [Type Aliases com Intersection](#type-aliases-com-intersection)
- [Classes](#classes)
  - [Herança - Estender uma Classe](#herança---estender-uma-classe)
  - [Modifiers (Public, Private, Protected, Readonly)](#modifiers-public-private-protected-readonly)
  - [Acessors (Get e Set)](#acessors-get-e-set)
  - [Abstract Class](#abstract-class)
- [Interfaces](#interfaces)
  - [Type Alias vs Interfaces](#type-alias-vs-interfaces)
- [Generics](#generics)
- [Type Utilities](#type-utilities)
- [Decorators](#decorators)

## Sobre o TypeScript

TypeScript é:

- Um **superset** do JavaScript: Adiciona novas **features** ao JavaScript.

- Basicamente **tipagem estática** dentro do JavaScript, onde possui tipagem dinâmica.

- Tipagem Estática: Quando definimos o tipo de nossas variáveis, retornos de função e etc, antes mesmo da compilação do código, ou seja, determinamos os tipos e um processo de compilação irá verificar o código se de fato os tipos estão corretos, de acordo como definimos.

- No final, o TypeScript irá compilar (transpilar, na verdade) para JavaScript para poder ser interpretado. Diferente de aplicações como o **Deno** que roda nativamente o TypeScript.

- Permite adoção gradual (arquivos **.ts** convivem com **.js**), ou seja, é possível ter arquivos TypeScript "convivendo" com JavaScript, pois como mencionado o TypeScript é somente um superset do JavaScript.

Então, é **linguagem de programção** ou não?

Uns consideram e outros não, porém antigamente o C++ também era considerado só um superset da linguagem C e hoje em dia niguém mais fala isso.

## Por que usar TypeScript

Evita resultados inesperados.

Como JavaScript é dinâmico, podemos atribuir variaveis de um tipo ou de outro dentro do mesmo código, havendo retornos inesperados. Aliás, a própria forma do JavaScript funcionar retorna coisas inesperadas.

```javascript
function sum() {
    return a + b
}

sum(1, 2) // 3
sum('1', '2') // 12 opa!
```

Avisa se estiver fazendo algo errado.

Por exemplo, dividir um valor por um array:

```typescript
console.log(4 / [])
// The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type. ts(2363)
```

Já funciona como uma espécie de documentação.

A partir dos *types*, é possível saber os tipos de valores permitidos por um atributo, por exemplo.

```typescript
type Platform = 'Windows' | 'Mac OS' | 'Linux'
type Feature = 'Single Player' | 'Mulitplayer' | 'Co-op'

interface GameDetails {
    id: string
    title: string
    description: string
    platforms: Platform[]
    features: Feature[]
}
```

Deixa a IDE extramamente poderosa. Definindo o tipo da variável, a IDE consegue mostrar toda a documentação do que posso utiliza, isso é, irá me mostrar todas os métodos que posso utilizar ou autocompletar.

## Desvantagens do TypeScript

1. Com execessão do Deno, por exemplo, necessita ser compilado (mais passos no tooling)

2. Aprendizagem inicial dos tipos e boas práticas

3. Erros nem sempre são muito claros ou então muito grandes

## Alguns Mitos do TypeScript

**Vout ter que aprender tudo de novo!:** *Não!* TypeScript é o JavaScript, porém com tipos. Se você já sabe JavaScript, então você já sabe TypeScript, somente alguns detalhes terão de ser aprendidos, como os tipos, interfaces, generics, nada diferente de outras linguagens, inclusive.

**Vou precisar reescrever tudo para TypeScript:** *Não!* É possível fazer a adoção gradualmente, pois é possível trabalhar tanto com JavaScript quando com TypeScript no mesmo projeto. Uma forma inteligente de fazer isso, é quando for necessário escrever um novo código ou arquivo do projeto, já escrevê-lo em TypeScript. O mesmo vale para um arquivo já existente que será mexido, convertê-lo de JavaScript para TypeScript.

**Já escrevo testes, não preciso disso:** *Não!* Existem alguns casos em que os testes não irão "pegar", o TypeScript dará essa segurança a mais.

**Só funciona com Programação Orientada a Objeto:** *Não!* Quando o TypeScript começou era muito fundamentado nas ideias do dotNet/C#, que é Orientado a Objeto. Porém, o TypeScript funciona muito bem com Programação Funcional.

**Verboso demais, precisa tipar tudo:** *Não!* De fato é preciso escrever um pouco a mais, já que é preciso definir os tipos, mas isso não necessariamente quer dizer que é preciso definir um tipo para tudo. O TypeScript possui **inferência**, onde ele já sabe o que é um determinado resultado, retorno ou variável.

**Só serve para projeto grande:** *Não!* Não vai fazer diferença o tipo de projeto. Na verdade, a única diferença que pode existir, é que o TypeScript vai garantir muito mais **escalabilidade** no futuro.

**É só usar PropTypes que dá na mesma:** *Não!* O PropTypes em sí não bloqueia código, não retorna erro, o máximo que ele faz é retornar warnings no console, onde geralmente são ignorados pelo programador.

## Instalando o compilador e escrevendo primeiro código

Site oficial do Typescript: <https://www.typescriptlang.org>

Instalar globalmente:

> npm install -g typescript

Comando para compilar um arquivo *.ts* e ficar assistindo:

> tsc fileName.ts --watch

Exemplo de diferença entre JS e TS:

```javascript
// File: index.js
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const button = document.getElementById('somar');

function sum(a, b) {
  return a + b;
}

button.addEventListener('click', function() {
  console.log('Soma:', sum(input1.value, input2.value));
});
```

Ao tentar soma "1 + 2", no primeiro caso irá retornar 12, pois são strings e o JavaScript irá concatenar. No segundo caso retornará "3", pois foi feita a soma corretamente.

```typescript
// File: index.ts
const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const button = document.getElementById('somar')

function sum(a: number, b: number) {
  return a + b;
}

button.addEventListener('click', function() {
  console.log('Soma:', sum(Number(input1.value), Number(input2.value)));
});
```

Gerar o arquivo **tsconfigo.json** (na raiz), onde podem ser inseriridas várias regras do TypeScript:

> tsc --init

## Como criar os Types ou Tipos

1. Boolean (true / false)

    Só existe *true* ou *false*, nada de *0* ou *1*.

    ```typescript
    let isOpen: boolean

    isOpen = true
    ```

2. String ('foo' / "foo" / `foo`)

    ```typescript
    let message: string

    message = 'foo'
    message = `foo ${isOpen}` // Template String Literals
    ```

3. Number (int / floa / hexadecimal/ binário /...)

    ```typescript
    let total: number

    total = 20.3
    total = 0xff0
    ```

4. Array (type[])

    Para definir um array, é preciso dizer os tipos de dados desse array.

    ```typescript
    let items: number[]
    item = [1, 2, 3]

    let values: Array<number>
    values = [1, 2, 3]
    ```

5. Tuples

    Um array onde já sabemos a quantidade de elementos e o tipo.

    ```typescript
    let title: [number, string, string]

    title = [1, 'foo', 'bar']
    ```

6. Enum

    Enumerator serve para criar um conjunto de chave e valor.

    ```typescript
    enum Colors {
        white = '#fff',
        black = '#000
    }
    ```

7. Any (Não é legal!)

    Significa qualquer coisa (terror do JavaScript).

    ```typescript
    let coisa: any

    coisa = true
    coisa = 'foo'
    coisa = [1, 2]
    ```

8. Void (Vazio)

    Quando não existe retorno. Para tipar funções que não retornam alguma coisa.

    ```typescript
    function logger(): void {
        console.log('foo')
    }
    ```

9. Null | Undefined

    Quando um valor não foi definido é **nulo** ou **undefined**. Na prática não existe diferença, pois os dois são **Falsy**.

    ```typescript
    type Bla = string | undefined // Pode ser um ou outro
    ```

    Também não é recomendado a utilização como tipo primitivo, pois não será possível mudar o valor da mesma, sempre será nulo. Exemplo:

    ```typescript
    let variable: null
    ```

10. Never

    É um tipo em que nunca irá retornar (?!). É usado basicamente quando iremos mostrar um erro na tela ou exceção, por exemplo.

    ```typescript
    function error(): never {
        throw new Error("error") // Só vai jogar o erro na tela
    }
    ```

11. Object

    Tudo aquilo que não é nem string, nem array, nem boolean e nem número.

    ```typescript
    let cart: object
    
    cart = {
        key: "foo"
    }
    ```

### Type Inference ou Inferência de Tipo

A inferência de tipos serve para evitar a tipagem de forma redundante.

Quando criar uma variável e já atribuir ela ao um valor, o TypeScript já entende o tipo da variável, a partir do valor. Por exemplo, se foi passada como valor de uma variável uma string, o TypeScript subentende que o tipo da mesma é string.

Se tentar atribuir outro valor à variável que não seja do mesmo tipo atribuída inicialmente, o TypeScript retorna-rá um erro.

```typescript
let message = "Mensagem definida" // let message: string

message = "String nova" // Ok
maessage = 1.6 // Erro

let newMessage: string = "Outra mensagem" // Isso é redundante
```

Exemplo com função:

```typescript
// Não redutante
window.addEventListener('click', (e) => {
    console.log(e.target)
})

// Reduntante
window.addEventListener('click', (e: MouseEvent) => {
    console.log(e.target)
})
```

### Aliases e Union

Existem momentos que queremos usar tipos um pouco mais complexos ou com algum detalhes a mais. Para isso servem o **Union** e o **Type Alias**.

Exemplos:

```typescript
// Union
function logDetails(uid: number | string, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`)
}

logDetails(123, "Sapato") // Funciona normal, pois aceita NUMBER ou STRING
logDetails("123", "Sapato") // Funciona normal, pois aceita NUMBER ou STRING

// Type Alias
type Uid = number | string
type Platform = 'Windows' | 'Linux' | 'Mac OS'

function logInfo(uid: Uid, user: string) {
    console.log(`A user with ${uid} has a name as ${user}.`)
}

logInfo(123, "Goku") // Funciona normal, pois aceita NUMBER ou STRING
logInfo("123", "Goku") // Funciona normal, pois aceita NUMBER ou STRING

function renderPlatform(platform: Platform) { // É do tipo Platform
    return platform
}

renderPlatform('ios') // ios não é do tipo Platform
renderPlatform('Linux') // Linux é do tipo Platform
```

### Type Aliases com Intersection

Exemplo de como fazer uma intercessão de Type Alias:

```typescript
type AccountInfo = {
    id: number;
    name: string;
    email?: string; // Opcional (?) (string | undefined)
}

type CharInfo = {
    nickname: string;
    level: number;
}

const account: AccountInfo = {
    id: 123,
    name: "Goku",
    email: "goku@kakaroto.com"
}

const char: CharInfo = {
    nickname: "kakarotosayan",
    level: 100
}

// União dos dois tipos anteriores (Intersection: &)
type PlayerInfo = AccountInfo & CharInfo

// Não importa a ordem das informações, mas a estrutura e tipos devem ser os mesmos.
const player: PlayerInfo = {
    id: 123,
    nickname: "kakarotosayan",
    name: "Goku",
    level: 100
}
```

## Classes

Como convenção, sempre criar o nome da classe com as letras inciais em **maiúsculo** (MinhaClasse).

Para criar o objeto é preciso de um método chamado de *constructor()*. Onde recebe as propriedades que o objeto irá receber.

Exemplo de criação de uma Classe:

```typescript
// File: UserAccount.ts
class UserAccount {
    name: string;
    age:  number;

    constructor(name: string, age: number) {
        // Assinalando os valores
        this.name = name;
        this.age  = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}

const sayan = new UserAccount("Goku", 30);
console.log(sayan);
sayan.logDetails();
```

### Herança - Estender uma Classe

Exemplo de Herança:

```typescript
// File: CharAccount.ts
// Irá estender a classe UserAccount
class CharAccount extends UserAccount() {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age) // Pegará as proprieades da classe Superior, ou seja, da que estamos estendendo
        
        this.nickname = nickname;
        this.level = level;
    }
}

const sayan2 = new CharAccount("Vegeta", 45, "inseto", 80);
console.log(sayan2);
sayan2.logDetails();
```

### Modifiers (Public, Private, Protected, Readonly)

**Public:** É permitido fazer o que desejar com a propriedade, em qualquer lugar.

```typescript
// File: CharAccount.ts
class CharAccount extends UserAccount() {
    public nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)
        
        this.nickname = nickname;
        this.level = level;
    }

    longCharDetails(): void {
        console.log(
            `The player ${this.name} has the char ${this.nickname} at level ${this.level}.`
        )
    }
}

const sayan = new CharAccount("Vegeta", 45, "inseto", 80);
console.log(sayan.nickname); // 80
sayan.nickname = 'Gohan';
console.log(sayan.nickname); // Gohan
```

**Private:** Uma propriedade só pode ser acessada ou editada dentro da própria classe.

```typescript
// File: CharAccount.ts
class CharAccount extends UserAccount() {
    private nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)
        
        this.nickname = nickname;
        this.level = level;
    }

    longCharDetails(): void {
        console.log(
            `The player ${this.name} has the char ${this.nickname} at level ${this.level}.`
        )
    }
}

const sayan = new CharAccount("Vegeta", 45, "inseto", 80);
console.log(sayan.nickname); // Erro
```

**Protected:** Permitido chamar uma propriedade dentro da classe ou da classe que está estendendo a mesma, porém não é possível chamar foram da classe.

```typescript
// File: CharAccount.ts
class CharAccount extends UserAccount() {
    protected nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)
        
        this.nickname = nickname;
        this.level = level;
    }

    longCharDetails(): void {
        console.log(
            `The player ${this.name} has the char ${this.nickname} at level ${this.level}.`
        )
    }
}

const sayan = new CharAccount("Vegeta", 45, "inseto", 80);
console.log(sayan.nickname); // Erro
```

**Readonly:** A propriedade só pode ser lida, mesmo dentro de sua classe.

```typescript
// File: CharAccount.ts
class CharAccount extends UserAccount() {
    nickname: string;
    readonly level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)
        
        this.nickname = nickname;
        this.level = level;
    }

    longCharDetails(): void {
        console.log(
            `The player ${this.name} has the char ${this.nickname} at level ${this.level}.`
        )
    }
}

const sayan = new CharAccount("Vegeta", 45, "inseto", 80);
console.log(sayan.level); // 80
sayan.level = 799; // Erro
```

### Acessors (Get e Set)

Com o **Get** é possivel **obter** valores/propriedades dentro de uma determinada classe.

Com o **Set** é possivel **editar** valores/propriedades dentro de uma determinada classe.

Exemplo:

```typescript
// File: CharAccount.ts
class CharAccount extends UserAccount() {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)
        
        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level;
    }

    longCharDetails(): void {
        console.log(
            `The player ${this.name} has the char ${this.nickname} at level ${this.level}.`
        )
    }
}

const sayan = new CharAccount("Vegeta", 45, "inseto", 80);
console.log(sayan.getLevel); // Não é preciso passar como função, pois é como uma propriedade.

sayan.setLevel = 488;
console.log(sayan.getLevel); // 488
```

### Abstract Class

É uma **classe abstrata** onde não é possível criar abjetos a partir dela, porém é possível estendê-la.

Muita utilizadas quando queremos criar classes que serão somente "modelos" para outras classes.

Exemplo:

```typescript
// File: UserAccount.ts
abstract class UserAccount {
    name: string;
    age:  number;

    constructor(name: string, age: number) {
        // Assinalando os valores
        this.name = name;
        this.age  = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
```

## Interfaces

Interfaces são um conjunto de dados para descrever a estrutura de um objeto (exclusivamente). No momento, Interfaces funcionam somente no TypeScript e não no JavaScript.

Em alguns lugares é visto iniciar o nome de uma interface com a letra **I**, porém não é obrigatório.

Exemplo de Interface:

```typescript
interface Game // IGame {
    id?: string | number;
    title: string;
    description: string;
    readonly genre: string; // Só é possível motrar e não editar
    platform?: string[]; // Opcional
    getSimilars?: (title: string) => void // Assinatura do método
}

const tlou: Game = {
    title: "The Last Of Us",
    description: "The best game in the world.",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
}

// É preciso testar se o método/propriedade existe, pois ele está como opcional e pode ser 'undefined'
// Isso é chamado de Type Guards. https://basarat.gitbook.io/typescript/type-system/typeguard
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}

console.log(tlou.title);
```

Estendendo a Interface:

```typescript
interface DLC extends Game {
    originalGame: Game; // Objeto do tipo Game
    newContent: string[];
}

const leftbehind: DLC = {
    title: "The Last Of Us - Left Behind",
    description: "You play as Ellie before the original game.",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"]
}

console.log(leftbehind);
```

Implementando uma Classe a partir de uma Interface:

```typescript
// A classe precisar ter todos os tipos não opcionais descritos na interface
class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g: string) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
```

### Type Alias vs Interfaces

Quando utilizar mais Type Alias?

- Na maioria das vezes;
- React - Props;
- Consegue estender pequenos detalhes no próprio local;
- Trabalhar mais facilmente com tipos primitivos.

Quando utilizar mais Interfaces?

- Quando quiser estender a aplicação;
- Quando estiver criando libs, prefira Interfaces, pois são mais extensíveis;
- Criando objetos/classes (POO).

Type Alias:

```typescript
// Definição
type Game = {
    title: string;
}

type DLC = {
    extra: string;
}

// Intersection
type GameCollection = Game & DLC;

// Implements
class CreateGame implements GameCollection {}

// Declarar função
type getSimilars = (title: string) => void;

// ============== Diferenças ============ //

// Permite declarar tipos primitivos
type ID = string | number;

// Pode declarar Tuplas normalmente
type Tuple = [number, number];

[1, 2] as Tuple; // Se passar mais de 2, acusará erro pela definição.

// Apenas UMA declaração por escopo.
type JQuery = { a: string };
type JQuery = { b: string }; // Erro.
```

Interfaces:

```typescript
// Definição
interface Game {
    title: string;
}

interface DLC {
    extra: string;
}

// Intersection | Extend
interface GameCollection extends Game, DLC {}

// Implements
class CreateGame implements GameCollection {}

// Declarar função
interface getSimilars {
    (title: string): void;
};

// ============== Diferenças ============ //

// Não é possível estender de um tipo primitivo
interface ID extends number {} // Erro

// Não é possível definir Tuplas na interface
interface Tuple {
    0: number;
    1: number;
}

[1, 2, 3, "qualquer coisa"] as Tuple; // Pode ter múltiplas declarações e ele une de mesmo nome.

// Permite a redefinição dinâmica (Monkey Patching), será feito um merge entre eles.
interface JQuery {
    a: string;
}

interface JQuery {
    b: string;
}

const $: JQuery = {
    a: "bla",
    b: "foo"
}
```

## Generics

Consideradas um dos conceitos mais difíceis do TypeScript. Quando estamos escrevendo código, uma das coisas mais importantes é a reutilização deste código. Onde além de escrever menos, teremos somente um "ponto de contato" se houver algum bug ou algo a ser modificado.

Porém, para termos códigos dessa forma, precisamos que nossas funções/métodos, sejam mais *genéricos*, ou seja, que esses métodos aceitem diferentes tipos de entradas, diferentes tipos de argumentos que possamos passar e etc, onde no final tenhamos o retorno esperado.

Aprendemos no TypeScript, que no incio é preciso definir os tipos das entradas fortemente, com isso o que era para ser em tese mais genérico, acaba não sendo. Por isso a utilização do **generics**, para conseguir dentro de uma linguagem tipada uma certa flexibilidade.

Os tipos são representados por letras, declaradas entre **menor e maior** (**<>**), antes dos parenteses utilizados para passar argumentos. Já a definição de qual tipo aquela letra representa, é passada na chamada da função. Alguns padrões de letras são utilizados ao declarar os tipos:

- S => State;
- T => Type;
- K => Key;
- V => Value;
- E => Element;

Exemplo simples:

```typescript
// File: generics.ts

// <>: passar os tipos
function useState<S>() {
    // let state: number | string;
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: number) {
        state = newState;
    }

    return { getState, setState };
}

const newState = useState<string>();

newState.setState("foo");
console.log(newState.getState()); // foo

newState.setState(123); // Erro
```

É possível flexibilizar os tipos que o método aceita, estendendo-os. Porém, após a primeira vez definido o tipo na chamada, somente será aceito esse tipo.

Exemplo com especificação:

```typescript
// File: generics.ts

function useState<S extends number | string>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: number) {
        state = newState;
    }

    return { getState, setState };
}

const newState = useState<string>();

newState.setState("foo");
console.log(newState.getState()); // foo

// Se já foi definido anterioromente que é uma string, aqui retornará um erro
newState.setState(123);
console.log(newState.getState()); // 123

newState.setState(false); // Erro
```

É possível declarar um tipo **generic default**, para que não seja necessário sempre declarar na chamada da função.

- Definição do Generic: `S extends number | string`.
- Difinição do generic default: `= string`.

Exemplo com um tipo default:

```typescript
// File: generics.ts

let numOrStr = number | string;

function useState<S extends numOrStr = string>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: number) {
        state = newState;
    }

    return { getState, setState };
}

const newState = useState();

newState.setState("foo");
console.log(newState.getState()); // foo
```

## Type Utilities

Utilitários para trabalhar com tipos, onde são feitos com base nos Generics. Servem basicamente para fazermos opeções "em cima" dos próprios tipos. Existem vários, mas será abordados somente os principais.

Para exemplificar, vamos tentar altera um objeto. Na primeira forma estamos fazendo uma Mutação, alterado diretamente o objeto. Isso pode criar muitos problemas. O ideal é criar uma função, que cria um novo objeto a partir do objeto original (princípio de Imutabilidade) visto na segunda forma.

- Primeira forma:

```typescript
// File: type-utilities.ts

type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

const todo: Todo = {
    title: "Assistir Dark novamente",
    description: "Relembrar os detalhes",
    completed: false
};

console.log(todo);

// Modificando o objeto
todo.completed = true;
console.log(todo);
```

- Segunda forma:

```typescript
// File: type-utilities.ts

type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

// Readonly: todas as propridades não poderão ser alteradas.
const todo: Readonly<Todo> = {
    title: "Assistir Dark novamente",
    description: "Relembrar os detalhes",
    completed: false
};

console.log(todo);
todo.completed = true; // Erro

// Partial: Deita todas as propriedades do objeto opcionais.
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate } // ...fieldsToUpdate irá sobrescrever o ...todo
}

const todo2: Todo = updateTodo(todo, { completed: true });

// Pick: Especificar as propriedades que queremos de outro objeto.
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3 = TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}

// Omit: Omitir o que foi informado, inverso do Pick.
type TodoPreview2 = Omit<Todo, "description">

const todo4 = TodoPreview2 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}
```

## Decorators

Decorator é uma anotação/marcação que pode ser anexada à uma classe, propriedade, método, parâmetro ou acesso. Em outras palavras, o Decorator irá trabalhar com essas anotações para que seja possível adicionar coisas novas, vigiando as anotações para que possa ser adicionado um elemento novo, ou fazer alguma validação entre outras funções.

No momento (em que escrevo), apesar de muito utilizada em TypeScript e no ECMAScript, é uma feature experimental. Para pode utilizar no TypeScript, é preciso modificar a propriedade **experimentalDecorators** para **true**, no arquivo **tsconfig.json**.

Decorator mais básico:

```typescript
// File: decorators.ts

/** Criando decorator **/
// target: vai ser o constructor da classe
// function log(target) {
//     console.log(target);
// }

// Decorator Factory: uma função que irá retornar a criação do Decorator
function logger(prefix: string) {
    // Retornar o decorator
    return (target) => {
        console.log(`${prefix} - ${target}`);
    }
}

/** Decorator **/
// @log
@logger('awesome')
class Foo {}
```

Decorator de Classe (Class Decorator):

Esse decorator roda em runtime.

```typescript
// File: decorators.ts

function setAPIVersion(apiVersion: string) {
    // Ou target. Decorator de Classe sempre terá um construtor!
    return (constructor) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

// Decorator que irá anotar a versão da API.
@setAPIVersion('1.0.0')
class API {}

console.log(new API()); // class_1 { version: '1.0.0' }
```

Decorator de Propriedade (Property Decorator):

```typescript
// File: decorators.ts

function minLength(length: number) {
    // Recebe 2 parâmetros:
    // target: propotype da classe
    // key: nome da propriedade que estamos trabalhando
    return (target: any, key: string | symbol) => {
        console.log(target); // Movie {}
        console.log(key); // title

        let val = target[key];
        const getter = () => val;
        const setter = (value: string) => {
            if (value.length < length) {
                console.log(
                    `Error: você não pode criar ${key} com o tamanho menor que ${length}.`
                ); 
            } else {
                val = value;
            }
        }

        // É preciso definir no objeto
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

class Movie {
    // Validação: se for menor que 5 = erro
    @minLength(50)
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

const movie = new Movie("Interstellar")
console.log(movie);
```

Decorator de Método (Method Decorator):

Esse decorator irá rodar no momento que o método for chamado.

```typescript
// File: decorators.ts

function delay(ms: number) {
    // Recebe 3 parâmetros:
    // target: propotype da classe
    // key: nome da propriedade que estamos trabalhando
    // descriptor: descreve o método
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        console.log(target); // Greeter { greet: [Function] }
        console.log(key); // greet
        console.log(descriptor); // Objeto PropertyDescriptor

        const originalMethod = descriptor.value; // Salvando a função original
        // Reescrever a função
        descriptor.value = function(...args) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);

            return descriptor;
        }
    }
}

class Greeter {
    greeting: string;

    constructor(g: string) {
        this.greeting = g;
    }

    // Esperar um tempo e aí vai rodar o método (ms)
    // @debounce(300) // Exemplo de rotina
    @delay(1000)
    greet() {
        console.log(`Hello! ${this.greeting}`);
    }
}

const pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();
```
