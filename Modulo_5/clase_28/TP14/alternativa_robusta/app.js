// Importamos 'info' como exportación por defecto y las otras funciones como nombradas.
import info, { sumar, restar, multiplicar, dividir } from "./calculadora.js";

function calcular(nombreCalculo, num1, num2) {
    try {
        let resultado;
        // Usamos un switch para seleccionar la operación basada en el nombre.
        switch (nombreCalculo.toLowerCase()) { // Convertimos a minúsculas para mayor flexibilidad
            case "sumar":
                resultado = sumar(num1, num2);
                break;
            case "restar":
                resultado = restar(num1, num2);
                break;
            case "multiplicar":
                resultado = multiplicar(num1, num2);
                break;
            case "dividir":
                resultado = dividir(num1, num2);
                break;
            default:
                // Si el nombre del cálculo no es reconocido, lanzamos un error.
                throw new Error(`Operación "${nombreCalculo}" no reconocida.`);
        }
        // Si todo salió bien, mostramos el resultado.
        console.log(`El resultado de ${nombreCalculo} es: ${resultado}`);
    } catch (error) {
        // Capturamos cualquier error lanzado por las funciones de calculadora.js
        // o por el propio 'switch' de calcular().
        console.error(`Error al realizar ${nombreCalculo}: ${error.message}`);
    }
}

// --- Pruebas y ejecución ---

// 1. Mostrar la información del módulo (info ahora devuelve un string)
console.log(info());
console.log("---");

// 2. Pruebas de funcionamiento correcto de cada cálculo
console.log("--- Pruebas de operaciones correctas ---");
calcular("sumar", 20, 10);
calcular("restar", 20, 10);
calcular("multiplicar", 20, 10);
calcular("dividir", 20, 4);

// 3. Pruebas de manejo de errores
console.log("\n--- Pruebas de manejo de errores ---");
calcular("sumar", "veinte", 10); // Error: parámetros no numéricos
calcular("dividir", 20, 0);      // Error: división por cero
calcular("potencia", 2, 3);      // Error: operación no reconocida
calcular("dividir", 0, 5);       // Prueba de 0/5 (debe ser 0, no un error)