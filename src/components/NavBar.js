import "./Navbar.css"
import { MdAccountCircle, MdShoppingCart, MdHome, MdTableRows } from "react-icons/md";
import React, {useState} from "react";

const Navbar = ({ logo }) => {
const [mobileMenu,setMobileMenu] = useState("false")
const mobileMenuClick = () =>{
setMobileMenu(!mobileMenu);
}


  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <ul className={mobileMenu?"menu-expanded":"menu"}  >
        <li>
          <p>
          Inicio
          </p>
          <MdHome />
        </li>
        <li>
        <p>
          Mi cuenta
          </p>
          <MdAccountCircle />
        </li>
        <li>
        <p>
          Mi carrito
          </p>
          <MdShoppingCart />
        </li>
      </ul>
      <span className="mobileIcon" onClick={mobileMenuClick}><MdTableRows/></span>
    </nav>
  );
};

  export default Navbar;