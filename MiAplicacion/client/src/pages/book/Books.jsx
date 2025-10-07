import "./../../styles/misEstilos.css";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookCard from "./../../components/BookCard";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]); // todos los libros originales
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        // const query = new URLSearchParams({ searchTerm }).toString();
        // const response = await fetch(`http://localhost:3000/api/libros?${query}`);

        const response = await axios.get("http://localhost:3000/api/libros", {
          params: { searchTerm }, // pasamos el searchTerm como query param
        });
        setBooks(response.data);
        setAllBooks(response.data);
      } catch (error) {
        console.error("Error al traer libros:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  // Filtramos localmente cada vez que cambia el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setBooks(books);
    } else {
      const filtered = allBooks.filter((libro) =>
        libro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBooks(filtered);
    }
  }, [searchTerm, allBooks]);

  if (loading) {
    return <p>Cargando libros...</p>;
  }

  return (
    <>
      <Outlet />
      {/* añadimos el toolbar */}
      <div className="toolbar">
        <input
          type="text"
          placeholder="Buscar libro..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="buscador"
        />

        {/* añadimos la opcion de crear un nuevo libro si es administraor o bibliotecario */}

        {/* hort-circuit evaluation (&&) */}
        {(Number(sessionStorage.getItem("role")) === 1 ||
          Number(sessionStorage.getItem("role")) === 2) && (
          <div>
            <Link to="/libro/crear" className="btn-crear-libro">
              Nuevo Libro
            </Link>
          </div>
        )}

        {/* operador ternario (condición ? verdadero : falso) */}
        {Number(sessionStorage.getItem("role")) === 1 ||
        Number(sessionStorage.getItem("role")) === 2 ? (
          <div>
            <Link to="/libro/crear" className="btn-crear-libro">
              Nuevo Libro
            </Link>
          </div>
        ) : null}
      </div>

      {/* esta parte renderiza los cards, la idea es recorrer la listra de libros
      y pasarle cada libro individualmente apra que agregue un nuevo card */}
      <div className="books-container">
        {books.map((unLibro) => (
          <BookCard key={unLibro.id} book={unLibro} />
        ))}
      </div>
    </>
  );
}

export default Books;
