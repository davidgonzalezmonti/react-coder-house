import { useEffect } from "react"
import { useState } from "react"
import './ItemCount.css'

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial))

    const decrease = () =>{
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count +1);
    }

    useEffect(() =>{
        setCount(parseInt(initial));
    }, [initial])

  return (
    <section className="count-container">
            <div className="count">
                <button className="button-count" button disabled={count <=1} onClick={decrease}>-</button>               
                <span><b>{count}</b></span>
                <button className="button-count" disabled={count >= stock} onClick={increase}>+</button> 
            </div>
            <div className="div-button">
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className="boton-agregar-carrito">
            AGREGAR AL CARRITO
          </button>
                </div> 
            
        </section>
  )
}

