import './Footer.css';
import telephone from '../../assets/icon/telephone.svg';
import email from '../../assets/icon/email.svg';
import location from '../../assets/icon/location.svg';

const Footer = () => {
  return (
    <footer>
        <p>&copy; 2025 - Web Master Developer</p>
        <p><img src={telephone} alt="Telefono" /> 15 6475-2825</p>
        <p><img src={email} alt="e-mail" /> hugo@gmail.com</p>
        <p><img src={location} alt="Dirección" />22 Acacia Avenue.</p>
    </footer>
  )
}

export default Footer