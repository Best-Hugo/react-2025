import { useState } from 'react'
import './App.css'
import Home from './layout/Home'

function App() {

  // Inicializa el estado del carrito de compra.
  const [cart, setCart] = useState([]);

  // Agrega un producto al carrito.
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  }
  return (
    <>
      <Home cart={cart} handleAddToCart={handleAddToCart} />
    </>
  )
}

export default App
