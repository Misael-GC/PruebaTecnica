import Promociones from '../Promociones';
import Nosotros from '../Nosotros';
import Productos from '../Productos';
import Usuario from '../Usuario';

import './App.css'

function App() {

  return (
    <>
      <div className='bg-zinc-400'>
        <Promociones/>
        <Nosotros/>
        <Productos/>
        <Usuario/>
      </div>
    </>
  )
}

export default App
