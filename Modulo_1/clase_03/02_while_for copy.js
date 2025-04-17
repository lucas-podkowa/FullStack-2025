//-------- ESTRUCTURAS DE REPETICION (BUCLES) ----------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// WHILE

// while (condición) {
//     // código a repetir
// }

i = 14;
while (i <= 30) {
  console.log(`estamos en el día ${i}, aun te falta bastante para cobrar`);
  i++;
  //i = i + 1
}
console.log("ya viene el sueldo");

//------------------------------------------------------------------------------------------------------
// FOR

// for (inicialización; condición; incremento) {
//     // código a repetir
// }

i = 14;
for (let i = 14; i <= 30; i++) {
  console.log(`estamos en el día ${i}, aun te falta bastante para cobrar`);
}

/*
Escriba un algoritmo que recorra los números del 1 al 20. 
Para cada número, dicho algoritmo debe imprimir por consola si el número es par o impar.
*/

// solucion con WHILE
let numero = 1;
while (numero <= 20) {
  if (numero % 2 == 0) {
    console.log("número par");
  } else {
    console.log("número impar");
  }

  console.log("el numero actual es:" + numero);
  numero++; //aca aumento el contador para que vaya al numero siguiente
}

//solucion con FOR
for (let i = 1; i <= 20; i++) {
  console.log("el numero actual es:" + i);
  if (i % 2 == 0) {
    console.log("número par");
  } else {
    console.log("número impar");
  }
}

// imprime por consola los apellidos de un array

let apellidos = ["Peres", "diaz", "aguirre", "nogueira", "rodriguez"];

for (let i = 0; i < apellidos.length; i++) {
  console.log(apellidos[i]);
}

// ARRAYS
//------------------------------------------------------------------------------------------------------

// un array es una lista de elementos, que pueden ser de cualquier tipo (números, strings, booleanos, etc.)
// y se pueden mezclar entre sí. Se definen con corchetes [] y los elementos se separan por comas.

marcas = ["Ford", "Chevrolet", "Toyota", "Nissan", "Hyundai"];
//          0         1            2         3           4

console.log(marcas.length);
for (posicion = 0; posicion < marcas.length; posicion++) {
  console.log(marcas[posicion]);
}

let notas = [5, 5, 2, 7, 4];

let total = 0;
for (let i = 0; i < notas.length; i++) {
  total += notas[i];
}

console.log(`El promedio es: ${total / notas.length}`);

//------------------------------------------------------------------------------------------------------
const miFrase =
  "esta es una cadena de texto que quiero analizar las palabras individuales sin perderme en el medio de tanta cosarada";

fraseSplit = miFrase.split(" ");

console.log(fraseSplit); // longitud de la cadena
