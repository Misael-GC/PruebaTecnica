import './index.css';
import facebookIcon from '../../Assets/Icons/Vectorfa.png';
import twitterIcon from '../../Assets/Icons/Vectort.png';
import instagramIcon from '../../Assets/Icons/VectorIns.png';
import productImage from '../../Assets/Images/bote.png';
import ratingIcon from '../../Assets/Icons/Rating.svg';

function Card() {
  return (
    <div className="card">

      <div className="card__image-container">
        <figure>
          <img src={productImage} alt="Product" />
        </figure>

        <div className='card__heart bg-red-500 w-8'>00</div>
        <div className='card__discount bg-red-300 w-8'>00</div>

        <div className="card__details-container">
          <div className="card__details">
            <p className="">Citrate Mag </p>
            <p className="">240 Capsulas 800 Mg</p>
            <figure className="card__score m-3">
              <img src={ratingIcon} alt='Rating'/>
            </figure>
          </div>
          
          <div className="card__price">
            <p>$273.00</p>
            <p>--$134.00--</p>
          </div>
        </div>
      </div>
      
      <div className="card__buttons-container">
        <div className="card__social-container">
          <p>Comparte</p>
          <figure className="card__social-icons"> 
            <img src={facebookIcon} alt='Facebook' className="social-icon"></img>
            <img src={twitterIcon} alt='Twitter' className="social-icon"></img>
            <img src={instagramIcon} alt='Instagram' className="social-icon"></img>
          </figure>
        </div>
        
        <div className="card__add-button">
          Agregar
        </div>
      </div>
    </div>
  )
}

export default Card;
