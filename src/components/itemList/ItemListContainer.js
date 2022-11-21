import ItemList from './ItemList'
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {

    const [stickers, setStickers] = useState([])
    const navigate = useNavigate();

    const {categoriasId} = useParams()
   
    useEffect(() => {
        fetch("https://63697fbe15219b84961943db.mockapi.io/stock")
          .then((res) => res.json())
          .then(res => {
            if (categoriasId) {
                setStickers(res.filter(sticker => sticker.anime === categoriasId))
                console.log(setStickers);
            } else{
                setStickers(res)
            }
            
          })
          
      }, [categoriasId]);
    
    const handleDetail = (item) => {
        navigate(`/detailItem/${item.id}`, {state: item});
    }


    return(
        <>
        <ItemList item={stickers} goToDetail={handleDetail}></ItemList>
        </>
    )
}


export default ItemListContainer;