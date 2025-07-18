import { useState } from 'react';
import './Card.css';

const Card = ({product, addToCard}) => {
  const [amount, setAmount] = useState(1);
  const [stock, setStock] = useState(product.stock);

  const increment = () => setAmount(cant => (cant < stock ? cant +1 : cant));
  
  const decrement = () => setAmount(cant => (cant > 1 ? cant -1 : 1));
 
  return (
    <div className='contCard' >
      <div className="card">
        <div className="cara card-front">
          <img src={product.front} alt={`Tapa de ${product.title}`} />
        </div> 
      </div>
      <div className="date">
        <p className='dateProduct'>{product.title}</p>
        <p className='dateProduct'>&euro;{product.price}</p>
        <div className="contador">
          <button onClick={increment}> &and; </button>
          <span>{amount}</span>
          <button onClick={decrement}> &or; </button>
        </div>
      </div>
      <div className='dateProduct'><button className='aniGradient' onClick={()=> addToCard(product)}>Agregar</button></div>
    </div>
  )
}

export default Card