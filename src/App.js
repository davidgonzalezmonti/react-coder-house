import './App.css';
import React from 'react';
import Navbar from "./components/navbar/Navbar";
import {Routes, Route} from 'react-router-dom';
import {Home} from "./page/home/Home";
import Footer from './components/footer/Footer';
import {Cart} from "./components/cart/Cart"
import CartProvider from './context/CartContext';
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';



function App() {
  return (
    <div className="container">
      <CartProvider>
      <Navbar/>
      <main className='main-container'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/react-coder-house" element={<Home />} />
          <Route exact path="/catalogo" element={<ItemListContainer />} />
          <Route exact path="/catagorias/:categoriaId" element={<ItemListContainer />} />
          <Route exact path="/detailItem/:detalleId" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />}  />
        </Routes>
      </main>
      </CartProvider>
      <Footer/>
    </div>
  );
}

export default App;