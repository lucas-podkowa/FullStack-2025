import "./styles/misEstilos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Loan from "./pages/Loan";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      {/* fuera de las rutas se coloca la barra de navegacion para que esté siempre visible */}
      <main className="home-page">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          {/* Ruta padre */}
          <Route path="/libros" element={<Books />}>
            {/* Ruta hija */}
            <Route path=":id" element={<BookDetail />} />
          </Route>

          <Route path="/reservas" element={<Loan></Loan>}></Route>
          <Route path="/nosotros" element={<About></About>}></Route>
          {/* la ruta de escape/falla siempre se coloca al final */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
