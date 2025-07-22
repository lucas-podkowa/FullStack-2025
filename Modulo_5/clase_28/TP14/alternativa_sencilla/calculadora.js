
// Función auxiliar para validar si un valor es un número
function esNumero(valor) {
    return typeof valor === 'number' && !isNaN(valor);
}


export function sumar(a, b) {
    if (!esNumero(a) || !esNumero(b)) {
        return "Error: Ambos parámetros deben ser valores numéricos.";
    }
    return a + b;
}


export function restar(a, b) {
    if (!esNumero(a) || !esNumero(b)) {
        return "Error: Ambos parámetros deben ser valores numéricos.";
    }
    return a - b;
}


export function multiplicar(a, b) {
    if (!esNumero(a) || !esNumero(b)) {
        return "Error: Ambos parámetros deben ser valores numéricos.";
    }
    return a * b;
}

export function dividir(a, b) {
    if (!esNumero(a) || !esNumero(b)) {
        return "Error: Ambos parámetros deben ser valores numéricos.";
    }
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return a / b;
}

// Función info (exportación por defecto)
export default function info() {
    return "Con el presente módulo usted podrá realizar las operaciones básicas de matemática como sumar, restar, multiplicar y dividir.";
}
