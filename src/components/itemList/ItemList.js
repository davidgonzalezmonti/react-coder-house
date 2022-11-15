import Item from "./Item";

const ItemList = ({ item, goToDetail }) => {
  return (
    <div className="conteiner-card">
      {item.map((sticker) => (
        <Item item={sticker} goToDetail={goToDetail}></Item>
      ))}
    </div>
  );
};

export default ItemList;