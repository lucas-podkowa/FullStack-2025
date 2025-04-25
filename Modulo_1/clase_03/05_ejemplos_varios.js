/*
Pida un número entero del 1 al 5.
Muestre un mensaje que diga "El número es X" por cada número desde 1 hasta el número ingresado.
Calcule la suma de los números desde 1 hasta ese número.
*/

//Solución con bucle while

let suma = 0;
let i = 1;

while (i <= numero) {
  console.log(`El número es ${i}`);
  suma += i;
  i++;
}
console.log(`La suma de los números es: ${suma}`);

//----------------------------------------------------------------

//Solución con bucle do...while
suma = 0;
i = 1;

do {
  console.log(`El número es ${i}`);
  suma += i;
  i++;
} while (i <= numero);

console.log(`La suma de los números es: ${suma}`);

//----------------------------------------------------------------
//Solución con bucle for (normal)
numero = 5; 
suma = 0;

for (let i = 1; i <= numero; i++) {
  console.log(`El número es ${i}`);
  suma += i;
}

console.log(`La suma de los números es: ${suma}`);


//------------------------------------------------------------------
/*
Tienes una lista de estudiantes con sus nombres y calificaciones. El objetivo es recorrer esta lista para:

  - Mostrar todos los nombres.
  - Sumar todas las calificaciones.
  - Calcular el promedio de las calificaciones.
*/

const estudiantes = [
    { nombre: 'Lucas', calificacion: 8 },
    { nombre: 'Ana', calificacion: 9 },
    { nombre: 'Pedro', calificacion: 7 },
    { nombre: 'Carla', calificacion: 10 }
  ];
  
  //solucion con while
  
  suma = 0;
  i = 0;
  
  while (i < estudiantes.length) {
    console.log(`Nombre: ${estudiantes[i].nombre}`);
    suma += estudiantes[i].calificacion;
    i++;
  }
  
  const promedio = suma / estudiantes.length;
  console.log(`Suma de calificaciones: ${suma}`);
  console.log(`Promedio: ${promedio}`);
  
  //solucion con for nomal
  suma = 0;
  
  for (let i = 0; i < estudiantes.length; i++) {
    console.log(`Nombre: ${estudiantes[i].nombre}`);
    suma += estudiantes[i].calificacion;
  }
  
  promedio = suma / estudiantes.length;
  console.log(`Suma de calificaciones: ${suma}`);
  console.log(`Promedio: ${promedio}`);
  
  //solucion con forOf
  suma = 0;
  
  for (const estudiante of estudiantes) {
    console.log(`Nombre: ${estudiante.nombre}`);
    suma += estudiante.calificacion;
  }
  promedio = suma / estudiantes.length;
  console.log(`Suma de calificaciones: ${suma}`);
  console.log(`Promedio: ${promedio}`);
  
  //solucion con forIn
  suma = 0;
  
  for (const indice in estudiantes) {
    console.log(`Nombre: ${estudiantes[indice].nombre}`);
    suma += estudiantes[indice].calificacion;
  }
  
  promedio = suma / estudiantes.length;
  console.log(`Suma de calificaciones: ${suma}`);
  console.log(`Promedio: ${promedio}`);
  