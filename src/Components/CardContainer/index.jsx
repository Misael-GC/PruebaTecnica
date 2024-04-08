
import Card from '../Card'; // Importa tu componente de tarjeta aquí
import productos from '../../Assets/Images/bote.png';
import ratingIcon from '../../Assets/Icons/Rating.svg';


function CardContainer() {
  // Array de productos simulados (podrías obtener esto de una API, base de datos, etc.)
  const products = [
    {
      id: 1,
      name: 'Citrate Mag',
      image: productos,
      description: '240 Cápsulas 800 Mg',
      price: 273.00,
      discountPrice: 134.00,
      quantity: 10,
      ranking: ratingIcon
    },
    // Agrega más productos si es necesario
  ];

  return (
    <div className="card-container">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CardContainer;
