import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
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
          <li className="login-btn">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
