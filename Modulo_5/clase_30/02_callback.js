
function login(algunaFuncion) {
    setTimeout(() => {
        console.log('me logeo');

        //la unica forma es obligar a que se ejecute despues de 3 segundos
        // ¿como hago para que aca pueda ejecutar cualquier funcion?
        algunaFuncion();
        // ^ esta se llama callback

    }, 3000);
}

function redirigir() {
    console.log('Redirigir');
}

function negar() {
    console.log('Negar acceso');
}




login(redirigir);
login(negar);

//segundo();

