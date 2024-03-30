/*3. Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego
produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1
3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17.
Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando
los datos de forma ascendente. */


const prompt = require('prompt-sync')();

const array1 = []
const array2 = []

for (let iterador1 = 0 ; iterador1< 5 ; iterador1++){
  let num1 = Number (prompt("Favor ingrese un numero del primer vector de forma ascendente: "))
  if (iterador1>0 && num1 < array1[iterador1-1]){
    console.log('Favor ingresar los numeros de forma ascendente')
    iterador1--
  }else {
  array1.push(num1);
  }
}
console.log(array1)


for (let iterador2 = 0 ; iterador2< 5 ; iterador2++){
    let num2 = Number (prompt("Favor ingrese un numero del segundo vector de forma ascendente: "))
    if (iterador2>0 && num2 < array2[iterador2-1]){
      console.log('Favor ingresar los numeros de forma ascendente')
      iterador2--
    }else {
    array2.push(num2);
    }
}
console.log(array2)

let sumaArray = array1.concat(array2)
sumaArray.sort((a, b) => a - b);

console.log(sumaArray)