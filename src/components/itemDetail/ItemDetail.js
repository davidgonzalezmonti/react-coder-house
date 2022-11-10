
import { Link, useLocation } from "react-router-dom"
import { Count } from "../count/ItemCount";
import './ItemDetail.css';



const ItemDetail = () => {
  const {state} = useLocation();


    return(
 <div className="conteiner-card-detail" >
  <div key={state.id} className="card-productos-detail">
    <div className="card-img-conteiner-detail">
  <img src={state.imagen} alt="imageStickers" className="card-img-detail"/>
  </div>
    <h2>{state.nombre}</h2>
    <ul>
      <li> Tamaño: {state.tamaño}</li>
      <li> Anime: {state.anime}</li>
      <li><strong>${state.precio}</strong></li>
    </ul>
    <Count/>
<Link className="boton-card-detail"  to={"/catalogo"}>AGREGAR AL CARRITO</Link>
  </div>
    
  </div>
  )
};

export default ItemDetail