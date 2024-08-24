import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Contexts/ShopContext'

import logo from '../Assests/logo.png'
import cart_logo from '../Assests/cart_icon.png'

 const Navbar = () => {

    const [menu , setMenu] = useState("shop");
    const {getTotalcartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toogle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'> 
    <div className="nav-logo">
        <img src={logo} alt=''/>
        <p>BAT CAVE</p>
    </div>
    <img onClick={dropdown_toogle} src="" alt="" />
    <ul ref={menuRef} className="nav-menu">
    <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr />:<></>}</li>
    <li onClick={() =>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr />:<></>}</li>
    <li onClick={() =>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='./womens'>Women</Link> {menu==="womens"?<hr />:<></>}</li>
    <li onClick={() =>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr />:<></>}</li>
    </ul>
    <div className="nav-login-cart">
    <Link to='/login'><button>Login</button></Link>
    <Link to='/cart'><img src={cart_logo} alt="" /></Link>
    </div>
    <div className="nac-cart-count">{getTotalcartItems()}</div>
    </div>

  )
}
export default Navbar