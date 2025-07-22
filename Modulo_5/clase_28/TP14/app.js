import info, { sumar, restar, multiplicar, dividir } from './calculadora.js';

function calcular(operacion, val1, val2) {
    let resultado;
    switch (operacion) {
        case "sumar":
            resultado = sumar(val1, val2);
            break;
        case "restar":
            resultado = restar(val1, val2);
            break;
        case "multiplicar":
            resultado = multiplicar(val1, val2);
            break;
        case "dividir":
            resultado = dividir(val1, val2);
            break;
        default:
            resultado = "Operación no válida. Use: sumar, restar, multiplicar o dividir.";
    }
    console.log(`Resultado de ${operacion}:`, resultado);
}

// Mostrar información del módulo calculadora invocando su metodo por defecto
console.log(info());

// Pruebas según la consigna:
calcular("sumar", 10, 5);
calcular("restar", 10, 5);
calcular("multiplicar", 10, 5);
calcular("dividir", 10, 2);
calcular("dividir", 10, 0); // Prueba de error: división por cero
calcular("sumar", "abc", 5); // Prueba de error: parámetros no numéricos