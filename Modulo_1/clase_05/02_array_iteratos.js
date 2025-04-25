
import express from 'express'

//----------------------------------------------------------------
//forEach(): recorre cada elemento del array y ejecuta una función para cada uno, pero no devuelve ningún valor.
numeros = [1, 2, 3, 4, 5];

numeros.forEach(
    (numero) => {
        console.log(numero * 2); // Multiplica cada número por 2
    }
);


//----------------------------------------------------------------
//map(): crea un nuevo array aplicando una función a cada elemento del array original.
numeros = [1, 2, 3, 4, 5];

dobles = numeros.map((numero) => {
    return numero * 2; // Crea un nuevo array con cada número multiplicado por 2
});

console.log(dobles);
console.log(numeros);


//----------------------------------------------------------------
//filter(): crea un nuevo array con los elementos que cumplen una condición.
numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(function (numero) {
    return numero % 2 === 0; // Crea un nuevo array con los números pares
});

const mayoresQueTres = numeros.filter(function (numero) {
    return numero > 3; // Devuelve un nuevo array con los números mayores que 3
});

console.log(mayoresQueTres);
console.log(pares);
console.log(numeros);


// const elementos = [1, 'hola', true, 'mundo', 42, null, 'JavaScript'];

// const soloStrings = elementos.map(

// elemento => typeof elemento === 'string' ? elemento : null).filter(elemento => elemento !== null);

// console.log(soloStrings); // ['hola', 'mundo', 'JavaScript']



// const mayoresQueTres = numeros.filter( numero =>  numero < 3);

// console.log(mayoresQueTres);

notas = []
for (let index = 0; index <= 5; index++) {
    nota = prompt('ingrese la nota');
    notas.push(nota);

}


fechaDeHoy = new Date()



for (const nota of notas) {
    sumador += nota
    promedio = sumador / notas.lenght
}

//----------------------------------------------------------------
//some(): devuelve true si al menos un elemento del array cumple con una condición, o false si ninguno lo hace.
numeros = [1, 2, 3, 4, 5];

const algunMayorQueCuatro = numeros.some(function (numero) {
    return numero > 4; // Verifica si al menos un número es mayor que 4
});

console.log(algunMayorQueCuatro);

//----------------------------------------------------------------
//every(): devuelve true si todos los elementos del array cumplen con una condición, o false si al menos uno no lo hace

numeros = [1, 2, 3, 4, 5];

// Verifica si todos los números son pares
const todosPares = numeros.every(function (numero) {
    return numero % 2 === 0;
});

//otro ejemplo: Verifica si todos los números son menores que 6
const todosMenoresQueSeis = numeros.every(function (numero) {
    return numero < 6;
});

console.log(todosPares);
console.log(todosMenoresQueSeis);


const edades = [22, 30, 19];
const sonMayores = edades.every(edad => edad >= 18); // true

const positivos = [1, 2, 3];
console.log(positivos.every(n => n > 0)); // true


//---------------------------------------------------------------------------------
// .find() busca el primer elemento de un array que cumpla una condición, y lo devuelve. Si ningún elemento cumple, devuelve undefined.

const numeros = [10, 20, 30, 40];
const encontrado = numeros.find(n => n > 25);
console.log(encontrado); // 30


const personas = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Lucía', edad: 28 }
];

const buscado = personas.find(persona => persona.nombre === 'Ana');
console.log(buscado); // { nombre: 'Juan', edad: 30 }

// .findIndex() Devuelve el índice (posición) del primer elemento que cumpla la condición. Si no encuentra nada, devuelve -1
// .findLast() Devuelve el último elemento que cumpla la condición. Es como find(), pero empieza desde el final del array hacia atrás.