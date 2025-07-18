import './SecInicio.css';
import {diskList} from '../../utils/data.js';
import Gallery from '../gallery/Gallery';

const SecInicio = ({handleAddToCart}) => {
  return (
    <section id='inicio'>
        <h1>La discografía online más completa</h1>
        <p className='description'>
            Aquí encontraras el disco que estás buscando.
        </p>
        <Gallery products={diskList} addToCard={handleAddToCart} />
        
      </section>
  )
}

export default SecInicio