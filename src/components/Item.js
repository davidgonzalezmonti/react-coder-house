//*    COMPOPNENTE DESTINADO A MOSTRAR INFOMRACION BREVE DEL PRODUCTO QUE EL USER CLICKEARA LUEGO PARA ACCEDER A  [VER MAS DETALLES]

import {useNavigate} from 'react-router-dom'
// id, imagen, nombre
const Item = ({item}) => {
  const {id, imagen, nombre} = item;
  const navigate = useNavigate();
  const handleDetail = () => {
      navigate(`/detailItem/${id}`, {state: item});
  }
  

  return(
<div key={id} className="card-productos">
  <div className="card-img-conteiner">
  <img src={imagen} alt="imageStickers" className="card-img"/>
  </div>
  <h2>{nombre}</h2>
<button className="boton-card" onClick={handleDetail}>VER MAS DETALLES</button>
</div>
)
};


  export default Item;
