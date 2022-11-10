import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const [stickersDetail, setStickers] = useState([])

    useEffect(() => {
        fetch("https://63697fbe15219b84961943db.mockapi.io/stock")
          .then((res) => res.json())
          .then(json => setStickers(json))
          .catch((err) => console.log(err));
      }, []);
    
    
    return(
        <ItemDetail item={stickersDetail}></ItemDetail>
    )
}

export default ItemDetailContainer
