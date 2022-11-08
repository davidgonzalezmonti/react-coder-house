import "./Navbar.css"
import CartWidget from './CartWidget'
import { MdAccountCircle, MdHome, MdTableRows } from "react-icons/md";
import React, {useState} from "react";

const Navbar = ({ logo }) => {
const [mobileMenu,setMobileMenu] = useState("false")

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo-navbar" />
      <ul className={mobileMenu ? "menu" : "menu-expanded"}>
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
        <CartWidget/>
      </ul>
      <span className="mobileIcon" onClick={() =>setMobileMenu(!mobileMenu)}><MdTableRows/></span>
    </nav>
  );
};

  export default Navbar;
