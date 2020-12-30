<div align="center">
  <img src="https://user-images.githubusercontent.com/9125404/79482067-a8d5a200-7fe6-11ea-92df-b031a4b2788a.png" width=150px height=150px alt="Python Iniciante" />
</div>

<h2 align="center">Python para Zumbis</h2>

http://pingmind.com.br/

https://www.dropbox.com/sh/m9wio7ock77yowd/AAAR3ogXRJqhd5Uw3NthvS0Ia

https://www.pycursos.com/python-para-zumbis/

https://www.youtube.com/playlist?list=PLUukMN0DTKCtbzhbYe2jdF4cr8MOWClXc


http://pingmind.com.br/media/private/uploads/2253/TWP10%20Condicoes_3.pdf

http://pingmind.com.br/media/private/uploads/24/TWP15%20Repeticoes.pdf

http://pingmind.com.br/media/private/uploads/24/TWP20%20For%20Funcoes%20e%20Random.pdf

http://pingmind.com.br/media/private/uploads/24/TWP23%20Arquivos%20e%20Dicionarios.pdf


https://cadernoscicomp.com.br/tutorial/introducao-a-programacao-em-python-3/funcoes-print-input-e-o-metodo-format/

http://excript.com/python/incluindo-alterando-excluindo-elementos-lista-python.html

http://excript.com/python/funcoes-string-python.html

https://pythonhelp.wordpress.com/2011/11/12/fatiamento-slicing-de-strings-em-python/

https://pt.stackoverflow.com/questions/72678/como-limpar-o-console-no-python

e-Mail: cris_ambrosi@hotmail.com
Password: Cobry38Prog

## Anotações

### Lista de Exercícios 01

1. Faça um programa que peça dois números inteiros e imprima a soma desses dois números.

```python
varA = int(input('Insira o primeiro valor inteiro: '))
varB = int(input('Insira o segundo valor inteiro: '))
print('Soma = ', varA + varB)
```

2. Escreva um programa que leia um valor em metros e o exiba convertido em milímetros.

```python
metros = float(input('Insira um valor em metros (m): '))
print(f'Centímetros = {int(metros * 1000)}', 'mm')
```

3. Escreva um programa que leia a quantidade de dias, horas, minutos e segundos do usuário. Calcule o total em segundos.

```python
input('Insirava os valores inteiros para:')
dias = int(input('Dias = '))
horas = int(input('Horas = '))
minutos = int(input('Minutos = '))
segundos = int(input('Segundos = '))
total = (dias * 24 * 60 * 60) + (horas * 60 * 60) + (m * 60) + segundos
print('Total de Segundos: ', total)
```

4. Faça um programa que calcule o aumento de um salário. Ele deve solicitar o valor do salário e a porcentagem do aumento. Exiba o valor do aumento e do novo salário.

```python
salario = float(input('Digite o Salário R$: '))
porcentagem = float(input('Digite a porcentagem de aumento (%): '))
aumento = (salario * porcentagem) / 100
novoSalario = salario + aumento
print(f'Aumento de Salário de: R$ {aumento:.2f}')
print(f'Novo Salário: R$ {novoSalario:.2f}')
```

5. Solicite o preço de uma mercadoria e o percentual de desconto. Exiba o valor do desconto e o preço a pagar.

```python
precoMercadoria = float(input('Digite o preço da marcadoria R$: '))
porcentagem = float(input('Digite o percentual de desconto: '))
desconto = (precoMercadoria * porcentagem) / 100
precoMercadoria -= desconto
print('Desconto de {0}% \nPreço final do produto: R$ {1}'.format(desconto, precoMercadoria))
```

6. Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

```python
distancia = float(input('Distância a percorrer (Km): '))
vlcMedia = float(input('Velocidade média (Km/h): '))
tempo = distancia / vlcMedia
print(f'Tempo de viagem: {tempo:.1f} horas')
```

7. Converta uma temperatura digitada em Celsius para Fahrenheit. F = 9 * C / 5 + 32.

```python
celsius = float(input('Digite a temperatura em Celsius (C): '))
fahrenheit = 9 * celsius / 5 + 32
print(f'Temperatura em Fahrenheit (F): {fahrenheit:.2f}')
```

8. Faça agora o contrário, de Fahrenheit para Celsius.

```python
fahrenheit = float(input('Digite a temperatura em Fahrenheit (F): '))
celsius = (fahrenheit - 32) * 5 / 9
print(f'Temperatura em Celsius (C): {celsius:.2f}')
```

9.  Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa R\$ 60,00 por dia e R\$ 0,15 por km rodado.

```python
qtdKm = float(input('Digite a quantidade de KM: '))
qtdDias = float(input('Digite a quantidade de Dias: '))
valorPagar = qtdKm * 0.15 + qtdDias * 60
print(f'Valor do Aluguel: {valorPagar:.2f}')
```

10. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou. Considere que um fumante perde 10 minutos de vida a cada cigarro, calcule quantos dias de vida um fumante perderá. Exiba o total de dias.

```python
# 1 dia = 1440 minutos = 144 cigarros
qtdCigr = float(input('Digite a quantidade de Cigarros fumados por Dia: '))
anos = int(input('Por quantos anos fumou: '))
totalCigr = anos * 365 * qtdCigr
totalDias = totalCigr / 144
print(f'Dias de vida perdidos: {totalDias:.1f}')
```

11. Sabendo que str() converte valores numéricos para string, calcule quantos dígitos há em 2 elevado a um milhão.

```python
print(len(str(2 ** 1000000)))
```
