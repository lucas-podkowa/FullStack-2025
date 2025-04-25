//a una funcionpodemos pasarle por parametro otra funcion
// el resultado de una funcion puede almacenarse en una variable, por ende una variable puede ser una funcio

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function calculadora(calculo, a, b) {
    console.log(calculo(a, b));
}
calculadora(sumar, 1, 3);
calculadora(restar, 1, 3);


//() si ven ésto, es porque es una funcion
//--------------------------------------------------------------------

function hello() {
    return "Hello World!";
}
hello = function () {
    return "Hello World!";
}


hello = () => { "Hello World!" };

hello = (val) => "Hello World!";

hello = val => "Hello " + val;



resultado = (datos) => {
    console.log(datos);
}
