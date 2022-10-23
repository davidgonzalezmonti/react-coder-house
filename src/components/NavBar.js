import "./NavBar.css"

const NavBar = ({inicio, carrito, contacto, logo,productos}) => {
    return (
      <nav class="navBar">
              <img src={logo} alt="logo"/>
              <ul>
                  <li>{inicio}</li>
                  <li>{carrito}</li>
                  <li>{contacto}</li>
              </ul>
          </nav>
    )
  }

  export default NavBar;