//*   MOSTRAR DETALLE DEL ITEM INCLUYENDO DESCRIPCION, UNA FOTO Y PRECIO
import { useLocation } from "react-router-dom"
import { Count } from "./Count";

const ItemDetail = ({item}) => {
  // const params = useParams()
  const {state} = useLocation();


    return(
 <div className="conteiner-card" >
  <div key={state.id} className="card-productos">
    <div className="card-img-conteiner">
  <img src={state.imagen} alt="imageStickers" className="card-img"/>
  </div>
    <h2>{state.nombre}</h2>
    <ul>
      <li> Tamaño: {state.tamaño}</li>
      <li> Anime: {state.anime}</li>
      <li><b>${state.precio}</b></li>
    </ul>
    <Count/>
<button className="boton-card">AGREGAR AL CARRITO</button>
  </div>
    
  </div>
  )
};

export default ItemDetail


// <div className="conteiner-card" >
//     {itemDetail.map((sticker) =>(
//   <div key={sticker.id} className="card-productos">
//     <div className="card-img-conteiner">
//   <img src={sticker.imagen} alt="imageStickers" className="card-img"/>
//   </div>
//     <h2>{sticker.nombre}</h2>
//     <ul>
//       <li> Tamaño: {sticker.tamaño}</li>
//       <li> Anime: {sticker.anime}</li>
//       <li><b>${sticker.precio}</b></li>
//     </ul>
// <button className="boton-card">AGREGAR AL CARRITO</button>
//   </div>
//     ))}
//   </div>