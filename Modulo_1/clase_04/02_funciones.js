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
