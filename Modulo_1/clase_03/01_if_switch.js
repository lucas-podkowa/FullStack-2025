//------------------------------------------------------------
// formas de concatenar strings
//------------------------------------------------------------

//En programación, un string es una secuencia de caracteres que se utiliza para representar texto

// let edad = 25;
// let nombre = 'Juan';
// console.log(edad); //imprime el valor de la variable edad

// //utilizando concatenacion
// // console.log('Mi edad es: ' + edad + ' mi nombre es: ' + nombre);

// //utilizando template strings
// //console.log(`Mi edad es: ${edad} mi nombre es: ${nombre}`);

//------------------------------------------------------------------------------------------------------
//-------- ESTRUCTURAS DE CONTROL (tambien llamados condicionales) -------------------------------------

// SWITCH
/*
 switch (valor) {
     case valor1:
         // código si valor === valor1
         break;
     case valor2:
         // código si valor === valor2
         break;
     default:
     // código si no coincide ningún case
 }
*/

// Ejemplo de switch comparado con if-else

fruta = "Banana";
if (fruta === "Manzana") {
  console.log("El color de la Manzana es rojo.");
} else if (fruta === "Banana") {
  console.log("El color de la Banana es amarillo.");
} else if (fruta === "Naranja") {
  console.log("El color de la Naranja es naranja.");
} else if (fruta === "Uva") {
  console.log("El color de la Uva es morado.");
} else {
  console.log(`No conocemos el color de la fruta ${fruta}.`);
}

switch (fruta) {
  case "Manzana":
    console.log("El color de la Manzana es rojo.");
    break;
  case "Banana":
    console.log("El color de la Banana es amarillo.");
    break;
  case "Naranja":
    console.log("El color de la Naranja es naranja.");
    break;
  case "Uva":
    console.log("El color de la Uva es morado.");
    break;
  default:
    console.log(`No conocemos el color de la fruta ${fruta}.`);
    break;
}

// Otro ejemplo para evaluar el día de la semana

let dia = "viernes";

switch (dia) {
  case "lunes":
    console.log("Es Lunes");
    break;
  case "martes":
    console.log("Es Martes");
    break;
  case "miércoles":
    console.log("Es Miércoles");
    break;
  case "jueves":
    console.log("Es Jueves");
    break;
  case "viernes":
    console.log("Es Viernes");
    break;
  case "sábado":
    console.log("Es Sábado");
    break;
  case "domingo":
    console.log("Es Domingo");
    break;
  default:
    console.log("Día inválido");
    break;
}

