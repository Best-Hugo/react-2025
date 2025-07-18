import './SecNosotros.CSS';
import company from '../../assets/icon/company.svg';
import logistics from '../../assets/icon/logistics.svg';
import growth from '../../assets/icon/growth.svg';

const SecNosotros = () => {
  return (
    <section id="nosotros" className="slide">
      <h1>Lo que hacemos, nuestra historia y objetivos</h1>
        <div>
          <img src={company} alt="Empresa" />
          <p>
            Somos una empresa joven que ofrece un producto de forma directa eliminando los intermediarios que encarecen el costo del producto veneficiando al usuario y al o los artistas. 
          </p>
        </div>
        <div>
          <img src={growth} alt="Crecimiento" />
          <p>
            Comensamos intercambiando discos en des uso entre amigos y hoy trabajamos directamente con las grandes discográficas y con las productoras de primer nivel a nivel mundial. 
          </p>
        </div>
        <div>
          <img src={logistics} alt="Logística" />
          <p>
            Contamos con una logistica solida, con presencia en más de 253 paises, que garantizan nuestas metas, fidelizan nuestros servicios y garantizan nuestro crecimiento a diario.
          </p>
        </div>
      </section>
  )
}

export default SecNosotros