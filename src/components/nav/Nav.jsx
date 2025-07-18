import './Nav.css';

import NavEstado from '../navEstado/NavEstado';
import NavMenu from '../navMenu/NavMenu';

const Nav = ({cart}) => {
  
  return (
    <nav>
      <NavEstado />
      <NavMenu cart={cart} />
    </nav>
  )
}

export default Nav