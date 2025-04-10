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
  if (nombre.startsWith('M'))) {
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
let animal = "raton"
console.log(animales.includes(animal)); // devuelve true o false
 if (animales.includes(animal)) {
   console.log(animal + " esta en la lista");
 } else {
   console.log(animal + " NO esta en la lista");
 }

  // push() agrega un elemento al final del array
animales.push('aguila');

   //unshift() agrega un elemento al principio del array
animales.unshift('gato');

  //shift() elimina el primer elemento del array
animales.shift();
  
  //scplice(posicion, cantidad a eliminar, elemento a agregar)
animales.splice(1, 1, 'lobo');

 

// -------- FUNCIONES --------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

personas = ['Lucas', 'Juan', 'Pedro', 'Maria', 'Jose'];             //declaro un array de personas
otrasPersonas = ['Josefina', 'Pepe', 'Sandro', 'Marta', 'Josue'];   //declaro otro array de personas

todas = personas.concat(otrasPersonas);                             // uso el metodo concat para unir los dos arrays

// definimos una funcion que recibe un array como parametro y lo recorre imprimiendo cada elemento por consola
function saludador(algo) {
  for (const palabra of algo) {
    console.log(palabra);
  }
}

// llamo a la funcion definida anteriormente pasandole como parametro el array a ser recorrido
saludador(todas);


/* 
Programar una función que reciba un array de strings y una palabra. La función debe verificar si la
palabra existe en el array y devuelve true si es así, o false en caso contrario 
*/

personas = ["Lucas", "Juan", "Pedro", "Maria", "Jose"];             //volver a declarar es innesesario pero es para que se vea mas cerca
otrasPersonas = ["Josefina", "Pepe", "Sandro", "Marta", "Josue"];

busqueda = buscador1(otrasPersonas, "Pepe");                        //llaamando a buscador1 para aeriguar si encuantra a Pepe

// definiendo una alternativa de recorrido manual
function buscador1(unArray, unaPalabra) {
  for (const contenido of unArray) {
    if (contenido === unaPalabra) {
      return `la palabra recibida ${unaPalabra} se encontró`;
    }
  }
  return `la palabra recibida ${unaPalabra} no esta aquí`;
}

// definiendo una alternativa de recorrido automatizado utilizando el metodo includes
// en este caso la variable llamada search se tranforma en una funcion por lo que no hace falta llamarla como buscador 2

let search = function buscador2(unArray, unaPalabra) {
  return unArray.includes(unaPalabra);
};

console.log(search(personas, "Jesus"));   //imprimimos el resultado de la busqueda utilizando la funcion search (buscador2)
