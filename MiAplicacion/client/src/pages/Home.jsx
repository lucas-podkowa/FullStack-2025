import React from "react";

export default function Home() {
  //variable booleana utilizada en el renderizado condicional
  let isLogin = true;

  const cuandoHagaClicHaceEsto = () => {
    alert("me han presionado");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      {/* renderizado en base a una codicion, se lo llama Operador Ternario */}
      {isLogin ? (
        <nav>
          <a href="">Nosotros</a>
          <a href="">Ellos</a>
        </nav>
      ) : (
        <nav>
          <a href="">Iniciar Sesion</a>
        </nav>
      )}


      <button onClick={cuandoHagaClicHaceEsto} className="btn">
        Enviar
      </button>

      <input onChange={handleChange} type="text" />
    </>
  );
}


//-----------------------------------------------------------------------
// esta funcion simplemente muestra como se comporta un operador ternario

export function Ternario() {
  const isEmployed = true;

  // ------- como lo haríamos mediante un if-else

  //   if (isEmployed) {
  //     return <h1> Tengo Empleo</h1>;
  //   } else {
  //     return <h1> Estoy Desempleado</h1>;
  //   }


  // ------- como lo hacemos mediante un condicional
  return <h1>{isEmployed ? "Tengo Empleo" : "Estoy Desempleado"}</h1>;
}
