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

//---------------------------------------------------------------------
const miFrase =
  "esta es una cadena de texto que quiero analizar las palabras individuales sin perderme en el medio de tanta cosarada";

fraseSplit = miFrase.split(" ");

console.log(fraseSplit); // longitud de la cadena



//---------------------------------------------------------------------
// imprime por consola los apellidos de un array

let apellidos = ["Peres", "diaz", "aguirre", "nogueira", "rodriguez"];

for (let i = 0; i < apellidos.length; i++) {
  console.log(apellidos[i]);
}