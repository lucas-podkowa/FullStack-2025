class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;

    }
    presentarme() {
        return `${this.apellido} ${this.nombre}`;
    }
}


class Docente extends Persona {
    constructor(nombre, apellido, curso, profesion) {
        super(nombre, apellido);
        this.curso = curso;
        this.profesion = profesion //asigname a esta propiedad que la llamé profesion 
    }

    presentarme() {
        return `${this.apellido} ${this.nombre} y soy un docente`;
    }
}


class Estudiante extends Persona {
    constructor(nombre, apellido, matricula, notas) {
        super(nombre, apellido);
        this.matricula = matricula;
        this.notas = notas;
    }

    presentarme() {
        return super.presentarme() + " (Alumno)";
    }

    agregarNota(nota) {
        this.notas.push(nota);
    }

    calcularPromedio() {
        const suma = this.notas.reduce((acum, nota) => acum + nota, 0);
        return this.notas.length ? suma / this.notas.length : 0;
    }
}

//------------------------------------------






// la palabra reservada "new" lo primero que se hace es invocar al constructor de la clase
unaPersona = new Persona('Lucas', 'Podka');
x = new Estudiante('Julio', 'Iglesias', 4775, [10, 9, 5]);
profe1 = new Docente('Jorge', 'Poje', 'Informatica', 'Licenciado en Sistemas de Informacion');

console.log(unaPersona.presentarme());
console.log(x.presentarme());
console.log(profe1.presentarme());
console.log(x.calcularPromedio());




// const estudiante1 = new Estudiante('Ana', '12345');
// estudiante1.agregarNota(9);
// estudiante1.agregarNota(8);
// console.log(`Promedio de Ana: ${estudiante1.calcularPromedio()}`); // Promedio de Ana: 8.5
