import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    const t = sessionStorage.getItem("permiso");
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
            <li>
              <Link to="/gancho">Hook</Link>
            </li>
            <li>
              <Link to="/articulos">Articulos de Ejemplo</Link>
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
