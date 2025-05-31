import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import logo from '../images/logo.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="logo-container">
                <img src={logo} alt="FashionHunt logo" className="logo-img" />
                
            </div>
            
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            
            <div className="nav-icons">
                <Link to="/shopping-cart"><ShoppingCartIcon className="nav-icon" /></Link>
                <Link to="/account"><AccountCircleIcon className="nav-icon" /></Link>
            </div>
        </nav>
    )
}

export default Navbar;