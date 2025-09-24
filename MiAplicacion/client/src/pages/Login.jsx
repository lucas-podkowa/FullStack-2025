// import { useState } from 'react';

export default function Login() {
  //onSubmit --> atrapa los datos del formulario
  //onChange --> attrapa los datos del elemento donde lo tengo declarado
  //e --> objeto que nos devuelve el evento onChange
  //e.target --> el elemento que esta distaparando el evento
  //e.target.value --> valor del elemento que esta disparando el evento

  return (
    <section className="section_login">
      <form className="container_login">
        <div>
          <label className="label_login">Email</label>
          <input className="input_login" type="text" />
        </div>
        <div>
          <label className="label_login">Contraseña</label>
          <input className="input_login" type="text" />
        </div>
        <div className="div_btn">
          <input className="btn_login" type="submit" value={"Ingresar"} />
        </div>
      </form>
    </section>
  );
}
