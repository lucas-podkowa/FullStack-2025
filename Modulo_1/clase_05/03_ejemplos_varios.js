/*
Problema:
Eres el encargado de procesar las calificaciones de un grupo de estudiantes. Debes calcular el promedio de sus calificaciones, pero antes debes asegurarte de que todas las calificaciones sean válidas. Una calificación válida es un número entre 0 y 10. 
Tu tarea es escribir una función que reciba un array con las calificaciones, verifique que todas sean válidas, y luego devuelva el promedio. Si alguna calificación no es válida, el programa debe lanzar un error y manejarlo adecuadamente con un try-catch.

Solución:
*/

function calcularPromedio(calificaciones) {
    for (let i = 0; i < calificaciones.length; i++) {
      const calificacion = calificaciones[i];
      if (typeof calificacion !== 'number' || calificacion < 0 || calificacion > 10) {
        throw new Error(`Calificación ${calificacion} no válida. Debe ser un número entre 0 y 10.`);
      }
    }
  
    const suma = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    const promedio = suma / calificaciones.length;
    return promedio;
  }
  
  // Uso de la función con try-catch
  
  calificaciones = [8, 9, 7, 10, 19]; 
  
  try {
    const promedio = calcularPromedio(calificaciones);
    console.log(`El promedio es: ${promedio}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
  
  
  //----------------------------------------------------------------
  //solucion alternativa
  
  function calcularPromedio(calificaciones) {
    //utilizando el metodo every para validar las notas
    const sonValidas = calificaciones.every(function (calificacion) {
      return typeof calificacion === 'number' && calificacion >= 0 && calificacion <= 10;
    });
  
    if (!sonValidas) {
      throw new Error('Una o más calificaciones no son válidas');
    }
  
    const total = calificaciones.reduce(function (acumulador, calificacion) {
      return acumulador + calificacion;
    }, 0);
  
    const promedio = total / calificaciones.length;
    return promedio;
  }
  
  const calificaciones = [8, 9, 7, 10, 'once'];
  
  try {
    const promedio = calcularPromedio(calificaciones);
    console.log(`El promedio es: ${promedio}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
  
  
  
  
  //Solucion sin utlizar el metodo reduce
  //----------------------------------------------------------------
  calificaciones = [
    { nombre: "Maria", notas: [9, 4, 6, 8, 2] },
    { nombre: "Jose", notas: [10, 4, 5.5, 9, 1] },
    { nombre: "Carlos", notas: [8, 6, 6, 75, 10] },
  ]; 
  
  
  function calcularPromedio(calificaciones) {
    try {
        let totalNotas = 0;
        let cantidadNotas = 0;
  
        for (let estudiante of calificaciones) {
            for (let nota of estudiante.notas) {
                if (typeof nota !== 'number' || nota < 0 || nota > 10) {
                    throw new Error(`Nota inválida encontrada: ${nota}`);
                }
                totalNotas += nota;
                cantidadNotas++;
            }
        }
  
        const promedio = totalNotas / cantidadNotas;
        return promedio;
  
    } catch (error) {
        console.error(error.message);
        return null;
    }
  }
  
  
  // Llamada a la función y resultado
  const promedio = calcularPromedio(calificaciones);
  
  if (promedio !== null) {
    console.log(`El promedio de calificaciones es: ${promedio}`);
  } else {
    console.log('No se pudo calcular el promedio debido a calificaciones inválidas.');
  }
  