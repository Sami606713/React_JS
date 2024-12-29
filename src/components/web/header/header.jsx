import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="body-font bg-black text-white">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <NavLink className="title-font mb-4 flex items-center font-medium text-white md:mb-0">
          <img src='src/assets/logo.jpg'/>
        </NavLink>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <NavLink to='/' className="mr-5 hover:text-white">How It Work</NavLink>
          <NavLink to="/collection" className="mr-5 hover:text-white">Discover Our Collections</NavLink>
          <NavLink to="/try-home" className="mr-5 hover:text-white">Home Try On</NavLink>
          <NavLink to="/bridal-party" className="mr-5 hover:text-white">Bridal Party HQ</NavLink>
        </nav>
      </div>
    </header>
  )
}