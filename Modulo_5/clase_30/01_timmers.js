// setInterval: Ejecuta repetidamente una función cada cierto intervalo de tiempo (en milisegundos).
setInterval(() => {
    console.log('Hello World');
}, 2000);

// setTimeout: Ejecuta una función una sola vez después de esperar un tiempo especificado (en milisegundos).
setTimeout(() => {
    console.log('Hello World');
}, 2000);

/*
let tiempo = 0;
reloj = () => {
    setTimeout(
        () => {
            console.log(tiempo);
            tiempo += 1;
            reloj();
        }, 100);
}

reloj();
*/
