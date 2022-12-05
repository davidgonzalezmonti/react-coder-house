import "./ItemList.css";

const Item = ({ item, goToDetail }) => {
  const { id, imagen, nombre } = item;

  return (
    <div key={id} className="card-productos">
      <div className="card-img-conteiner">
        <img src={imagen} alt="imageStickers" className="card-img" />
      </div>
      <h2>{nombre}</h2>
      <button className="boton-card" onClick={() => goToDetail(item)}>
        VER MAS DETALLES
      </button>
    </div>
  );
};

export default Item;
