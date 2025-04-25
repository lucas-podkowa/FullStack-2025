
// Ejemplo 1: Invertir una Cadena
// Enunciado: Escribe una función que reciba una cadena de texto y devuelva la cadena invertida. Por ejemplo, si la entrada es "JavaScript", la salida debe ser "tpircSavaJ".

function invertirCadena(texto) {
  return texto.split('').reverse().join('');
}
console.log(invertirCadena('JavaScript')); // "tpircSavaJ"
console.log(invertirCadena('Node.js')); // "sj.edoN"



// Función para invertir una cadena
function invertirCadena(cadena) {
  let cadenaInvertida = '';
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
  }
  return cadenaInvertida;
}

// Ejemplo de uso
const texto = "JavaScript";
const resultado = invertirCadena(texto);
console.log(resultado);



//----------------------------------------------------------------------------------------------------

// Ejemplo 2: Verificar Si Una Palabra Existe en un Array
// Enunciado: Escribe una función que reciba un array de strings y una palabra. La función debe verificar si la palabra existe en el array y devolver true si es así, o false en caso contrario.

function palabraExiste(array, palabra) {
  return array.includes(palabra);
}

const palabras = ['JavaScript', 'Node.js', 'React', 'Angular'];
console.log(palabraExiste(palabras, 'Node.js')); // true
console.log(palabraExiste(palabras, 'Vue.js')); // false


//----------------------------------------------------------------------------------------------------

// Ejemplo 3: Suma de Números en un Rango
// Enunciado: Escribe una función que reciba dos números como parámetros, start y end, y devuelva la suma de todos los números en ese rango (inclusive).

function sumaRango(start, end) {
  let suma = 0;
  for (let i = start; i <= end; i++) {
    suma += i;
  }
  return suma;
}

// Ejemplo de uso
console.log(sumaRango(1, 5)); // 15
console.log(sumaRango(10, 20)); // 165
