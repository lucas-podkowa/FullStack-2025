try {
  let resultado = JSON.parse('{ nombre: "Juan" }'); // JSON inválido (falta comillas en clave)
  console.log(resultado);
} catch (error) {
  console.error("Error al parsear JSON:", error.message);
}

//--------------------------
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

try {
  let resultado = dividir(10, 0);
  console.log(resultado);
} catch (error) {
  console.error("Ocurrió un error:", error.message);
}

//------------------------
function saludar(nombre) {
  try {
    // Supongamos que nombre debe ser una cadena
    console.log("Hola " + nombre.toUpperCase());
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("TypeError: El parámetro 'nombre' no es una cadena.");
    } else {
      console.error("Otro error:", error.message);
    }
  }
}

saludar("Lucas");   // Funciona bien
saludar(null);      // Provoca TypeError (null no tiene .toUpperCase)

//-----------------------------------
function crearArray(tamaño) {
  try {
    if (tamaño < 0) {
      throw new RangeError("El tamaño del array no puede ser negativo");
    }

    const arr = new Array(tamaño);
    console.log(`Array creado con ${tamaño} elementos.`);
  } catch (e) {
    if (e instanceof RangeError) {
      console.error("RangeError:", e.message);
    } else {
      console.error("Otro error:", e.message);
    }
  }
}

//Error y sus subclases (TypeError, RangeError, etc.) es una cclase que tiene metodos
// cuando salta algo en el catch, lo que viene ahi en ese "error" es un objeto de la clase Error
// y tiene metodos como message, name, stack, etc.

crearArray(5);    // OK
crearArray(-3);   // Provoca RangeError

//----------------------
function mostrarUsuario() {
  try {
    // Supongamos que por error usamos una variable que no fue declarada
    console.log("El usuario es:", usuario); // `usuario` no está definida
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.warn(error.name + ": " + error.message); // ReferenceError: usuario is not defined
    } else {
      console.warn("Otro error:", error.message);
    }
  }
}

mostrarUsuario();
