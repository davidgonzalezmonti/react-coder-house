import './App.css';
import NavBar from "./components/NavBar";

import logoStickers from "../src/img/icono.webp";

function App() {
  return (
    <div className="container">
             <NavBar 
             logo={logoStickers}
             inicio="INICIO" 
             carrito="MI CARRITO" 
             contacto="CONTACTO"
             ></NavBar>
    </div>
  );
}

export default App;
