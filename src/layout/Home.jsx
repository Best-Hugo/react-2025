import React from 'react';
import Header from '../components/header/Header';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';
import SecInicio from '../components/secInicio/SecInicio';

const Home = ({cart, handleAddToCart}) => {

  return (
    <>
      <Header cart={cart} />
      <Body page={<SecInicio handleAddToCart={handleAddToCart} />} />
      <Footer />
    </>
  )
}

export default Home