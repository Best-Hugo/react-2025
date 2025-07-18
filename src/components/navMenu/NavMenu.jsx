import './NavMenu.css';

import home from '../../assets/icon/home.svg';
import about from '../../assets/icon/about.svg';
import contact from '../../assets/icon/contact.svg';

const NavMenu = ({cart}) => {
  const countItem = cart.length;
  return (
    <ul className='tab-menu'>
        <li><a href="#inicio"><img src={home} alt="Inicio" />Inicio</a></li>
        <li><a href="#nosotros"><img src={about} alt="Nosotros" />Nosotros</a></li>
        <li><a href="#contacto"><img src={contact} alt="Contacto" />Contacto</a></li>
        <li><a href="#">{countItem}</a></li>
    </ul>
  )

}

export default NavMenu