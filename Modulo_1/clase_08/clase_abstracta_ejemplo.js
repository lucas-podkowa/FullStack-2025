class Vehiculo {
  constructor(marca, modelo) {
    if (this.constructor === Vehiculo) {
      throw new Error("No se puede instanciar una clase abstracta, pué");
    }
    this.marca = marca;
    this.modelo = modelo;
  }

  // Método abstracto (debe ser implementado por las clases derivadas)
  arrancar() {
    throw new Error("Este método debe ser implementado por una subclase");
  }

  // Método genérico para detener el vehículo (puede ser usado por todas las clases derivadas)
  detener() {
    console.log(`${this.marca} ${this.modelo} se ha detenido.`);
  }
}



//-------------------------------------------------
// Clases derivadas
//-------------------------------------------------

class Coche extends Vehiculo {
  constructor(marca, modelo, puertas) {
    super(marca, modelo); // Llama al constructor de la clase base
    this.puertas = puertas;
  }

  // Implementación específica del método arrancar para coches
  arrancar() {
    console.log(
      `${this.marca} ${this.modelo} está arrancando con ${this.puertas} puertas.`
    );
  }
}



class Motocicleta extends Vehiculo {
  constructor(marca, modelo, cilindrada) {
    super(marca, modelo); // Llama al constructor de la clase base
    this.cilindrada = cilindrada;
  }

  // Implementación específica del método arrancar para motocicletas
  arrancar() {
    console.log(
      `${this.marca} ${this.modelo} está arrancando con una cilindrada de ${this.cilindrada} cc.`
    );
  }
}

//-------------------------------------------------
// Instanciando las clases
//-------------------------------------------------

const miCoche = new Coche("Toyota", "Corolla", 4);
miCoche.arrancar();
miCoche.detener();

const miMoto = new Motocicleta("Yamaha", "R1", 1000);
miMoto.arrancar();
miMoto.detener(); 
