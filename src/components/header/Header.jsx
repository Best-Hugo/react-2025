import Nav from '../nav/Nav';
import './Header.css';
import logo from "../../../src/assets/icon/logo3.ico";

const Header = ({cart}) => {
  
  return (
    <header>
        <div>
          <img src={logo} alt="Logo del sitio." />
          <h1>Repositorio De Discos</h1>
        </div>
        <Nav cart={cart} />
    </header>
  )
}

export default Header