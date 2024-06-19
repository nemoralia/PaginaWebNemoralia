/*4. Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y cantantes más
escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a estudiantes del SENA del
programa de tecnólogo en análisis y desarrollo de software desarrollar una solución que permita conocer
la respuesta de 6 personas con relación a sus gustos musicales. Con fines administrativos y realizar una
rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su
nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia,
ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en
cada una de las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá
mostrar un menú que permite las siguientes opciones:

a. Agregar una persona con los datos que se listan anteriormente.
b. Mostrar la información personal de una persona particular por medio de su posición en el vector.

*/

const prompt = require('prompt-sync')();

const oyentes = [];

function agregarOyente() {
    const oyente = {};

    oyente.nombre = prompt("Favor ingresar su nombre: ");
    oyente.cedula = prompt("Favor ingresar su cedula: ");
    oyente.fechaNac = prompt("Favor ingresar su fecha de nacimiento: ");
    oyente.email = prompt("Favor ingresar su correo electronico: ");
    oyente.residencia = prompt("Favor ingresar su ciudad de residencia: ");
    oyente.origen = prompt("Favor ingresar su ciudad de origen: ");
    oyente.artistaFavorito = prompt("Favor ingresar su artista favorito: ");
    oyente.cancionesFavoritas = [];

    for (let i = 0; i < 3; i++) {
        let cancion = prompt(`Favor ingresar su ${i + 1}ª canción favorita: `);
        oyente.cancionesFavoritas.push(cancion);
    }

    return oyente;
}

function mostrarInformacionOyente(oyente) {
    console.log("Información del oyente:");
    console.log(oyente);
}

let opcion;
do {
    console.log("\nMenú:");
    console.log("a. Agregar una persona");
    console.log("b. Mostrar la información personal de una persona particular");
    console.log("x. Salir");
    opcion = prompt("Seleccione una opción: ");

    switch (opcion) {
        case 'a':
            oyentes.push(agregarOyente());
            break;
        case 'b':
            let posicion = parseInt(prompt("Ingrese la posición del oyente: ")) - 1;
            if (posicion >= 0 && posicion < oyentes.length) {
                mostrarInformacionOyente(oyentes[posicion]);
            } else {
                console.log("La posición ingresada no es válida.");
            }
            break;
        case 'x':
            console.log("Saliendo del programa.");
            break;
        default:
            console.log("Opción no válida.");
    }
} while (opcion !== 'x');