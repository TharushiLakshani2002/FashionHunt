import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {Link} from "react-router-dom";
import bannerimage from '../images/bannerimage.jpg';

function About() {
    return (
        <div className='about'>
    <Navbar/>
    <div className="container">
      <div className="banner">
        
        <div className='bannerContatiner' id="bannercontent">
          
          <p>
            Welcome to FashionHunt, your ultimate 
            destination for the latest trends in fashion 
            and lifestyle. We are dedicated to bringing 
            you the best in clothing, accessories, and 
            more, all at unbeatable prices. Our mission is
             to help you express your unique style and 
             feel confident in your choices.
             <br/> <br/>
            At FashionHunt, we believe that fashion should
            be accessible to everyone. That's why we offer a
            wide range of products, from everyday 
            essentials.to statement pieces, all curated with care


            </p>
            <Link to="/products"><button>Shop Now</button></Link>
        </div>
        <div className='bannerContatiner' id="bannerimg">
        <img src={bannerimage} alt="" />
        </div>
      </div>
      </div>
      <Footer/>
  </div>
)

}
export default About;