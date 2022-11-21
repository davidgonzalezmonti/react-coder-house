import "./Navbar.css"
import CartWidget from '../cartWidget/CartWidget'
import { MdHome, MdTableRows, MdStore } from "react-icons/md";
import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
const [mobileMenu,setMobileMenu] = useState("false")

  return (
    <nav className="navbar">
      <Link to={"/"}>
      <img src="https://res.cloudinary.com/dbaqismy5/image/upload/v1668037022/Stock%20Stickers%20Anime/icono_w4f2wz.webp" alt="logo" className="logo-navbar" />
      </Link>
      <ul className={mobileMenu ? "menu" : "menu-expanded"}>
        <li>
        <NavLink to={"/"}>
          INICIO
          </NavLink>
          <MdHome />
        </li>
        <li>
        <NavLink to={"/catalogo"}>
        <p>
          PRODUCTOS
          </p>
          </NavLink>
          <MdStore/>
        </li>
        <CartWidget />
      </ul>
      <span className="mobileIcon" onClick={() =>setMobileMenu(!mobileMenu)}><MdTableRows/></span>
    </nav>
  );
};

  export default Navbar;
