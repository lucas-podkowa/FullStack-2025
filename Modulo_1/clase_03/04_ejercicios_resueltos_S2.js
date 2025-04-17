//------------------------------------------- respuestas a los ejercicios de la semana 1
//ejericio 1
var num1 = 3;
var num2 = 7;
if (num1 <= num2) {
  console.log("num1 no es mayor que num2");
}
if (num2 > 0) {
  console.log("num2 es positivo");
}
if (num1 < 0 || num1 !== 0) {
  console.log("num1 es negativo o distinto de cero");
}
if (num1 + 1 < num2) {
  console.log(
    "Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2"
  );
}

//----------------------------------------------------------------

//ejercicio 2
let contraseña = "secreta";
if (contraseña === "secreta") {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}

//----------------------------------------------------------------
//ejercicio 3
let numero = 100;
if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

//----------------------------------------------------------------
//ejercicio 4
let esVIP = false; // Cambiar a false si no es VIP
let precio = 100;
if (esVIP) {
  precio = precio * 0.8;
  //precio = precio - (precio * 0.2) //alternativa
}
console.log("El precio final es: " + precio);

