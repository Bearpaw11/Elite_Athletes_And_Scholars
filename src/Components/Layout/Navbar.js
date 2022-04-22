import classes from './Navbar.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className={classes.header}> 
    <div className={classes.logo}>Elite Athletes and Scholars</div>
    <nav className={classes.nav}>
      <ul>
        <li><NavLink to='/home' activeClassName={classes.active}>Home</NavLink></li>
        <li><NavLink to='/resources' activeClassName={classes.active}>Resources</NavLink></li>
        <li><NavLink to='/products' activeClassName={classes.active}>Products</NavLink></li>
        <li><NavLink to='/Pricing' activeClassName={classes.active}>Contact</NavLink></li>


        
      </ul>
    </nav>
  </header>
  )
}

export default Navbar