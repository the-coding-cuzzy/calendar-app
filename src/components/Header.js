import React from 'react'
import { NavLink } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul className="header">
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/name'>Name</NavLink></li>
        <li><NavLink to='/hello'>Hello</NavLink></li>
        <li><NavLink to='/counter'>Counter</NavLink></li>
        <li><NavLink to='/calendar'>Calendar</NavLink></li>
        <li><NavLink to='/form'>Form</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header
