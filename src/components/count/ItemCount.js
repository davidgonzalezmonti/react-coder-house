import { useState } from "react"
import {MdRemoveCircleOutline, MdAddCircleOutline} from "react-icons/md";
import './ItemCount.css'

export const Count = () => {
    const [cant, setCant] = useState(1)

    const addCant = ()=>{
        setCant(cant + 1)
    } 
    const subtractCant = ()=>{
        if(cant < 2 ) return
        setCant(cant - 1)
    }   
  return (
    <>
            <div className="count">
                <i  onClick={subtractCant}><MdRemoveCircleOutline/></i>               
                <p><b>{cant}</b></p>
                <i onClick={addCant}><MdAddCircleOutline /></i> 
            </div>
            
        </>
  )
}

