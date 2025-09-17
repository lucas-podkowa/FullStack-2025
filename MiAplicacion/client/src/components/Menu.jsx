import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <header>
      <nav className="menu-principal">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/libros">Libros</Link>
          </li>
          <li>
            <Link to="/reservas">Reservas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
