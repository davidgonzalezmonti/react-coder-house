import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./CartWidget.css" 

const CartWidget = ({cantidad}) =>{
    return(
        <div className="cartWidget">
        <NavLink>
          <MdShoppingCart/>
          </NavLink>
          <span>0</span>
          </div>
          
    )
}

export default CartWidget;