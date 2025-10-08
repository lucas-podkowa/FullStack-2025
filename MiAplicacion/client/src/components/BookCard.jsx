import { useNavigate, Link } from "react-router-dom";
import "./BookCard.css";

import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export default function BookCard({ book }) {
  const [rol, setRol] = useState("");

  useEffect(() => {
    const t = sessionStorage.getItem("permiso");
    if (t) {
      const decoded = jwtDecode(t);
      setRol(decoded.rol);
    }
  });

  // Desestructuración del objeto recibido
  const { id_libro, titulo, autor, editorial, image_url } = book;
  const navigate = useNavigate();

  const handleClic = () => {
    // navigate(`/libros/${id}`);
  };

  return (
    <div onClick={handleClic} className="book-card ">
      <img
        onClick={handleClic}
        src={image_url}
        alt={titulo}
        className="book-image"
      />
      <h3>{titulo}</h3>
      <p>{autor}</p>
      <p>{editorial}</p>

      {rol && rol === 1 ? (
        <li>
          {/* <Link to="/libro/editar/{id}" className="btn-crear-libro"> */}
          <Link to={`/libro/editar/${id_libro}`} className="btn-crear-libro">
            Editar
          </Link>
        </li>
      ) : null}
    </div>
  );
}
