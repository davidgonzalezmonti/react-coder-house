//*   AGRUPADOR DE UN SET DE COMPONENTES ITEM.JS (DEBERIS ESTAR INCLUIDO DENTRO DEL ITEM-LIST-CONTAINER)
//!  IMPLEMENTAR UN ASYNC MOCK (PROMISE): USAR UN EFECTO DE MONTAJE PARA PODER EMITIR UN LLAMADO ASINCRONICO A UN MOCK
//!(OBJETO) ESTATICO DE DATOS QUE DEVUELVA UN CONJUNTO DE ITEM {ID,TITLE,DESCRIPTION,PRICE,PICTURE-URL} EN DOS SEGUNDOS (SETtIMEOUT), PARA EMULAR RETRASOS DE RED


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