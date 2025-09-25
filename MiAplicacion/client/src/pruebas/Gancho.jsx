import { useState, useEffect } from "react";

// useState devuelve un valor de estado y una función para actualizarlo.

export default function Gancho() {
  //el primer campo es la variable que queremos utilizar (estado)
  //el segundo campo es la funcion encargada de actualizar la variable anterior (actualiza ese estado)
  const [contador, setContador] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("ejecutandome");
    //aca puedo llamar otras funciones,
    //llamar otras apis
    //pasar datos a un archivos

    // return () => {
    //   //borrar datos del estado
    //   //borrar kookies
    // };
  }, []);

  function actualizarMail(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  //siempre definimos cada estado con un valor inicial, en el caso anterior con cero (0) y con un string vacio ("")

  const handleClic = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  //------------------------------------------------------------

  return (
    <>
      <h1>Cantidad en: {contador}</h1>
      <button onClick={handleClic}>Sumar</button>

      <hr />

      <input onChange={actualizarMail} type="text" />
      <button onClick={() => console.log(email)}>VerEmail</button>

      <h1>el mail es: {email}</h1>
    </>
  );
}
