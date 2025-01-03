import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <header className="body-font bg-black text-white">
          <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
            <NavLink className="title-font mb-4 flex items-center font-medium text-white md:mb-0">
              <img src='src/assets/logo.jpg' />
            </NavLink>
            <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
              <NavLink to='/about' className="mr-5 hover:text-white">About us</NavLink>
              <NavLink to="/contact" className="mr-5 hover:text-white">Contact Us</NavLink>
              <NavLink to="/policies" className="mr-5 hover:text-white">Rental/Return Policy</NavLink>
              <NavLink to="/guide" className="mr-5 hover:text-white">Fit Guide</NavLink>
              <NavLink to="/faq" className="mr-5 hover:text-white">FAQs</NavLink>
            </nav>
          </div>
        </header>
      </div>
      <hr />
      <div className="footer-copyright bg-black text-white justify-center md:mb-0 title-font flex items-center font-medium p-5">
        <p>&copy;Borrowed Bridesmaid, 2024. All rights reserved.</p>
      </div>
    </div>
  )
}