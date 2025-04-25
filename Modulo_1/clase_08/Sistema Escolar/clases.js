// Simulamos una clase abstracta
class Persona {
  constructor(nombre, edad) {
    if (this.constructor === Persona) {
      throw new Error("No se puede instanciar una clase abstracta.");
    }

    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Clase Alumno hereda de Persona
class Alumno extends Persona {
  constructor(nombre, edad, legajo) {
    super(nombre, edad); // Llama al constructor de Persona
    this.legajo = legajo;
    this.cursos = []; // cursos en los que está inscripto
  }

  inscribir(curso) {
    this.cursos.push(curso);
  }

  listarCursos() {
    return this.cursos.map((c) => c.nombre).join(", ");
  }
}

// Clase Curso
class Curso {
  #alumnos = []; // Propiedad privada (solo accesible desde dentro de la clase)

  constructor(nombre, asignatura) {
    this.nombre = nombre;
    this.asignatura = asignatura;
  }

  inscribirAlumno(alumno) {
    this.#alumnos.push(alumno);
    alumno.inscribir(this);
  }

  listarAlumnos() {
    return this.#alumnos.map((a) => a.nombre);
  }

  static cantidadAlumnos(curso) {
    return curso.#alumnos.length;
  }
}

// Clase Asignatura
class Asignatura {
  constructor(nombre, profesor) {
    this.nombre = nombre;
    this.profesor = profesor;
  }
}

// Exportamos las clases para usarlas en otros archivos
module.exports = {
  Alumno,
  Asignatura,
  Curso,
  Persona,
};
