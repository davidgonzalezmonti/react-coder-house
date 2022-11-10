import "./Navbar.css"
import CartWidget from './CartWidget'
import { MdHome, MdTableRows, MdStore } from "react-icons/md";
import React, {useState} from "react";

const Navbar = ({ logo }) => {
const [mobileMenu,setMobileMenu] = useState("false")

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo-navbar" />
      <ul className={mobileMenu ? "menu" : "menu-expanded"}>
        <li>
          <p>
          INICIO
          </p>
          <MdHome />
        </li>
        <li>
        <p>
          PRODUCTOS
          </p>
          <MdStore/>
        </li>
        <CartWidget/>
      </ul>
      <span className="mobileIcon" onClick={() =>setMobileMenu(!mobileMenu)}><MdTableRows/></span>
    </nav>
  );
};

  export default Navbar;
