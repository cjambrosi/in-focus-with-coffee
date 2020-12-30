a = 42
b = 3.14
c = 'Banana'
preco = 9.6666

# Soma
print('Soma: ', 3 + 4)

# Multiplicação
print('Multiplicação: ', 12 * 5)

# Exponenciação
print('Exponenciação: ', 2 ** 10)

# Divisão
print('Divisão: ', 10 / 3)

## divisão entre inteiros retorna um float, não outro inteiro como em C++
print('Divisão: ', 1 / 2)

# Tipos
print('Tipo: ', type(a))
print('Tipo: ', type(b))
print('Tipo: ', type(c))
print('Tipo: ', type(True))
print('Tipo: ', type(False))

## Métodos de um tipo
### Método reservado: __metodo__
print(dir(a))
print(dir(b))
print(dir(c))

### Sintaxe de um metdo help()
help(c.upper)
print(c.upper())

print(f'Preço é R$ {preco:.2f}')
print('a > b: ', a > b)
print('a == 42 or b == 42: ', a == 42 or b == 42)
print('a == 42 and b == 42: ', a == 42 and b == 42)

# Python é uma linguagem dinâmicamente tipada, fortemente tipada e orientada a objetos
## Dinâmicamente Tipada
d = 42 # Ok
d = 3.14 # Ok
d = 'Banana' # Ok
print(a)

## Fortemente tipada
#print(42 + ' Banana') # Erro - Não faz conversões automaticas
print(str(42) + ' Banana') #Ok - Conversão explicita

## Orientada a Objetos
# 'Banana'.METODOS()
print('Banana'.upper())

# Atribuição Multipla

## Trocar valores de duas variaveis, por exemplo, não necessita de uma terceira variável
a = 3
b = 'Banana'
print('a, b: ', a, b)
a, b = b, a
print('a, b = b, a: ', a, b)
d, m, a = '16/04/2020'.split('/')
print(d, m, a);