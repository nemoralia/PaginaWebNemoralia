//2. Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de
//enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos
//adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio
//anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada
//ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar
//un nuevo valor.


const prompt = require('prompt-sync')();

edades = []
menorEdad = 0
mayorEdad = 0
adultoMayor = 0
edadBaja = 0
edadAlta = 0
sumaEdades = 0

for (iterador = 1 ; iterador <=10; iterador++){
    edad = Number (prompt("Ingrese su edad: "))
    if (edad<1 || edad>120){
        console.log("Edad Invalida")
        iterador=iterador-1
    } else {
        edades[iterador]=edad
        if (edad<18){
            menorEdad++
        }
        if (edad>=18){
            mayorEdad++
        }
        if (edad>=60){
            adultoMayor++
        }
        if (edadBaja==0 || edadBaja>edad){
            edadBaja=edad
        }
        if (edadAlta==0 || edadAlta<edad){
            edadAlta=edad
        }
        sumaEdades=sumaEdades+edad
    }
 }

promedioEdad=sumaEdades/10
console.log(edades)
console.log('Los menores de edad son: ',menorEdad ,'Los mayores de edad son: ',mayorEdad ,'Los adultos mayores son: '
,adultoMayor, 'La edad mas baja es: ', edadBaja,'La edad mas alta es: ',edadAlta, 'Promedio de edad' ,promedioEdad)