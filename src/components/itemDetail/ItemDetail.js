import "./ItemDetail.css";
import { Link,} from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import {useState} from 'react'
import { useCartContext} from '../../context/CartContext'

// import {getFirestore, collection, getDocs} from "firebase/firestore";



export const ItemDetail = ({data}) => {
  // const { state } = useLocation();
  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext();

const onAdd = (quantity) => {
  setGoToCart(true)
  addProduct(data, quantity)
}

  return (
    <section className="main-detail">
      <div className="conteiner-card-detail">
        <div key={data.id} className="card-productos-detail">
          <div className="card-img-conteiner-detail">
            <img
              src={data.imagen}
              alt="imageStickers"
              className="card-img-detail"
            />
          </div>
          <div className="description-detail">
          <h2>{data.nombre}</h2>
          <ul>
            <li>
              <strong>${data.precio}</strong>
            </li>
            <li> Tamaño: {data.tamaño}</li>
            <li> Anime: {data.anime}</li>
          </ul>
          <div className="button-detail" >
          {
            goToCart ? <Link to="/cart" >IR AL CARRITO</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
          }
          {
            goToCart ? <Link to="/catalogo" >SEGUIR COMPRANDO</Link> : <></> 
          }
          </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
