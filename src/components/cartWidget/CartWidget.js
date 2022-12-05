import "./CartWidget.css"
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = ({ cantidad }) => {

    const { totalProducts } = useCartContext();

    return (
        <div className="cartWidget">
            <NavLink to={"/cart"}>
                <MdShoppingCart />
            </NavLink>
            <span>{totalProducts() || ""}</span>
        </div>

    )
}

export default CartWidget;