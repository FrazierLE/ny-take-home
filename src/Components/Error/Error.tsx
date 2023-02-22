import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return(
    <div>
      <h2>404: Page not found</h2>
      <p>Sorry the page you requested could not be found. Please go back to the homepage.</p>
      <NavLink to='/'>
        <h2>Return Home</h2></NavLink>
    </div>
  )
}

export default Error