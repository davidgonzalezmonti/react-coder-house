import "./NavBar.css"

const NavBar = ({inicio, carrito, contacto, logo}) => {
    return (
      <nav class="navBar">
              <img src={logo} alt="logo"/>
              <ul>
                  <li><a href="index.html">{inicio}</a></li>
                  <li><a href="index.html">{carrito}</a></li>
                  <li><a href="index.html">{contacto}</a></li>
              </ul>
          </nav>
    )
  }

  export default NavBar;