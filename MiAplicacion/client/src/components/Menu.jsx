import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Menu.css";
import { jwtDecode } from "jwt-decode";

function Menu() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [rol, setRol] = useState("");

  useEffect(() => {
    const t = sessionStorage.getItem("permiso");

    // if (t) {
    //   const decoded = jwtDecode(t);
    //   setRol(decoded.rol);
    // } else {
    //   setRol(null);
    // }

    setRol(t ? jwtDecode(t)?.rol : null);
    //seteo el rol con un valor valido o con null
    //eso depende de dos condiciones, si tengo token y si al decodificar tengo el rol

    // t && setRol(jwtDecode(t).rol);

    if (t !== token) {
      setToken(t);
      //significa actualizar mi estado interno para tener el ultimo token valido siempre
    }
  });

  const logout = () => {
    sessionStorage.removeItem("permiso");
    setToken("");
    navigate("/");
  };

  if (token !== "" && token !== null) {
    return (
      <header>
        <nav className="menu-principal">
          <ul className="menu-lista">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/libros">Libros</Link>
            </li>
            <li>
              <Link to="/reservas">Reservas</Link>
            </li>

            {/* si podria ser si quisieramos agregar un nuevo enlace donde solo determinado rol tenga acceso al mismo */}
            {/* {rol && rol === 1 ? (
              <li>
                <Link to="/libro/crear">Nuevo Libro</Link>
              </li>
            ) : null} */}

            <li>
              <Link to="/gancho">Hook</Link>
            </li>
            <li>
              <Link to="/articulos_axios">Articulos (Axios)</Link>
            </li>
            <li>
              <Link to="/articulos">Artiulos (fetch)</Link>
            </li>
            <li>
              <Link to="/usuarios">Usuarios</Link>
            </li>
            {/* esto es un ternario tambien conocido como
            renderizado condicional el nombre especifico es: Short-circuit
            operator */}
            <li className="login-btn">
              {token ? (
                <button className="btn btn-secondary" onClick={() => logout()}>
                  <span className="material-symbols-outlined">
                    Cerrar Sesión
                  </span>
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav className="menu-principal">
          <ul className="menu-lista">
            <li className="login-btn">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
