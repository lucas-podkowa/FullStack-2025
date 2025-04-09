//-------- ESTRUCTURAS DE REPETICION (BUCLES) ----------------------------------------------------------
//------------------------------------------------------------------------------------------------------

//FOR-IN

//la forma correcta de utilizar "for in" es utilizando la variable como un puntero
let animales = ["perro", "gato", "pato", "tigre"];
for (let puntero in animales) {
  //for in imprime la posicion
  console.log("FOR IN imprime: " + puntero);
}

//FOR-OF
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
