import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_logo from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-logo">
    <img src={footer_logo} alt="" />
    <p>BAT CAVE</p>
     </div>
     <ul className="footer-links">
      <li>Conpany</li>
      <li>Product</li>
      <li>Offices</li>
      <li>About</li>
      <li>Contacts</li>
     </ul>
     <div className="footer-social-icon">
      <div className="footer-icons-container">
        <img src={instagram_logo} alt="" />
      </div>
      <div className="footer-icons-container">
        <img src={pintester_icon} alt='' />
      </div>
      <div className="footer-icons-container">
        <img src={whatsapp_icon} alt='' />
      </div>
      <div className="footer-coopyright">
        <hr />
        <p>Copyright @ 2023 -ALL</p>
      </div>
     </div>
    </div>
  )
}

export default Footer