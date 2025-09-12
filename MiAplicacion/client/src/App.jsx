import ConPropiedades from "./components/ConPropiedades.jsx";
import Menu from "./components/Menu.jsx";
import Home from "./pages/Home.jsx";

// aquí defino un componente como una funcion local (sin llevarla a un archivo .jsx)
// al estar dentro del mismo archivo no necesito exportarla 
const MenuLocal = () => {
  return (
    <nav style={{ fontSize: "2rem" }}>
      <ul style={{ listStyleType: "none", display: "flex", gap: "30px" }}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Libros</a>
        </li>
        <li>
          <a href="">reservas</a>
        </li>
      </ul>
    </nav>
  );
};


function App() {
  return (
    <>
      {/* hago uso del menu local */}
      <MenuLocal></MenuLocal>

      {/* llamo al menu externo (desde la carpeta components) */}
      <Menu />


      {/* llamo al componente home que se encuentra en la carpeta pages */}
      <Home />


      {/* utilizamos un componente al que le enviamos propiedades */}
      <ConPropiedades
        name="lucas" //string
        numero={1989} //numeros
        booleano={true} //boleanos 
        arreglos={[1, 3, "maria"]} // arreglos
        objetos={{ nombreCalle: "Primeros Colonos", numeroCalle: 1600 }} //objetos
      />
    </>
  );
}

export default App;
