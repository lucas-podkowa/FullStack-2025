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
  const { id, title, author, price, image } = book;

  const navigate = useNavigate();

  const handleClic = () => {
    navigate(`/libros/${id}`);
  };

  return (
    <div className="book-card">
      <img
        onClick={handleClic}
        src={image}
        alt={title}
        className="book-image"
      />
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <p className="book-price">${price}</p>
      <button className="book-button">Añadir al carrito</button>

      {rol && rol === 1 ? (
        <li>
          <Link to="/libro/edit" className="btn btn-danger">
            Editar
          </Link>
        </li>
      ) : null}
    </div>
  );
}
