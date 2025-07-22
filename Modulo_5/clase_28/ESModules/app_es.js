import mensaje, { sumar, restar, multiplicar, dividir } from "./calculadora_es.js";

console.log(sumar(20, 10)); // 30
console.log(restar(20, 10)); // 10
console.log(multiplicar(20, 10)); // 200
console.log(dividir(20, 4)); // 5

//console.log(mensaje()); // Módulo de operaciones
function caclular(calculo, a, b) {
    if (calculo === 'suma') {
        console.log(sumar(a, b));
    } else if (calculo === 'resta') {
        console.log(restar(a, b));
    }
}


caclular('suma', 2, 10);