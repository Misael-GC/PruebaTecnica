
import Card from '../Card'; // Importa tu componente de tarjeta aquí
import productos from '../../Assets/Images/bote.png';
import ratingIcon from '../../Assets/Icons/Rating.svg';
import facebook from '../../Assets/Icons/Facebook.svg';
import twitter from '../../Assets/Icons/Twitter.svg';
import Instagram from '../../Assets/Icons/Instagram.svg';

import './index.css'


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
      ranking: ratingIcon,
      facebookIcon: facebook,
      twitterIcon: twitter,
      InstagramIcon: Instagram
    },
    {
      id: 2,
      name: 'Citrate Mag',
      image: productos,
      description: '240 Cápsulas 800 Mg',
      price: 273.00,
      discountPrice: 134.00,
      quantity: 10,
      ranking: ratingIcon,
      facebookIcon: facebook,
      twitterIcon: twitter,
      InstagramIcon: Instagram
    },
    {
      id: 3,
      name: 'Citrate Mag',
      image: productos,
      description: '240 Cápsulas 800 Mg',
      price: 273.00,
      discountPrice: 134.00,
      quantity: 10,
      ranking: ratingIcon,
      facebookIcon: facebook,
      twitterIcon: twitter,
      InstagramIcon: Instagram
    },
    {
      id: 4,
      name: 'Citrate Mag',
      image: productos,
      description: '240 Cápsulas 800 Mg',
      price: 273.00,
      discountPrice: 134.00,
      quantity: 10,
      ranking: ratingIcon,
      facebookIcon: facebook,
      twitterIcon: twitter,
      InstagramIcon: Instagram
    },
    // Agrega más productos si es necesario
  ];

  return (
    <div className="card-container w-full h-auto mt-10 flex flex-wrap p-10">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CardContainer;
