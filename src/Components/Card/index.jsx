
import './index.css';

function Card({ product }) {
  const { name, image, description, price, discountPrice, quantity, ratingIcon } = product;

  return (
    <div className="card">
      <div className="card__image-container">
        <figure>
          <img src={image} alt={name} />
        </figure>

        <div className='card__heart bg-red-500 w-8'>00</div>
        <div className='card__discount bg-red-300 w-8'>00</div>
        {/* Resto del contenido de la tarjeta */}
        <div className="card__details-container">
          <div className="card__details">
            <p>{name}</p>
            <p>{description}</p>
          </div>
          <div className="card__price">
            <p>${price}</p>
            <p>--${discountPrice}--</p>
          </div>
        </div>
      </div>
      <div className="card__buttons-container">
        {/* Botones, iconos de redes sociales, etc. */}
        <div className="card__social-container">
          <p>Comparte</p>
          {/* Iconos de redes sociales aquí */}
        </div>
        <div className="card__add-button">
          Agregar
        </div>
      </div>
    </div>
  );
}

export default Card;
