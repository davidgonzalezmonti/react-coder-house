import "./Cart.css"
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/ItemCart";


export const Cart = () =>{

const {cart, totalPrice } = useCartContext();

if (cart.length === 0) {
    return (
<div>
<p >No hay elementos en el carrito</p>
<Link to="/catalogo" > Hacer compras</Link>
</div>
    )

}

return(
    <div className="cart">
    {
        cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p className="parrafo-cart">
        Total: ${totalPrice()}
    </p>
    </div>
)
}