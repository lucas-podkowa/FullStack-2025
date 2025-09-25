import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//import { loguearme } from "../services/apiServices";

export default function Login() {
  let confToast = {
    position: "bottom-center",
    autoClose: 1000,
    theme: "light",
  };

  const navigate = useNavigate();
  //onSubmit --> atrapa los datos del formulario
  //onChange --> attrapa los datos del elemento donde lo tengo declarado
  //e --> objeto que nos devuelve el evento onChange
  //e.target --> el elemento que esta distaparando el evento
  //e.target.value --> valor del elemento que esta disparando el evento

  //proceso:
  // tomar los datos del formulario y enviar al backend con un apicall,
  // esperar la respuesta del backend
  // si el login es exitoso redireccionar a la página principal
  // si el login falla, mostrar el mensaje de error correspondiente en consola

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const toDoLogin = async () => {
      console.log("enviando datos del formulario");
      //esto no es JSON puro, sino un Objeto JS
      let datos_usuario = {
        mail: mail,
        pass: pass,
      };

      try {
        const url = "http://localhost:3000/api/auth/login";
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("permiso"),
            //authorization: localStorage.permiso,
          },
          body: JSON.stringify(datos_usuario),
        };

        const response = await fetch(url, parametros);

        let body = await response.json();

        if (response.ok) {
          sessionStorage.setItem("permiso", body.token);
          navigate("/");
        } else {
          toast.error(body.message, confToast);
        }
      } catch (error) {
        //mostrar mensajes personalizados

        toast.error(error.message, confToast);
      }
    };

    toDoLogin();
  };

  return (
    <section className="section_login">
      <form onSubmit={handleSubmit} className="container_login">
        <div>
          <label className="label_login">Email</label>
          <input
            onChange={(e) => setMail(e.target.value)}
            className="input_login"
            type="text"
          />
        </div>
        <div>
          <label className="label_login">Contraseña</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            className="input_login"
            type="text"
          />
        </div>
        <div className="div_btn">
          <input className="btn_login" type="submit" value={"Ingresar"} />
        </div>
      </form>
    </section>
  );
}
