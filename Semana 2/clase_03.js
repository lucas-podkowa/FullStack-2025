//------------------------------------------------------------
// formas de concatenar strings
//------------------------------------------------------------

//En programación, un string es una secuencia de caracteres que se utiliza para representar texto

// let edad = 25;
// let nombre = 'Juan';
// console.log(edad); //imprime el valor de la variable edad

// //utilizando concatenacion
// // console.log('Mi edad es: ' + edad + ' mi nombre es: ' + nombre);

// //utilizando template strings
// //console.log(`Mi edad es: ${edad} mi nombre es: ${nombre}`);

//------------------------------------------------------------------------------------------------------
//-------- ESTRUCTURAS DE CONTROL (tambien llamados condicionales) -------------------------------------

// SWITCH
/*
 switch (valor) {
     case valor1:
         // código si valor === valor1
         break;
     case valor2:
         // código si valor === valor2
         break;
     default:
     // código si no coincide ningún case
 }
*/

// Ejemplo de switch comparado con if-else

fruta = "Banana";
if (fruta === "Manzana") {
  console.log("El color de la Manzana es rojo.");
} else if (fruta === "Banana") {
  console.log("El color de la Banana es amarillo.");
} else if (fruta === "Naranja") {
  console.log("El color de la Naranja es naranja.");
} else if (fruta === "Uva") {
  console.log("El color de la Uva es morado.");
} else {
  console.log(`No conocemos el color de la fruta ${fruta}.`);
}

switch (fruta) {
  case "Manzana":
    console.log("El color de la Manzana es rojo.");
    break;
  case "Banana":
    console.log("El color de la Banana es amarillo.");
    break;
  case "Naranja":
    console.log("El color de la Naranja es naranja.");
    break;
  case "Uva":
    console.log("El color de la Uva es morado.");
    break;
  default:
    console.log(`No conocemos el color de la fruta ${fruta}.`);
    break;
}

// Otro ejemplo para evaluar el día de la semana

let dia = "viernes";

switch (dia) {
  case "lunes":
    console.log("Es Lunes");
    break;
  case "martes":
    console.log("Es Martes");
    break;
  case "miércoles":
    console.log("Es Miércoles");
    break;
  case "jueves":
    console.log("Es Jueves");
    break;
  case "viernes":
    console.log("Es Viernes");
    break;
  case "sábado":
    console.log("Es Sábado");
    break;
  case "domingo":
    console.log("Es Domingo");
    break;
  default:
    console.log("Día inválido");
    break;
}

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
