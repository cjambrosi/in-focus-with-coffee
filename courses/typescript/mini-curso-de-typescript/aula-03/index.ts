const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const button = document.getElementById('somar')!;

function sum(a: number, b: number) {
  return a + b;
}

button.addEventListener('click', function() {
  console.log('Soma:', sum(Number(input1.value), Number(input2.value)));
});
