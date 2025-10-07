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

export default function LoginHook() {
  let confToast = {
    position: "bottom-center",
    autoClose: 1000,
    theme: "light",
  };

  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({});

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

  const handleBlur = (field) => {
    const newErrors = { ...errors }; //desde cero

    if (field === "mail") {
      if (!mail) {
        newErrors.mail = "El correo es obligatorio"; //aca cargo errores en el objeto newError
      } else if (!isValidEmail(mail)) {
        newErrors.mail = "Por favor, ingresa un correo electrónico válido"; //aca cargo errores en el objeto newError
      } else {
        delete newErrors.mail; //si no hay errores limpio el campo mail del objeto de errors
      }
    }
    if (field === "pass") {
      if (!pass) {
        newErrors.pass = "La contraseña es obligatoria";
      } else if (!isValidPassword(pass)) {
        newErrors.pass =
          "La contraseña debe tener al menos 8 caracteres, incluir un número y una mayúscula";
      } else {
        delete newErrors.pass;
      }
    }

    setErrors(newErrors); //seteo mi variable de estado error con su hook serError y le envio los errores generados (que puede estar vacio)
  };

  const validateForm = () => {
    //evento cuando el componente piede el foco, cuando se sale de el
    handleBlur("mail");
    handleBlur("pass");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //invocamos la funcion que valida obligatoriamente mi formilario
    //aunque no le haya puestoel foco en ningun input
    validateForm();
    if (Object.entries(errors).length > 0) {
      return; // si hay errores entonces retorna y no sigue con el toDoLogin
    }

    // Object.keys(obj) → devuelve solo las claves del objeto.
    // Object.values(obj) → devuelve solo los valores del objeto.
    // Object.entries(obj) → devuelve pares clave-valo

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
            onBlur={() => handleBlur("mail")}
            className="input_form"
            type="text"
          />
          {/* se muestra un mensajito con el error */}
          {errors.pass && (
            <div className="alert alert-warning mt-2" role="alert">
              {errors.mail}
            </div>
          )}
        </div>
        <div>
          <label className="label_form">Contraseña</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            onBlur={() => handleBlur("pass")}
            className="input_form"
            type="text"
          />
          {/* se muestra un mensajito con el error */}
          {errors.pass && (
            <div className="alert alert-warning mt-2" role="alert">
              {errors.pass}
            </div>
          )}
        </div>
        <div className="div_btn">
          <input className="btn_login" type="submit" value={"Ingresar"} />
        </div>
      </form>
    </section>
  );
}
