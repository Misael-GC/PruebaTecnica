import './index.css'

function Card() {
  return (
    <div className="card">
      
      <div className="card_container-image">
        <figure>
          <img src="https://blife.mx/cdn/shop/files/0_MockUp180_800x800transparente_ff34c2ac-2128-48c7-8c65-dc4e9a75a2bc.png?v=1708966645" alt="bote" />
        </figure>
        
        <div className="card_container-details">
          
          <div className="card_details ">
            <p className="margin-top">Citrate Mag </p>
            <p className="margin-top"> 240 Capsulas 800 Mg</p>
            <div className="card_container-score margin-top2"></div>
          </div>
          
                  <div className="card_price">
          <p>$273.00</p>
          <p>--$134.00-</p>
        </div>
          
        </div>
        
        
      </div>
      
      <div className="card_container-botones">
        <div className="card_container-redes">
          <p>COMPARTE</p>
          <div className="card_redes"> 
            <div className="redes"></div>
            <div className="redes"></div>
            <div className="redes"></div>
          </div>
        </div>
        
        <div className="card_container-boton-add">
          Agregar
        </div>
      </div>
      
    </div>
  )
}

export default Card