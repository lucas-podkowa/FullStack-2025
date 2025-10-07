import "./styles/misEstilos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Loan from "./pages/Loan";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Libros from "./pruebas/map";
import Gancho from "./pruebas/Gancho";
import Login from "./pages/auth/Login";
import Articulos from "./pruebas/Articulos";
import Usuarios from "./pages/auth/Usuarios";
import LoginHook from "./pages/auth/Login_hook";
import AxiosPosts from "./pruebas/AxiosPost";

// importacion de libros
import Books from "./pages/book/Books";
import BookCreate from "./pages/book/BookCreate";
import BookEdit from "./pages/book/BookEdit";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Menu></Menu>
      {/* fuera de las rutas se coloca la barra de navegacion para que esté siempre visible */}

      <section className="contenido">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginHook />}></Route>
          <Route path="/articulos" element={<Articulos />}></Route>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/testmap" element={<Libros />}></Route>
          <Route path="/gancho" element={<Gancho />}></Route>

          <Route path="/articulos_axios" element={<AxiosPosts />}></Route>

          <Route path="/libro/crear" element={<BookCreate />} />
          <Route path="/libro/editar/:id" element={<BookEdit />}></Route>

          {/* Ruta padre */}
          <Route path="/libros" element={<Books />}>
            {/* Ruta hija */}
            <Route path=":id" element={<BookDetail />} />
          </Route>

          <Route path="/reservas/" element={<Loan></Loan>}></Route>
          <Route path="/nosotros" element={<About></About>}></Route>
          {/* la ruta de escape/falla siempre se coloca al final */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </section>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
