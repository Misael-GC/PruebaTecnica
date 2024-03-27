import { NavLink } from 'react-router-dom';
import logo from '../../Assets/Icons/Group.svg';
import user from '../../Assets/Icons/user 1.svg';
import lupa from '../../Assets/Icons/search-interface-symbol 1.svg';
import shopping from '../../Assets/Icons/shopping-bag 1.svg';
import React from 'react'
import './index.css'

function Navbar() {

    

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
                <div>
                    Productos
                </div>
            </NavLink>
        </li>
        <li>
            <NavLink to='/'>
                <div>
                    Promociones
                </div>
            </NavLink>
        </li>
        <li>
            <NavLink to='/nosotros'>
                <div>
                    Nosotros
                </div>
            </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-6'>
        <li>
            <figure className=''>
                <img src={lupa} alt='lupa' className='object-contain'/>
            </figure>
        </li>
        <li>
            <figure className='w-25'>
                <img src={user} alt='user' className='object-contain'/>
            </figure>
        </li>
        <li>
            <figure className='flex w-25'>
                <img src={shopping} alt='shopping' className='object-contain'/>0
            </figure>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
