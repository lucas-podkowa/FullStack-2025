const { Alumno, Curso, Asignatura } = require("./clases.js");

// Creamos una asignatura
const matematicas = new Asignatura("Matemáticas", "Prof. García");
const Lengua = new Asignatura("Lengua", "Prof. López");

// Creamos un curso de esa asignatura
const curso1 = new Curso("1A", matematicas);
const curso2 = new Curso("1A", Lengua);

// Creamos algunos alumnos
const juan = new Alumno("Juan Pérez", 14, "A001");
const ana = new Alumno("Ana Gómez", 15, "A002");

// Inscribimos a los alumnos
curso1.inscribirAlumno(juan);
curso1.inscribirAlumno(ana);

curso2.inscribirAlumno(juan);

// Mostramos info
console.log(juan.presentarse());
console.log(juan.listarCursos());
console.log(curso1.listarAlumnos());
console.log(Curso.cantidadAlumnos(curso2));

/*
Concepto            | Aplicado en
--------------------|--------------------------------------
Clases              | Persona, Alumno, Curso, Asignatura
Herencia (extends)  | Alumno hereda de Persona
Métodos             | presentarse(), inscribirAlumno(), etc.
Encapsulamiento     | #alumnos es privado dentro de Curso
Métodos estáticos   | Curso.cantidadAlumnos()
Clase abstracta     | Persona no puede ser instanciada directamente (simulada) 
Constructor         | constructor() usado en todas las clases
*/
