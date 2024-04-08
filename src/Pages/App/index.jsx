import { useRoutes, BrowserRouter } from 'react-router-dom';
import Promociones from '../Promociones';
import Nosotros from '../Nosotros';
import Productos from '../Productos';
import Usuario from '../Usuario';
import NotFound from '../NotFound';
import Navbar from '../../Components/Navbar';
import './App.css';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Promociones /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/productos', element: <Productos /> },
    { path: '/usuario', element: <Usuario /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes;
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
