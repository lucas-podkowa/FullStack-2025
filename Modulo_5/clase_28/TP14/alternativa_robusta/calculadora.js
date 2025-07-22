
function validarNumeros(a, b) {
    // Usamos Number() para intentar convertir, y luego Number.isNaN() para verificar si la conversión falló.
    // Esto permite manejar casos como cadenas que parecen números ("10") o valores que no lo son ("hola").
    const numA = Number(a);
    const numB = Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        throw new Error("Ambos parámetros deben ser valores numéricos.");
    }
    return { numA, numB }; // Devolvemos los números ya convertidos
}

export function sumar(a, b) {
    const { numA, numB } = validarNumeros(a, b); // Validamos y obtenemos los números
    return numA + numB;
}

export function restar(a, b) {
    const { numA, numB } = validarNumeros(a, b);
    return numA - numB;
}

export function multiplicar(a, b) {
    const { numA, numB } = validarNumeros(a, b);
    return numA * numB;
}

export function dividir(a, b) {
    const { numA, numB } = validarNumeros(a, b);

    // Corregimos la lógica: el error de división es solo si el divisor (numB) es cero.
    if (numB === 0) {
        throw new Error("No se puede dividir por cero.");
    }
    return numA / numB;
}

// La función info ahora solo devuelve el mensaje, no lo imprime.
// Así, app.js decide cómo mostrarlo.
function info() {
    return "Con el presente módulo usted podrá realizar las operaciones básicas de matemática como sumar, restar, multiplicar y dividir.";
}

// Exportamos 'info' como exportación por defecto, como pide la consigna.
export default info;