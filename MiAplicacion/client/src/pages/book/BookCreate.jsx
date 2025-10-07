import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function BookCreate() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
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

  //-------------------------------------------------------
  // no necesitamos pre-cargar, no hay useEffect
  //-------------------------------------------------------

  //-------------------------------------------------------
  // Validación de campos y seteo de errores
  //-------------------------------------------------------

  const validate = () => {
    const newErrors = {};
    if (!book.titulo) newErrors.titulo = "Título es requerido";
    if (!book.autor) newErrors.autor = "Autor es requerido";
    if (!book.editorial) newErrors.editorial = "Editorial es requerido";
    if (!book.anio_publicacion)
      newErrors.anio_publicacion = "Año de publicación es requerido";
    if (!book.genero) newErrors.genero = "Género es requerido";
    if (book.existencias === "")
      newErrors.existencias = "Existencias es requerido";

    return newErrors;
  };

  //-------------------------------------------------------
  // Manejar cambios en los inputs
  //-------------------------------------------------------
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });

    /*
    Toma el name del input (titulo, autor, etc.).
    Crea una copia del objeto book actual con ...book.
    Actualiza solo la propiedad correspondiente con el valor nuevo.
    Ejemplo: si escribís en el input autor, React actualiza book.autor sin perder el resto de los campos.
    */
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

    try {
      /*
        e.target.value siempre devuelve string, incluso en <input type="number" por lo que  
        si el backend espera números enteros, tenemos que parsearlos antes de enviar
      */
      const url = "http://localhost:3000/api/libros";
      const payload = {
        ...book,
        anio_publicacion: parseInt(book.anio_publicacion, 10),
        existencias: parseInt(book.existencias, 10),
      };
      // crear Libro
      const response = await axios.post(url, payload);

      if (response.status === 201 || response.status === 200) {
        toast.success("Libro creado con exito", confToast);
        navigate("/libros");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, confToast);
    }
  };

  return (
    <section className="section_forms">
      <form className="container_form" onSubmit={handleSubmit}>
        <div>
          {/* <label className="label_form">Título</label> */}
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            onChange={handleChange}
            className="input_form"
          />
          {errors.titulo && <span>{errors.titulo}</span>}
        </div>

        <div>
          {/* <label className="label_form">Autor</label> */}
          <input
            type="text"
            name="autor"
            placeholder="Autor"
            onChange={handleChange}
            value={book.autor}
            className="input_form"
          />
          {errors.autor && <span>{errors.autor}</span>}
        </div>

        <div>
          {/* <label className="label_form">Editorial</label> */}
          <input
            type="text"
            name="editorial"
            placeholder="Editorial"
            onChange={handleChange}
            className="input_form"
          />
          {errors.editorial && <span>{errors.editorial}</span>}
        </div>

        <div>
          {/* <label className="label_form">Año de publicación</label> */}
          <input
            type="text"
            name="anio_publicacion"
            placeholder="Año de publicación"
            onChange={handleChange}
            className="input_form"
          />
          {errors.anio_publicacion && <span>{errors.anio_publicacion}</span>}
        </div>

        <div>
          {/* <label className="label_form">Género</label> */}
          <input
            type="text"
            name="genero"
            placeholder="Género"
            onChange={handleChange}
            className="input_form"
          />
          {errors.genero && <span>{errors.genero}</span>}
        </div>

        <div>
          {/* <label className="label_form">Existencias</label> */}
          <input
            type="number"
            name="existencias"
            placeholder="Existencias"
            onChange={handleChange}
            className="input_form"
          />
          {errors.existencias && <span>{errors.existencias}</span>}
        </div>

        <div className="div_btn">
          <button type="submit" className="btn_login">
            Crear libro
          </button>
        </div>
      </form>
    </section>
  );
}

export default BookCreate;
