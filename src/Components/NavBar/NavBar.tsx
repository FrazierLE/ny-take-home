import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <section className='navbar'>
        <NavLink to='/'>
          <button>Home</button>
        </NavLink>
      </section>
  )
}

export default NavBar