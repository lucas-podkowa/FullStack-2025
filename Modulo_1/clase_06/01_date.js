//console.log(globalThis);
console.log(Math.floor(4.58));
//Math, Promise, Date

let hoy = new Date();

console.log(hoy);

let algunaFecha = new Date(2023, 5, 15); // Año, mes (0-indexado), día
console.log(algunaFecha);



let fecha = new Date();

//formatear fechas
console.log(fecha.toDateString());
console.log(fecha.toISOString());
console.log(fecha.toLocaleDateString("es-ES"));

console.log('--------------------------------');

//declarar fechas a partir de un String
// ISO 8601 (Año-Mes-Día)
let fechaDesdeCadena = new Date("2024-08-31");
console.log(fechaDesdeCadena.toLocaleDateString("es-ES")); // "2024-08-30T00:00:00.000Z"

// Inglés Americano: Mes Día, Año
let fechaIngles = new Date("August 30, 2024");
console.log(fechaIngles.toLocaleDateString("es-ES"));

let fechaMDY = new Date("08/30/2024");
console.log(fechaMDY.toLocaleDateString("es-ES"));

console.log('--------------------------------');
fecha = new Date();


// metodos del objeto fecha para trabajar con ellos
console.log(fecha.getFullYear());
console.log(fecha.getMonth());
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());

console.log('--------------------------------');
//--- ejemplo con set interval
setInterval(() => {
    fecha = new Date();
    console.log(`${fecha.getTime()}`);
}, 1);

// setear o cambiar los datos de una fecha que ya esta creada
fecha = new Date();
fecha.setFullYear(2059);
fecha.setMonth(10); // Diciembre
fecha.setDate(15);
console.log(fecha.toLocaleDateString("es-AR")); // "2025-12-25T00:00:00.000Z"


/*
Escribe una función que reciba dos fechas (en formato YYYY-MM-DD) y devuelva cuántos días hay de diferencia entre ellas. 
Si la fecha de inicio es posterior a la fecha de fin, la función debe devolver un error indicando que las fechas son inválidas.
*/
resultado = diferenciaDeFechas("2024-08-15", "2024-09-17");

function diferenciaDeFechas(primera, segunda) {
    let fecha1 = new Date(primera);
    let fecha2 = new Date(segunda);

    //es la cantidad de segundos que pasaron desde esa fecha hasta ahora.
    //console.log(fecha1.getTime());

    //validando que las fechas sean validad
    if (isNaN(fecha1.getTime()) || isNaN(fecha2.getTime())) {
        return (console.log(`${primera} o ${segunda} no es una fecha válida`));
    }


    if (fecha1 > fecha2) {
        return (console.log(`${primera} no puede ser mayor a ${segunda}`));
    }

    //cuando realizo el calculo entre dos fechas, siempre lo hara en milisegundos
    let ms = fecha2 - fecha1;
    let diferencia = ms / (1000 * 60 * 60 * 24 * 30);
    console.log(diferencia);

}


/*
La función isNaN() en JavaScript se utiliza para comprobar si un valor es "Not-a-Number" (NaN), 
es decir, si el valor que le pasas no puede ser convertido a un número. 
Si un valor PUEDE convertirse a numeros devolvera false, si NO PUEDE convertirse a un número devolvera true
Devuelve true si el valor no es un número, o false si es un número válido.
*/



//----------------------------------------------------------------
// UTILIZANDO MOMENT
const moment = require('moment');

// Función para calcular la diferencia de días entre dos fechas usando moment.js
function diferenciaDiasMoment(fechaInicio, fechaFin) {
    try {
        const fecha1 = moment(fechaInicio, 'YYYY-MM-DD');
        const fecha2 = moment(fechaFin, 'YYYY-MM-DD');

        // Verificar si la fecha de inicio es posterior a la de fin
        if (!fecha1.isValid() || !fecha2.isValid()) {
            throw new Error("Formato de fecha inválido.");
        }

        if (fecha1.isAfter(fecha2)) {
            throw new Error("La fecha de inicio no puede ser posterior a la fecha de fin.");
        }

        // Calcular la diferencia en días
        const diferenciaDias = fecha2.diff(fecha1, 'days');

        return diferenciaDias;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

// Ejemplo de uso
const inicio = "2024-09-01";
const fin = "2024-09-17";
let diferencia = diferenciaDiasMoment(inicio, fin);

if (resultado !== null) {
    console.log(`Diferencia en días usando moment.js: ${resultado}`);
}


