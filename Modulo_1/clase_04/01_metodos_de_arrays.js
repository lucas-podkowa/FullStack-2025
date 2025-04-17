//-------- ESTRUCTURAS DE REPETICION (BUCLES) ----------------------------------------------------------
//------------------------------------------------------------------------------------------------------

//FOR-IN

// la forma correcta de utilizar "for in" es utilizando la variable como un puntero

ciudades = ["Buenos Aires", "CABA", "La Plata", "Mar del Plata", "Rosario"];
for (i in ciudades) {
  console.log(i);
}

let mascotas = ["perro", "gato", "pato", "tigre"];
for (let puntero in mascotas) {
  //for in imprime la posicion
  console.log("FOR IN imprime: " + puntero);
}

// //FOR-OF
for (i of ciudades) {
  console.log(i);
}

notas = [10, 8, 9, 7, 6, 5, 4, 3, 2, 1];
for (const nota of notas) {
  if (nota >= 6) {
    console.log("aprobado");
    console.log(nota);
  }
}

for (let animal of animales) {
  //for in imprime el contenido
  console.log("FOR OF imprime: " + animal);
}

// -------- METODOS DE CADENA --------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
// - concat()		junta dos o mas cadenas y retorna una nueva 			        res = c1.concat(c2)
// - startsWith()	devuelve true o false si una cadena comienza con otra cadena	res = c1.startsWith(c2)
// - endsWith()		devuelve true o false si una cadena termina con otra cadena	    res = c1.endsWith(c2)
// - includes()		devuelve true o false si una cadena contiene otra cadena	    res = c1.includes(c2)
// - indexOf()		devuelve el numero la posicion que halla la primer letra o -1	res = c1.indexOf(c2)
// - lastIndexOf()	devuelve el numero la posicion que halla la ultima letra o -1	res = c1.lastIndexOf(c2)
// - length         devuelve la logitud (cantidad de posiciones o caracteres)       res = c1.length
// - slice(i, f)    devuelve el contenido entre el inicio y el fin de una cadena    res = c1.slice(6, 11)
// - split(cond)    devuelve un array con la cadena separada segun la condicion     res = c1.split(" ")
// - toLowerCase()  devuelve el teto original pero pasado a minusculas              res = c1.toLowerCase()
// - toUpperCase()  devuelve el teto original pero pasado a mayusculas              res = c1.toUpperCase()


/*declaramos un array de nombres, luego lo recorremos con un FOR-OF para averiguar si dichos nombres inician con la letra M, 
si lo hacen se imprime un mensaje, de lo contrario no hace nada y sigue la iteracion hacia el proximo nombre*/

let nombres = ["Juan", "Pedro", "Maria", "Jose"];
for (const nombre of nombres) {
  if (nombre.startsWith('M')) {
    console.log('el nombre inicia con la letra M')
  }
}


// -------- METODOS DE ARRAY --------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
let animales = ["perro", "gato", "pato", "tigre"]; //declaramos un array de animales
quitado = animales.pop(); //quitamos el ultimo elemento con el metodo pop() cuyo valor almacenamos en la variable quitado

console.log(animales);    //mostramos como queda el array de animales luego de haber quitado un elemento
console.log(quitado);     //mostramos el valor de la variable quitado


// metodo include para saber si un elemento existe dentro de un array 
let mascota = "raton"
console.log(animales.includes(mascota)); // devuelve true o false
if (animales.includes(mascota)) {
  console.log(mascota + " esta en la lista");
} else {
  console.log(mascota + " NO esta en la lista");
}

// push() agrega un elemento al final del array
animales.push('aguila');

//unshift() agrega un elemento al principio del array
animales.unshift('gato');

//shift() elimina el primer elemento del array
animales.shift();

//scplice(posicion, cantidad a eliminar, elemento a agregar)
animales.splice(1, 1, 'lobo');
