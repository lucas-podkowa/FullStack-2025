import { useNavigate } from "react-router-dom";
import "./BookCard.css";

export default function BookCard({ book }) {
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
    </div>
  );
}
