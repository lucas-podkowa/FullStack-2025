//-------------------------------------------------------------------------------------------------------------
// -------- 00 - METODOS BASICOS DE INTERACCION ---------------------------------------------------------------

// SOLAMENTE UTILIZANDO LA CONSOLA DEL IDE
// console.log(parametro);      (muestra por consola lo que estoy enviando por parametro)
// console.error(parametro);   (muestra por consola un error, se usa para errores de sintaxis o de ejecución)
// console.warn(parametro);    (muestra por consola una advertencia, se usa para errores de lógica o de ejecución)

// UTILIZANDO EL NAVEGADOR WEB
// en el caso de utilizar el navegador web para ejecutar codigo, tenemos otros comandos en entrada y salida

// alert(parametro);            (muestra una ventana emergente con el contenido que estoy enviando por parametro)
// document.write(parametro);   (similar a console pero muestra el contenido en la pagina pricipal)
// variable = prompt("mensaje"); (abre una ventana emergente con un mensaje, la variable almacena lo que ingrese el usuario)

//-------------------------------------------------------------------------------------------------------------
// -------- 01 - VARIABLES ------------------------------------------------------------------------------------

// var		(se toma por defecto cuando no escribimos nada)
var fecha = new Date();

// let		(se limita el bloque donde fue declarada)
let edad = 25;

// const	(definimos una sola vez y no podemos cambiar su valor, me obliga a inicializar cuando se declara)
const curso = "Programacion Full-Stack Nivel II";

//-------------------------------------------------------------------------------------------------------------
// -------- 02 - TIPOS DE DATOS PRIMITIVOS (estandar del lenjuaje JavaScript) ---------------------------------

// string   (cadenas de caracteres, alias texto)
let nombre = "Slatan";

// number   (un numero con o sin decimales)
let clases = 48;
let altura = 1.8;

//boolean   (verdadero o falso, en ingles TRUE or FALSE)
let estudiante = true;
let millonario = false;

//undefinet     (la variable existe en el programa pero aun no fue inicializada)
//var telefono  (si lo dejara así  sin asignarle nada sería indefinido)

//null			(es intencional, no esta vacia y sí esta definida pero su valor es null)
let telefono = null;

//funcion typeof()    (palabra reservada de JS que nos devuelve el tipo de datos de una variable)
let aguinaldo = 100000;
tipo = console.log(typeof aguinaldo); //(tipo será igual a NUMBER ya que aguinaldo es del tipo numerico)

//-----------------------------------------------------------------------------------------------------------
//-------- 03 - ESTRUCTURAS DE CONTROL (tambien llamados condicionales) -------------------------------------

// IF-ELSE

/*
 if (condición) {
     // código si la condición es verdadera
 } else {
     // código si la condición es falsa
 }
*/

//Ejemplo donde muestro un mensaje dependiendo de la nota obtenida
let nota = 3;

if (nota >= 0 && nota <= 4) {
  console.log("mal");
} else if (nota >= 5 && nota <= 6) {
  console.log("regular");
} else if (nota >= 7 && nota <= 8) {
  console.log("bueno");
} else if (nota >= 9 && nota <= 10) {
  console.log("excelente");
} else {
  console.log("Nota invalida");
}
