import Item from "./Item";

const ItemList = ({ item }) => {
  return (
    <div className="conteiner-card">
      {item.map((sticker) => (
        <Item item={sticker}></Item>
      ))}
    </div>
  );
};

export default ItemList;