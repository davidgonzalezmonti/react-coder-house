import {useNavigate} from 'react-router-dom'
import './ItemList.css'

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
