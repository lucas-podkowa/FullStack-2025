import { useEffect, useState } from "react";

export default function Articulos() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        let data = await response.json();
        setData(data);
      } catch (error) {
        setError("Error al cargar los datos");
        console.error("Error en el Fetch:", error);
      } finally {
        setLoading(false);
      }
    }

    obtenerDatos();
  }, []);

  // AXIOS ---------------------------------------------------------------

  // useEffect(() => {
  //     const obtenerDatos = async () => {
  //         try {
  //             const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //             setData(res.data);
  //         } catch (err) {
  //             setError('Error al cargar los datos');
  //             console.error(err);
  //         } finally {
  //             setLoading(false);
  //         }
  //     };
  //     obtenerDatos();
  // }, []);

  // Mostrar estado de carga
  if (loading) {
    return <p>Cargando...</p>;
  }

  // Mostrar error en caso de fallo
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Listado de Posts</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Contenido</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
