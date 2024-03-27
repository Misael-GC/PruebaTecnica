import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../Assets/Icons/Group.svg';
import user from '../../Assets/Icons/user 1.svg';
import lupa from '../../Assets/Icons/search-interface-symbol 1.svg';
import shopping from '../../Assets/Icons/shopping-bag 1.svg';
import './index.css'

function Navbar() {

    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonId) => {
      setActiveButton(buttonId);
    };

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8'>
      <ul className='flex items-center gap-3'>
        <li>
            <NavLink to='/'>
                <figure className='logo-container '>
                    <img src={logo} alt='logo' className='object-contain'/>
                </figure>
            </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-7 '>
        <li>
            <NavLink to='/productos'>
                <div 
                className={`button ${activeButton === 'button1' ? 'active' : ''}`}
                onClick={() => handleClick('button1')}
                >
                    Productos
                </div>
            </NavLink>
        </li>
        <li>
            <NavLink to='/'>
                <div 
                className={`button ${activeButton === 'button2' ? 'active' : ''}`}
                onClick={() => handleClick('button2')}>
                    Promociones
                </div>
            </NavLink>
        </li>
        <li>
            <NavLink to='/nosotros'>
                <div 
                className={`button ${activeButton === 'button3' ? 'active' : ''}`}
                onClick={() => handleClick('button3')}>
                    Nosotros
                </div>
            </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-6'>
        <li>
            <figure className=''>
                <img src={lupa} alt='lupa' className='object-contain icon'/>
            </figure>
        </li>
        <li>
            <figure className=''>
                <img src={user} alt='user' className='object-contain icon'/>
            </figure>
        </li>
        <li>
            <figure className='flex'>
                <img src={shopping} alt='shopping' className='object-contain icon' /> <div className='counter'>0</div>
            </figure>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
