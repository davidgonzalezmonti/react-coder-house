//*    COMPOPNENTE DESTINADO A MOSTRAR INFOMRACION BREVE DEL PRODUCTO QUE EL USER CLICKEARA LUEGO PARA ACCEDER A  [VER MAS DETALLES]

const Item = ({id, imagen, nombre}) => {
  return(
<div key={id} className="card-productos">
  <div className="card-img-conteiner">
  <img src={imagen} alt="imageStickers" className="card-img"/>
  </div>
  <h2>{nombre}</h2>
<button className="boton-card">VER MAS DETALLES</button>
</div>
)
};


  export default Item;


  // const Item = ({item}) => {
//     return(
//  <div className="conteiner-card" >
//     {item.map((sticker) =>(
//   <div key={sticker.id} className="card-productos">
//     <img src={sticker.imagen} alt="logo" />
//     <h2>{sticker.nombre}</h2>
//     {/* <ul>
//       <li> Tamaño: {sticker.tamaño}</li>
//       <li> Anime: {sticker.anime}</li>
//       <li><b>${sticker.precio}</b></li>
//     </ul> */}
// <button className="boton-card">VER MAS DETALLES</button>
//   </div>
//     ))}
//   </div>
//   )
// };
