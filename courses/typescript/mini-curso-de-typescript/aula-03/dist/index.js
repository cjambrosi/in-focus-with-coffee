"use strict";
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.getElementById('somar');
function sum(a, b) {
    return a + b;
}
button.addEventListener('click', function () {
    console.log('Soma:', sum(Number(input1.value), Number(input2.value)));
});
