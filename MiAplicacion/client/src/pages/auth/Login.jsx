import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
//import { loguearme } from "../services/apiServices";

/*
{
  "mail": "lucas@example.com",
  "pass": "miClave123+"
}
*/

export default function Login() {
  let confToast = {
    position: "bottom-center",
    autoClose: 1000,
    theme: "light",
  };

  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  //expresion regular
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPassword = (password) => {
    return (
      password.length >= 6 &&
      /\d/.test(password) &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //si mis datos no son lo que necesito debo cortar aqui la funcion
    // es decir hacer un tipic return de js.

    if (!isValidEmail(mail)) {
      toast.error(
        "Por favor, ingresa un correo electrónico válido.",
        confToast
      );

      return; //al hacer un return corta el handleSubmit y no sigue con el fetch
    }

    if (!isValidPassword(pass)) {
      toast.error(
        "La contraseña debe tener al menos 8 caracteres, al menos 1 dígito y al menos una mayúscula",
        confToast
      );
      return;
    }

    const toDoLogin = async () => {
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
          const decoded = jwtDecode(body.token);

          // podemos colocar el rol en un sesion
          //-------------------------------------
          sessionStorage.setItem("role", decoded.rol);
          //-------------------------------------

          // opciones de uso, no es necesario, solo si se le ocurre algo similar
          if (decoded.rol === 1) {
            navigate("/reservas");
          } else {
            navigate("/");
          }
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
    <section className="section_forms">
      <form onSubmit={handleSubmit} className="container_form">
        <div>
          <label className="label_form">Email</label>
          <input
            onChange={(e) => setMail(e.target.value)}
            className="input_form"
            type="text"
          />
        </div>
        <div>
          <label className="label_form">Contraseña</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            className="input_form"
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
