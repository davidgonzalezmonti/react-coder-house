import ItemList from './ItemList'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import Filter from '../filter/Filter'
import { PulseLoader } from 'react-spinners'

export const ItemListContainer = () => {

    const [stickers, setStickers] = useState([])
    const navigate = useNavigate();
    const { categoriaId } = useParams();

    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "productos-stickers");
        if (categoriaId) {
        const queryFilter = query(queryCollection, where("categoria" , "==", categoriaId))
        getDocs(queryFilter)
        .then(res=> setStickers(res.docs.map(product => ({id: product.id, ...product.data() }))))
        .finally(() => setIsLoading(false));
    } else{
        getDocs(queryCollection)
        .then(res=> setStickers(res.docs.map(product => ({id: product.id, ...product.data() }))))
        .finally(() => setIsLoading(false))
       }
        
        
    }, [categoriaId]);

    const handleDetail = (item) => {
        navigate(`/detailItem/${item.id}`);
    }


    return(
        <div >
            <Filter></Filter>
            { 
         isLoading ? (<div className="loading"> <PulseLoader
         color={"#322F46"}  size={50}  /></div>)
           :  
           <div className='item-list-container'>
           <ItemList item={stickers} goToDetail={handleDetail}></ItemList>
           </div>
        }
   
        
        </div>
    )
}


export default ItemListContainer;