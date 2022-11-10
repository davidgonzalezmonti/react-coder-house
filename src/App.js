import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Routes, Route} from 'react-router-dom';
import {Home} from "./page/home/Home";
import {Catalogo} from "./page/catalogo/Catalogo";
import {DetailItem} from "./page/detailItem/DetailItem";
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogo" element={<Catalogo />} />
          <Route exact path="/detailItem/:stickerId" element={<DetailItem />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;