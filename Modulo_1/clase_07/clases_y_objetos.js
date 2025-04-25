// Toda clase se inicia con una Mayusculas seguido de unas llaves {}
// toda clase tiene un constructor a travez del cual la clase recibe los datos con los que creará al objeto
// el orden en el que el constructor recibe los datos es el orden en el que envio dichos datos sin imoprtar el tipo de datos
// una clase ademas de sus atributos (datos) tiene metodos (funciones, acciones,)


class Persona {
  static raza = "humano"; // Propiedad estática de la clase

  // El constructor se ejecuta cuando creamos una nueva instancia de la clase
  constructor(nombre, apellido, edad, fechaNacimiento) {
    this.nombre = nombre; // Propiedades
    this.apellido = apellido;
    this.edad = edad;
    this.fecha_nacimiento = new Date(fechaNacimiento);
  }

  // Métodos
  saludar() {
    console.log(
      `Hola, mi nombre es ${this.nombre} ${this.apellido}, 
      nací el ${this.fecha_nacimiento.toLocaleDateString("es-AR")} 
      por lo que tengo ${this.edad} años.`
    );
  }
}

// Crear un objeto o instancia de la clase Persona
let persona1 = new Persona("juanchi", "perez", 35, "1988-08-09");

// Llamar al método saludar
persona1.saludar(); // Hola, mi nombre es Juan y tengo 30 años.
console.log(Persona.raza);
console.log(persona1.raza);

//---------------------------------------------------------------------------
/*

Conceptos clave de la POO:

  * Objeto: Una entidad que contiene atributos (propiedades) y métodos (funciones).
  * Clase: Un molde o plantilla a partir de la cual se crean objetos.

Piensa en una clase como un plano de una casa. Puedes crear muchas casas (objetos) basadas en ese plano, 
pero cada una puede tener características diferentes (como colores o tamaños).

  * Constructor: es un método especial para inicializar un objeto creado a partir de una clase. 
    Se ejecuta automáticamente al crear una nueva instancia.
    Se utiliza para definir propiedades básicas de la clase que pueden ser únicas para cada objeto.

*/
//---------------------------------------------------------------------------

class Estudiante {
  constructor(nombre, matricula) {
    this.nombre = nombre;
    this.matricula = matricula;
    this.notas = []; // Inicializa un array vacío para las notas
  }

  agregarNota(nota) {
    this.notas.push(nota); // Agrega una nueva nota al array de notas
  }
  calcularPromedio() {
    const suma = this.notas.reduce((acum, nota) => acum + nota, 0);
    return this.notas.length ? suma / this.notas.length : 0;
  }
}

estudiante_1 = new Estudiante("Lucas", "123456");
estudiante_2 = new Estudiante("Juan", "654321");

// console.log(estudiante_1.nombre); // Lucas
// console.log(estudiante_1.matricula); // 123456

estudiante_1.agregarNota(5.5);
estudiante_1.agregarNota(10);

// console.log(estudiante_1);
// console.log(estudiante_2);

estudiante_2.agregarNota(8);

// console.log(estudiante_1.calcularPromedio()); // 7

//---------------------------------------------------------------------------
class Libro {
  constructor(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
  }

  // Método para mostrar los detalles del libro
  detalle() {
    return `	Título: "${this.titulo}", Autor: ${this.autor}, Año: ${this.año}	`;
  }
}

let l1 = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943);
let l2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

// console.log(l2.detalle());
