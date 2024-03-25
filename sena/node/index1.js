//1. Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas según la siguiente tabla:

const prompt = require('prompt-sync')();

//TRIANGULO
a= Number(prompt("Digite el lado a del triangulo: "))
b= Number(prompt("Digite el lado b del triangulo: "))
c= Number(prompt("Digite el lado c del triangulo: "))
h= Number(prompt("Digite el lado h del triangulo: "))

console.log('El perímetro de un triangulo es: ', a+b+c)
console.log('El área de un triangulo es: ', (a*h)/2)

//RECTANGULO
a= Number(prompt("Digite el lado a del rectangulo: "))
b= Number(prompt("Digite el lado b del rectangulo: "))

console.log('El perímetro de un rectangulo es: ', 2*(b+a))
console.log('El área de un rectangulo es: ', b*a)

//CUADRADO
a= Number(prompt("Digite el lado a del cuadrado: "))

console.log('El perímetro de un cuadrado es: ', 4*a)
console.log('El área de un cuadrado es: ', a*a)

//CIRCULO
r= Number(prompt("Digite el lado r del circulo: "))

console.log('El perímetro de un circulo es: ', 2*Math.PI*r)
console.log('El área de un circulo es: ', Math.PI*r**2)
