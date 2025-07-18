import './NavEstado.css';
import login from '../../assets/icon/login.svg';
import register from '../../assets/icon/register.svg';

const NavEstado = () => {
  return (
    <ul>
        <li><a href="#"><img src={register} alt="Registrarse" /> Registrate</a></li>
        <li><a href="#"><img src={login} alt="Entrar" /> Entrar</a></li>
    </ul>
  )
}

export default NavEstado