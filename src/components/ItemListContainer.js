import ItemList from './ItemList'
import { useEffect, useState } from "react"

const ItemListContainer = () => {
    const [stickers, setStickers] = useState([])
    useEffect(()=> {
apiStockStickers ()
    },[])

    const apiStockStickers = async() => {
        const data = await fetch("https://63697fbe15219b84961943db.mockapi.io/stock")
        const dataJson = await data.json()
        setStickers(dataJson)
    }
    
    return(
        <>
        <ItemList item={stickers}></ItemList>
        </>
    )
}


export default ItemListContainer;