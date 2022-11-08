//*   AGRUPADOR DE UN SET DE COMPONENTES ITEM.JS (DEBERIS ESTAR INCLUIDO DENTRO DEL ITEM-LIST-CONTAINER)
//!  IMPLEMENTAR UN ASYNC MOCK (PROMISE): USAR UN EFECTO DE MONTAJE PARA PODER EMITIR UN LLAMADO ASINCRONICO A UN MOCK
//!(OBJETO) ESTATICO DE DATOS QUE DEVUELVA UN CONJUNTO DE ITEM {ID,TITLE,DESCRIPTION,PRICE,PICTURE-URL} EN DOS SEGUNDOS (SETtIMEOUT), PARA EMULAR RETRASOS DE RED

// import stockStickers from "./stockStickers"
import Item from "./Item"
// import { useEffect, useState } from "react"
// import data from "./stockStickers.json"

const ItemList = ({item}) => {

//     const [stickers, setStickers] = useState([])
//     useEffect(()=> {
// apiStockStickers ()
//     },[])

//     const apiStockStickers = async() => {
//         const data = await fetch("https://63697fbe15219b84961943db.mockapi.io/stock")
//         const dataJson = await data.json()
//         setStickers(dataJson)
//     }
// const [data, setData] = useState([])

// useEffect(() => {
//   fetch("https://63697fbe15219b84961943db.mockapi.io/stock")
//     .then((res) => res.json())
//     .then(json => setData(json))
//     .catch((err) => console.log(err));
// }, []);

    return(
<div className="conteiner-card" >
{item.map((sticker) =>(
    <Item 
    key={sticker.id}
    id={sticker.id}
    imagen={sticker.imagen}
    nombre={sticker.nombre}
    ></Item>
))}
</div>

    )
}

export default ItemList;