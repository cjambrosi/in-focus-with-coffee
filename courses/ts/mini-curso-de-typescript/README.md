# Mini-curso de TypeScript <!-- omit in toc -->

> Se você sabe JavaScript, você sabe TypeScript. A diferença é que é preciso aprender a tipar.

Link da Playlist: <https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_>

## Sumário <!-- omit in toc -->

- [Sobre o TypeScript](#sobre-o-typescript)
- [Por que usar TypeScript](#por-que-usar-typescript)
- [Desvantagens do TypeScript](#desvantagens-do-typescript)
- [Alguns Mitos do TypeScript](#alguns-mitos-do-typescript)
- [Instalando o compilador e escrevendo primeiro código](#instalando-o-compilador-e-escrevendo-primeiro-código)
- [Como criar os Tipos ou Types](#como-criar-os-tipos-ou-types)

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

**Vou precisar reescrever tudo pra TypeScript:** *Não!* É possível fazer a adoção gradualmente, pois é possível trabalhar tanto com JavaScript quando com TypeScript no mesmo projeto. Uma forma inteligente de fazer isso, quando for escrever um novo código ou arquivo do projeto, já escrever em TypeScript, o mesmo vale para um arquivo já existente que será mexido, convertê-lo JavaScript para TypeScript.

**Já escrevo testes, não preciso disso:** *Não!* Existem alguns casos em que os testes não irão "pegar", o TypeScript irá te dar essa segurança a mais.

**Só funciona com Programação Orientada a Objeto:** *Não!* Quando o TypeScript começou era muito fundamentado nas ideias do dotNet/C#, que é Orientado a Objeto. Porém, o TypeScript funciona muito bem com Programação Funcional.

**Verboso demais, precisa tipar tudo:** *Não!* De fato é preciso escrever um pouco a mais já que é preciso definir os tipos, mas isso não necessariamente quer dizer que é precisar definir o tipo para tudo. O TypeScript possui **inferência**, onde ele já sabe o que é um determinado resultado, retorno ou variável.

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

## Como criar os Tipos ou Types

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
