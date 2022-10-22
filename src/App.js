import './App.css';

import logoStickers from "../src/img/icono.webp"


const NavBar = ({inicio, carrito, contacto, logo}) => {
  return (
    <nav class="navBar">
            <img src={logo} alt="logo"/>
            <ul>
                <li><a href="#">{inicio}</a></li>
                <li><a href="#">{carrito}</a></li>
                <li><a href="#">{contacto}</a></li>
            </ul>
        </nav>
  )
}

function App() {
  return (
    <div className="container">
             <NavBar 
             logo={logoStickers}
             inicio="INICIO" 
             carrito="CARRITO" 
             contacto="CONTACTO"
             ></NavBar>
    </div>
  );
}

export default App;
