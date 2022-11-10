import './App.css';
import Navbar from "./components/Navbar";
import logoStickers from "../src/img/icono.webp";
import {Routes, Route} from 'react-router-dom';
import {Home} from "./page/home/Home";
import {Catalogo} from "./page/catalogo/Catalogo";
import {DetailItem} from "./page/detailItem/DetailItem";
// import { Home,Catalogo,DetailItem } from "./pages";


function App() {
  return (
    <div className="container">
      <Navbar logo={logoStickers}></Navbar>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogo" element={<Catalogo />} />
          <Route exact path="/detailItem/:stickerId" element={<DetailItem />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;