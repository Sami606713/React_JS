import React from 'react'
import Header from './header'
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <Header item1="Aboutus" item2="Contact Us" item3="Rental/Return Policy" item4="Fit Guide" item5="FA" logo="SAMI"/>
      </div>
      <hr/>
      <div className="footer-copyright">
        <p>Copyright &copy; SAMI</p>
      </div>
    </div>
  )
}
