// /pages/BookDetail.jsx
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();

  // Acá hacemos un fetch real al backend con ese 'id' para traer más datos
  // useEffect(() => { fetch(`/api/books/${id}`) ... }, [id]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Detalles del libro {id}</h2>
      <p>Mostramos más información del libro seleccionado.</p>
    </div>
  );
}
