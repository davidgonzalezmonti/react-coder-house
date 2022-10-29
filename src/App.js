import './App.css';
import Navbar from "./components/Navbar";

import logoStickers from "../src/img/icono.webp";



function App() {
  return (
    <div className="container">
      <Navbar logo={logoStickers}></Navbar>
    </div>
  );
}

export default App;