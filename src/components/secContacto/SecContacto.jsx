import './SecContacto.css';

import facebook from '../../assets/icon/facebook.svg';
import youtube from '../../assets/icon/youtube.svg';
import instagram from '../../assets/icon/instagram.svg';
import tiktok from '../../assets/icon/tiktok.svg';
import whatsapp from '../../assets/icon/whatsapp.svg';
import linkedin from '../../assets/icon/linkedin.svg';
import twitter from '../../assets/icon/twitter.svg';

const SecContacto = () => {
  return (
    <section id="contacto" className="slide">
      <h1>Siempre estamos en contacto</h1>   
      <p>
        Creemos que el contacto es fundamental para el crecimiento de nuestro negocio. <br />
        Si queres nos podes dejar un mensaje y te lo responderemos a la brevedad
      </p>     
      <form id='formContact' action="#">
        <p className="item-form">
          <label htmlFor="name">Nombre</label>
          <input name='name' type="text" placeholder='Ingrese su nombre.' />
        </p>
        <p className="item-for">
          <label htmlFor="email">e-mail</label>
          <input type="email" name='email' placeholder='algo@algo.com.ar' />
        </p>
        <p className="item-for">
          <label htmlFor="asunto">Motivo</label>
          <input type="text" name='asunto' placeholder='Ingrese el motivo.'/>
        </p>
        <p className="item-for">
          <label htmlFor="msg">Mensaje</label>
          <textarea placeholder='Ingrese su mensaje'></textarea>
        </p>
        <p>
          <button>Enviar</button>
        </p>

        </form>

        <p>
          O bien nos podes seguir en nuestras redes sociales.
        </p>
        <div className="redSoc">
          <a href='https://www.facebook.com/'><img src={facebook} alt="Facebook" /></a>
          <a href='https://www.youtube.com/'><img src={youtube} alt="Youtube" /></a>
          <a href='https://www.instagram.com/'><img src={instagram} alt="Instagram" /></a>
          <a href='https://www.tiktok.com/es/'><img src={tiktok} alt="Tik-tok" /></a>
          <a href='https://web.whatsapp.com/'><img src={whatsapp} alt="Whatsapp" /></a>
          <a href='https://www.linkedin.com'><img src={linkedin} alt="Linkedin" /></a>
          <a href='https://x.com/'><img src={twitter} alt="Twitter" /></a>
        </div>
      </section>
  )
}

export default SecContacto