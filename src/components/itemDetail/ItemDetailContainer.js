import ItemDetail from "./ItemDetail"
import {getFirestore, doc, getDoc} from "firebase/firestore"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ItemDetailContainer = () => {
const [data, setData] = useState([]);
const {detalleId} = useParams();
    
    useEffect(() => {
        // getDoc(doc(getFirestore(), "stock-stickers", "9sAYEpfzuKzpwVBZUYfs"))
        // .then(res => setData({ id: res.id, ...res.data() }))
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "productos-stickers", detalleId);
        getDoc(queryDoc)
        .then(res => setData({ id: res.id, ...res.data() }))
      } , [detalleId])

    return(
        <ItemDetail data={data}></ItemDetail>
    )
}

export default ItemDetailContainer
