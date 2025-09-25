import "./styles/misEstilos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Loan from "./pages/Loan";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import BookDetail from "./components/BookDetail";
import Libros from "./pruebas/map";
import Gancho from "./pruebas/Gancho";
import Login from "./pages/Login";
import Articulos from "./pruebas/Articulos";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Menu></Menu>
      {/* fuera de las rutas se coloca la barra de navegacion para que esté siempre visible */}

      <section className="contenido">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/articulos" element={<Articulos />}></Route>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/testmap" element={<Libros />}></Route>
          <Route path="/gancho" element={<Gancho />}></Route>
          <Route path="/" element={<Home />}></Route>

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
