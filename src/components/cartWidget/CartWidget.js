import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";


const CartWidget = () =>{
    return(
        <li>
        <NavLink>
          MI CARRITO
          </NavLink>
          <MdShoppingCart/>
          </li>
    )
}

export default CartWidget;