import React from "react";

export default function Libros() {
  //tenemos un listado cualquiera
  const listaLibros = [
    { id: 1, titulo: "El Hobbit", autor: "J.R.R. Tolkien" },
    { id: 2, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez" },
    { id: 3, titulo: "1984", autor: "George Orwell" },
  ];

  return (
    <>
      <ul>
        {/* podemos recorrer ese listado con la funcion map de js */}
        {listaLibros.map(
          //   () = {return }
          //   () = { <li></li> }
          //   (libro) =  <li>libro.titulo</li>
          //   (libro) =  (<li>libro.titulo</li>)

          // como map recibe como parametro una function, en esa funcion yo retorno algo
          (unLibro) => (
            <li key={unLibro.id}>{unLibro.autor}</li>
          )
        )}
      </ul>
    </>
  );
}

//map recorre arrays -> al recorrer elemento por elemento puero retornar alguna operacion por cada uno de estos elementos
