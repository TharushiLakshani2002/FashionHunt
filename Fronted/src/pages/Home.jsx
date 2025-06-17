import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Home.css';
import banner from '../images/banner.jpg';
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







function Home(){
    //const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/products')  // Update port if needed
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(err => console.error(err));
//   }, []);

  // Group products by category
//   const groupedProducts = products.reduce((groups, product) => {
//     const category = product.category || "Others";
//     if (!groups[category]) groups[category] = [];
//     groups[category].push(product);
//     return groups;
//   }, {});

  // You can order the categories manually if you want
  const categoriesOrder = [
    "Featured Products",
    "New Arrivals",
    "Casuals",
    "Ladies Wears",
  ];

    return(
        <div className="home">
            <Navbar/>
            <div className="container">
          <div className="banner">
            <div className='bannerContatiner' id="bannerimg">
                <img src={banner} alt="" />
            </div>
            <div className='bannerContatiner' id="bannercontent">
              <div className="offer">
                25% Seasonal Offers
              </div>
              <p>
                Get the best deals on our latest 
                collection of fashion items. Shop now
                 and enjoy exclusive discounts on 
                 selected products. Don't miss out on
                  this limited-time offer!
              </p>
              <Link to="/about"><button>Shop Now</button></Link>
              </div>
            
        </div>
        </div>
        <div className="secondContainer">
            <h1>Featured Products</h1>
            </div>
            <div className="imgContainer">
            <img src={img} alt="" className="img" />
            <img src={shoeCategory} alt="" className="img" />
            <img src={tShirts} alt="" className="img" />
            <img src={sunglasses} alt="" className="img" />
        </div>
        <div className="secondContainer">

            <h1>New Arrivals</h1>
            </div>
            <div className="imgContainer">
            <img src={runningShoes} alt="" className="img" />
            <img src={redshoes} alt="" className="img" />
            <img src={realmewatch} alt="" className="img" />
            <img src={nickelwatch} alt="" className="img" />
            </div>
            <div className="secondContainer">
            <h1>Casuals</h1>
            </div>
            <div className="imgContainer">
            <img src={img3} alt="" className="img" />
            <img src={darkblueshoes} alt="" className="img" />
            <img src={blackshirt} alt="" className="img" />
            <img src={blacksunglasses} alt="" className="img" />
            
            </div>
            <div className="secondContainer">
            <h1>Ladies Wears</h1>
            </div>
            <div className="imgContainer">
            <img src={formaldress} alt="" className="img" />
            <img src={FloralCottonFrock} alt="" className="img" />
            <img src={blouse} alt="" className="img" />
                <img src={watch} alt="" className="img" />
            </div>
    
             <Footer/> 
        </div>
    );
}
export default Home;