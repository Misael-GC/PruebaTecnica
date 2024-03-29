import './index.css';
import banner from '../../Assets/Images/Banner.svg'
import rectangulo from '../../Assets/Images/Rectangle.svg'

function Banner() {
  return (
    <div  className="banner-container w-full">
        <figure className='banner-container-img'>
            <img src={banner} alt='Descuento' className='banner-image relative'/>
            <img src={rectangulo} alt='Descuento' className='banner-image-rectangulo absolute'/>
        </figure>
    </div>
  )
}

export default Banner
