import Item from "./Item";

const ItemList = ({ item = [], goToDetail }) => {
  return (
    <div className="conteiner-card">
      {item.map((stickers) => (
        <Item key={stickers.id} item={stickers} goToDetail={goToDetail} />
      ))}
    </div>
  );
};

export default ItemList;
