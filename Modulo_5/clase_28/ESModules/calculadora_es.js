export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  if (b === 0) throw new Error("No se puede dividir por cero");
  return a / b;
}

export default function mensaje() {
  return "Módulo de operaciones";
}



//------------------------------------------------
// Exportaciones agrupadas (útil para organizar)
//------------------------------------------------

// function saludar(nombre) {
//   return `Hola, ${nombre}`;
// }

// function despedir(nombre) {
//   return `Adiós, ${nombre}`;
// }

// export { saludar, despedir };


