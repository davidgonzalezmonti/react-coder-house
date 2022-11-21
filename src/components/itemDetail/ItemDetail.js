import "./ItemDetail.css";
import { Link, useLocation } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import {useState} from 'react'
import { useCartContext} from '../../context/CartContext'



export const ItemDetail = () => {
  const { state } = useLocation();
  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext();

const onAdd = (quantity) => {
  setGoToCart(true)
  addProduct(state, quantity)
}

  return (
    <section className="main-detail">
      <div className="conteiner-card-detail">
        <div key={state.id} className="card-productos-detail">
          <div className="card-img-conteiner-detail">
            <img
              src={state.imagen}
              alt="imageStickers"
              className="card-img-detail"
            />
          </div>
          <h2>{state.nombre}</h2>
          <ul>
            <li> Tamaño: {state.tamaño}</li>
            <li> Anime: {state.anime}</li>
            <li>
              <strong>${state.precio}</strong>
            </li>
          </ul>
          {
            goToCart ? <Link to="/cart" >Terminar compra</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
          }
          {
            goToCart ? <Link to="/catalogo" >Seguir comprando</Link> : <></> 
          }

        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
