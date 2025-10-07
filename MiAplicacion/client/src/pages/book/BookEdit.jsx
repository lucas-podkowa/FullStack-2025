import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function BookEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState({
    titulo: "",
    autor: "",
    editorial: "",
    anio_publicacion: "",
    genero: "",
    existencias: "",
  });

  const confToast = {
    position: "bottom-center",
    autoClose: 1000,
    theme: "light",
  };

  useEffect(() => {
    const fetchBook = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/api/libros/${id}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error cargando libro:", error);
        toast.error("Error al cargar los datos del libro", confToast);
        navigate("/libros");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  //-------------------------------------------------------
  // Validación de campos y seteo de errores
  //-------------------------------------------------------
  const validate = () => {
    const newErrors = {};
    if (!book.titulo) newErrors.titulo = "Título is required";
    if (!book.autor) newErrors.autor = "Autor is required";
    if (!book.editorial) newErrors.editorial = "Editorial is required";
    if (!book.anio_publicacion)
      newErrors.anio_publicacion = "Año de publicación is required";
    if (!book.genero) newErrors.genero = "Género is required";
    if (!book.existencias) newErrors.existencias = "Existencias is required";
    return newErrors;
  };
  //-------------------------------------------------------
  // Manejar cambios en los inputs
  //-------------------------------------------------------
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  //-------------------------------------------------------
  // Manejar envío del formulario
  //-------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Preparar payload con tipos correctos
      const payload = {
        ...book,
        anio_publicacion: parseInt(book.anio_publicacion, 10),
        existencias: parseInt(book.existencias, 10),
      };
      /*
        e.target.value siempre devuelve string, incluso en <input type="number" por lo que  
        si el backend espera números enteros, tenemos que parsearlos antes de enviar
      */

      // Actualizar libro existente
      const response = await axios.put(
        `http://localhost:3000/api/libros/${id}`,
        payload
      );
      toast.success("Libro actualizado con éxito", confToast);

      // Redirigir a la lista de libros después del éxito
      if (response.status === 200 || response.status === 201) {
        setTimeout(() => navigate("/libros"), 1000);
      }
    } catch (error) {
      console.error("Error al guardar libro:", error);

      // Manejar diferentes tipos de errores
      if (error.response) {
        // Error del servidor con respuesta
        const message =
          error.response.data?.message || "Error al guardar el libro";
        toast.error(message, confToast);
      } else {
        // Otro tipo de error
        toast.error("Ocurrió un error inesperado", confToast);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <section className="section_forms">
        <div className="container_form">
          <p>Actualizando datos del libro...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section_forms">
      <form className="container_form" onSubmit={handleSubmit}>
        <input
          className="input_form"
          type="text"
          name="titulo"
          placeholder="Título"
          value={book.titulo}
          onChange={handleChange}
        />
        {errors.titulo && <span>{errors.titulo}</span>}
        <input
          className="input_form"
          type="text"
          name="autor"
          placeholder="Autor"
          value={book.autor}
          onChange={handleChange}
        />
        {errors.autor && <span>{errors.autor}</span>}
        <input
          className="input_form"
          type="text"
          name="editorial"
          placeholder="Editorial"
          value={book.editorial}
          onChange={handleChange}
        />
        {errors.editorial && <span>{errors.editorial}</span>}
        <input
          className="input_form"
          type="text"
          name="anio_publicacion"
          placeholder="Año de publicación"
          value={book.anio_publicacion}
          onChange={handleChange}
        />
        {errors.anio_publicacion && <span>{errors.anio_publicacion}</span>}
        <input
          className="input_form"
          type="text"
          name="genero"
          placeholder="Género"
          value={book.genero}
          onChange={handleChange}
        />
        {errors.genero && <span>{errors.genero}</span>}
        <input
          className="input_form"
          type="number"
          name="existencias"
          placeholder="Existencias"
          value={book.existencias}
          onChange={handleChange}
        />
        {errors.existencias && <span>{errors.existencias}</span>}
        <button type="submit">Actualizar libro</button>
      </form>
    </section>
  );
}

export default BookEdit;
