import "./Navbar.css"
import { MdAccountCircle, MdShoppingCart, MdHome, MdTableRows } from "react-icons/md";

const Navbar = ({ logo }) => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <ul>
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
          Carrito
          </p>
          <MdShoppingCart />
        </li>
      </ul>
      <span className="menuResponsive"><MdTableRows/></span>
    </nav>
  );
};

  export default Navbar;