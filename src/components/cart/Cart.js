import "./Cart.css"
import "../CheckoutForm/CkeckoutForm.css"
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/ItemCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export const Cart = () =>{

const {cart, totalPrice, clearCart } = useCartContext();

if (cart.length === 0) {
    return (
<div className="carrito-vacio">
<p >NO HAY ELEMENTOS EN EL CARRITO</p>
<img src="https://res.cloudinary.com/dbaqismy5/image/upload/v1669756075/Stock%20Stickers%20Anime/carrito-vacio_f5bphb.jpg" alt="" />
<Link to="/catalogo" > IR A PRODUCTOS</Link>
</div>
    )

}


return(
    <div className="cart">
        <div>
    {
        cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    </div>

    <section className="checkout-cart">
    <h3 className="parrafo-cart">
        Total: ${totalPrice()}
    </h3>
    <p>Complete los datos para finalizar su compra</p>
    <CheckoutForm></CheckoutForm>
    <button className="finalizar-cart"  >Finalizar compra</button>
    <button className="vaciar-cart" onClick={clearCart} >Vaciar carrito</button>
    <button className="ver-mas-cart" >Ver mas productos</button>
    </section>

    </div>
)
}