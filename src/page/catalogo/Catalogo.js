import React from "react";
import FilterAnime from "../../components/filter/Filter";
import ItemListContainer from "../../components/itemList/ItemListContainer"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'


export const Catalogo = () => {

    const [stickers, setStickers] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
apiStockStickers ()
    },[])

    const apiStockStickers = async() => {
       try{
        const data = await fetch("https://63697fbe15219b84961943db.mockapi.io/stock")
        const dataJson = await data.json()
        setStickers(dataJson)
       } catch (error) {
console.log(error);
       } 
    } 
    
    const handleDetail = (item) => {
        navigate(`/detailItem/${item.id}`, {state: item});
    }

    return(
        <>
        <FilterAnime/>
        <ItemListContainer stickerApi={stickers} goToDetail={handleDetail}/>
        </>
    )
}

