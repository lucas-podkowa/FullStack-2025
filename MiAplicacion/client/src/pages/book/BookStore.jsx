import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function BookStore() {
  // Si hay ID, es edición; si no, es creación
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
  const isEditMode = Boolean(id);

  const confToast = {
    position: "bottom-center",
    autoClose: 1000,
    theme: "light",
  };

  //-------------------------------------------------------
  // Cargar datos del libro si estamos en modo edición
  //-------------------------------------------------------
  useEffect(() => {
    const fetchBook = async () => {
      if (!isEditMode) return;

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
  }, [id, isEditMode]);

  //-------------------------------------------------------
  // Validación de campos y seteo de errores
  //-------------------------------------------------------

  const validate = () => {
    const newErrors = {};

    if (!book.titulo?.trim()) {
      newErrors.titulo = "Título es requerido";
    }

    if (!book.autor?.trim()) {
      newErrors.autor = "Autor es requerido";
    }

    if (!book.editorial?.trim()) {
      newErrors.editorial = "Editorial es requerido";
    }

    if (!book.anio_publicacion) {
      newErrors.anio_publicacion = "Año de publicación es requerido";
    } else {
      const anio = parseInt(book.anio_publicacion, 10);
      const currentYear = new Date().getFullYear();
      if (anio < 1000 || anio > currentYear) {
        newErrors.anio_publicacion = `Año debe estar entre 1000 y ${currentYear}`;
      }
    }

    if (!book.genero?.trim()) {
      newErrors.genero = "Género es requerido";
    }

    if (book.existencias === "" || book.existencias === null) {
      newErrors.existencias = "Existencias es requerido";
    } else {
      const existencias = parseInt(book.existencias, 10);
      if (existencias < 0) {
        newErrors.existencias = "Existencias no puede ser negativo";
      }
    }

    return newErrors;
  };

  //-------------------------------------------------------
  // Manejar cambios en los inputs
  //-------------------------------------------------------

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;

    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));

    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  //-------------------------------------------------------
  // Manejar envío del formulario
  //-------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar antes de enviar
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.warning(
        "Por favor, corrija los errores en el formulario",
        confToast
      );
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

      let response;

      if (isEditMode) {
        // Actualizar libro existente
        response = await axios.put(
          `http://localhost:3000/api/libros/${id}`,
          payload
        );
        toast.success("Libro actualizado con éxito", confToast);
      } else {
        // Crear nuevo libro
        response = await axios.post(
          "http://localhost:3000/api/libros",
          payload
        );
        toast.success("Libro creado con éxito", confToast);
      }

      // Redirigir a la lista de libros después del éxito
      if (response.status === 200 || response.status === 201) {
        setTimeout(() => navigate("/libros"), 1000);
      }
    } catch (error) {


      if (error.response) {
        const data = error.response.data;

        // Si viene un array de errores del backend (express-validator)
        if (Array.isArray(data.errors)) {
          data.errors.forEach((err) => {
            toast.error(err.msg, confToast);
          });
        }
        // Si viene un mensaje simple (otro tipo de error)
        else if (data.message) {
          toast.error(data.message, confToast);
        } else {
          toast.error("Error al guardar el libro", confToast);
        }
      } else {
        toast.error("Ocurrió un error inesperado", confToast);
      }



      // if (error.response) {
      //   const message =
      //     error.response.data?.message || "Error al guardar el libro";
      //   toast.error(message, confToast);
      // } else {
      //   toast.error("Ocurrió un error inesperado", confToast);
      // }
    } finally {
      setIsLoading(false);
    }
  };

  // Manejar cancelación
  const handleCancel = () => {
    navigate("/libros");
  };

  if (isLoading && isEditMode) {
    return (
      <section className="section_forms">
        <div className="container_form">
          <p>Cargando datos del libro...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section_forms">
      <form className="container_form" onSubmit={handleSubmit}>
        <h2>{isEditMode ? "Editar Libro" : "Crear Nuevo Libro"}</h2>

        {/* Título */}
        <div>
          <label className="label_form">Título *</label>
          <input
            type="text"
            name="titulo"
            placeholder="Título del libro"
            value={book.titulo}
            onChange={handleChange}
            className={`input_form ${errors.titulo ? "input-error" : ""}`}
            disabled={isLoading}
          />
          {errors.titulo && (
            <span className="error-message">{errors.titulo}</span>
          )}
        </div>

        {/* Autor */}
        <div>
          <label className="label_form">Autor *</label>
          <input
            type="text"
            name="autor"
            placeholder="Nombre del autor"
            value={book.autor}
            onChange={handleChange}
            className={`input_form ${errors.autor ? "input-error" : ""}`}
            disabled={isLoading}
          />
          {errors.autor && (
            <span className="error-message">{errors.autor}</span>
          )}
        </div>

        {/* Editorial */}
        <div>
          <label className="label_form">Editorial *</label>
          <input
            type="text"
            name="editorial"
            placeholder="Editorial"
            value={book.editorial}
            onChange={handleChange}
            className={`input_form ${errors.editorial ? "input-error" : ""}`}
            disabled={isLoading}
          />
          {errors.editorial && (
            <span className="error-message">{errors.editorial}</span>
          )}
        </div>

        {/* Año de publicación */}
        <div>
          <label className="label_form">Año de publicación *</label>
          <input
            type="number"
            name="anio_publicacion"
            placeholder="2024"
            value={book.anio_publicacion}
            onChange={handleChange}
            className={`input_form ${errors.anio_publicacion ? "input-error" : ""
              }`}
            disabled={isLoading}
            min="1000"
            max={new Date().getFullYear()}
          />
          {errors.anio_publicacion && (
            <span className="error-message">{errors.anio_publicacion}</span>
          )}
        </div>

        {/* Género */}
        <div>
          <label className="label_form">Género *</label>
          <input
            type="text"
            name="genero"
            placeholder="Ficción, No ficción, etc."
            value={book.genero}
            onChange={handleChange}
            className={`input_form ${errors.genero ? "input-error" : ""}`}
            disabled={isLoading}
          />
          {errors.genero && (
            <span className="error-message">{errors.genero}</span>
          )}
        </div>

        {/* Existencias */}
        <div>
          <label className="label_form">Existencias *</label>
          <input
            type="number"
            name="existencias"
            placeholder="0"
            value={book.existencias}
            onChange={handleChange}
            className={`input_form ${errors.existencias ? "input-error" : ""}`}
            disabled={isLoading}
            min="0"
          />
          {errors.existencias && (
            <span className="error-message">{errors.existencias}</span>
          )}
        </div>

        {/* Botones */}
        <div className="div_btn">
          <button
            type="button"
            className="btn_cancel"
            onClick={handleCancel}
            disabled={isLoading}
          >
            Cancelar
          </button>
          <button type="submit" className="btn_login" disabled={isLoading}>
            {isLoading
              ? "Guardando..."
              : isEditMode
                ? "Actualizar libro"
                : "Crear libro"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default BookStore;
