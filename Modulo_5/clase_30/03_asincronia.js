var base = [
    {
        "nombre": "Med1",
        "matricula": 1
    },
    {
        "nombre": "Med2",
        "matricula": 2
    },
    {
        "nombre": "Med3",
        "matricula": 3
    }];






//let medicos = () => { return base }

function getMedicos(callback) {
    // Simulamos una llamada a una API que tarda 2 segundos
    setTimeout(() => {
        leistaMediscos = base; // Simulamos la respuesta de una API
        callback(leistaMediscos);
    }, 1);

}

//listaMedicos = getMedicos();

//getNombres(getMedicos);
getMedicos(getNombres);
getMedicos(getMatriculas);


function getNombres(listaMedicos) {
    for (const medico of listaMedicos) {
        console.log(medico.nombre);
    }
}

function getMatriculas(listaMedicos) {
    for (const medico of listaMedicos) {
        console.log(medico.matricula);
    }
}

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//solucion: usar una funcion callback que se ejecute cuando la consulta a la base de datos haya finalizado

// function getDatosCallback(callback) { //simulacion de una consulta a la base de datos
//     setTimeout(() => { //nuestra simulacion del tiempo necesario para que vaya a buscar los datos
//         callback(base); //llamo al callback y le paso los datos obtenidos
//     }, 2000);
// }

// getDatosCallback(getNombres); //le paso la funcion getNombres como callback