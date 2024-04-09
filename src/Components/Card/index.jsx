
import './index.css';
//import React, { useState } from 'react';





function Card({ product }) {
  const { name, image, description, price, discountPrice, quantity, ranking, facebookIcon, twitterIcon, InstagramIcon } = product;

  return (
    <div className="card">
      <div className="card__image-container">
        <figure className='card__image'>
          <img src={image} alt={name} />
          <div className='card__figure-opciones'>
            <div className='card__opciones' ></div>
            <div className='card__opciones'></div>
            <div className='card__opciones'></div>
          </div>
        </figure>

        <div className='card__heart bg-red-500 w-8'>00</div>
        <div className='card__discount bg-red-300 w-8'>00</div>
        {/* Resto del contenido de la tarjeta */}
        <div className="card__details-container">
          <div className="card__details">
            <p>{name}</p>
            <p>{description}</p>
            <figure className="card__score m-3">
              <img src={ranking} alt='Rating'/>
            </figure>
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
          <figure className="card__social-icons"> 
            <img src={facebookIcon} alt='Facebook' className="social-icon"></img>
            <img src={twitterIcon} alt='Twitter' className="social-icon"></img>
            <img src={InstagramIcon} alt='Instagram' className="social-icon"></img>
            {/* <i class="fa-brands fa-facebook"></i> */}
          </figure>
        </div>
        <div className="card__add-button">
          Agregar
        </div>
      </div>
    </div>
  );
}

export default Card;
