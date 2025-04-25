// try {
//     //todo el codigo que quiero que se ejecute en lo posible de manera correcta
// } catch (error) {
//     // si ocurrio algun error, aqui lo atrapo y gestiono
// } finally {
//     // este bloque se ejecuta siempre, haya o no habido error
// }


let a = 15, b = 0;
try {
    if (b == 0) {
        throw new TypeError("Imposible dividir entre 0");
    }
    // ...... código que puede lanzar un error
    console.log(`Cociente: ${(a / b)}`);
} catch (error) {
    if (error instanceof TypeError) {
        console.warn(error.message);
    } else {
        console.error("Ha ocurrido un error genérico");
    }
} finally {
    console.log("Operación finalizada.");
}

