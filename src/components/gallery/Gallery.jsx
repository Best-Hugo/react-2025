import Card from '../card/Card.jsx';
import './Gallery.css';

const Gallery = ({products, addToCard}) => {
  
  /*const imagen = [["./src/assets/img/ChB-HateCrewDeathroll-Front.jpg", "./src/assets/img/ChB-HateCrewDeathroll-Back.jpg"], ["./src/assets/img/GR-SomewhereOutInSpace-Front.jpg", "./src/assets/img/GR-SomewhereOutInSpace-Back.jpg"], ["./src/assets/img/Hag-AndThouShaltTrustTheSeer-Front.jpg", "./src/assets/img/Hag-AndThouShaltTrustTheSeer-Back.jpg"], ["./src/assets/img/Ham-CrimsonThunder-Front.jpg", "./src/assets/img/Ham-CrimsonThunder-Back.jpg"]];*/

  return (
    <section>
      {
        products.map(product => (
            <Card key={product.id} product={product} addToCard={addToCard} />
          )
        )
      }
    </section>
  )
}

export default Gallery