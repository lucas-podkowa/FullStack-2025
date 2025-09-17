import "./../styles/misEstilos.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        // Simulación de datos
        const data = [
          {
            id: 1,
            title: "Velas y otras técnicas de Extremo Oriente",
            author: "Steve Nison",
            price: 78999,
            image: "https://robohash.org/1",
          },
          {
            id: 2,
            title: "Secretos para ganar en mercados alcistas y bajistas",
            author: "Stan Weinstein",
            price: 55800,
            image: "https://robohash.org/2",
          },
          {
            id: 3,
            title: "Master The Markets",
            author: "Tom Williams",
            price: 33000,
            image: "https://robohash.org/3",
          },
          {
            id: 4,
            title: "La Psicología del Dinero",
            author: "Morgan Housel",
            price: 25000,
            image: "https://robohash.org/4",
          },
        ];

        setBooks(data);
      } catch (error) {
        console.error("Error al traer libros:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Cargando libros...</p>;
  }

  return (
    <>
      <div className="books-container">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            image={book.image}
          />
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default Books;
