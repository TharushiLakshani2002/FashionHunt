import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Product.css';
import img from '../images/img.jpeg';
import watch from '../images/watch.jpg';
import tShirts from '../images/t-shirts.jpg';
import sunglasses from '../images/sunglasses.jpg';
import shoeCategory from '../images/shoecategory.jpg';
import runningShoes from '../images/runningshoes.jpg';
import redshoes from '../images/redshoes.jpg';
import realmewatch from '../images/realmewatch.jpg';
import nickelwatch from '../images/nickelwatch.jpg';
import blouse from '../images/blouse.jpg';
import blackshirt from '../images/blackshirt.jpg';
import blacksunglasses from '../images/blacksunglasses.jpg';
import darkblueshoes from '../images/darkblueshoes.jpg';
import formaldress from '../images/formaldress.jpg';    
import FloralCottonFrock from '../images/FloralCottonFrock.jpg.webp';
import img3 from '../images/img3.jpg';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Product() {
    return (
      <div className='product'>
          <Navbar/>
        <div className="productContainer">
            <div class="sidenav">
              <a href="#">Featured Products</a>
              <a href="#">New Arrivals</a>
              <a href="#">Casuals</a>
              <a href="#">Ladies Wears</a>
            </div>
            <div class="productimg">
            <h1>Featured Products</h1>
           
            <img src={img} alt="" className="img1" />
            <img src={shoeCategory} alt="" className="img1" />
            <img src={tShirts} alt="" className="img1" />
            <img src={sunglasses} alt="" className="img1" />
        </div>
        <div className="productimg">

            <h1>New Arrivals</h1>
         
            <img src={runningShoes} alt="" className="img" />
            <img src={redshoes} alt="" className="img" />
            <img src={realmewatch} alt="" className="img" />
            <img src={nickelwatch} alt="" className="img" />
            </div>
            <div className="productimg">
            <h1>Casuals</h1>
            <img src={img3} alt="" className="img" />
            <img src={darkblueshoes} alt="" className="img" />
            <img src={blackshirt} alt="" className="img" />
            <img src={blacksunglasses} alt="" className="img" />
            
            </div>
            <div className="productimg">
            <h1>Ladies Wears</h1>
           
            <img src={formaldress} alt="" className="img" />
            <img src={FloralCottonFrock} alt="" className="img" />
            <img src={blouse} alt="" className="img" />
                <img src={watch} alt="" className="img" />
            </div>
    </div>
             <Footer/> 
        </div>
    );
}
export default Product;
           