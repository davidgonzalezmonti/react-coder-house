import './App.css';
import React from 'react';
import Navbar from "./components/navbar/Navbar";
import {Routes, Route} from 'react-router-dom';
import {Home} from "./page/home/Home";
import {Catalogo} from "./page/catalogo/Catalogo";
import {DetailItem} from "./page/detailItem/DetailItem";
import Footer from './components/footer/Footer';
import {Cart} from "./components/cart/Cart"
import CartProvider from './context/CartContext';



function App() {
  return (
    <div className="container">
      <CartProvider>
      <Navbar/>
      <main className='main-container'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/react-coder-house" element={<Home />} />
          <Route exact path="/catalogo" element={<Catalogo />} />
          <Route exact path="/catagorias/:categoriasId" element={<Catalogo />} />
          <Route exact path="/detailItem/:stickerId" element={<DetailItem />} />
          <Route exact path="/cart" element={<Cart />}  />
        </Routes>
      </main>
      </CartProvider>
      <Footer/>
    </div>
  );
}

export default App;