import React from "react";  
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import '../styles/Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer'>
        <div className="row1">
        <div className='contentFooter' id="company-description">
            <h3 className='footerTitle' >Fashion Hunt</h3>
            <div className="descriptions">
                <p className='footerDes'>
                    Fashion Hunt is a web development company that 
                    specializes in creating high-quality, responsive 
                    websites for businesses of all sizes. Our team of 
                    experienced developers and designers work closely 
                    with clients to understand their unique needs and 
                    deliver customized solutions that drive results...
                </p>
                <div className="icons">
                    <li className="icon"><FacebookIcon /></li>
                    <li className="icon"><LinkedInIcon /></li>
                    <li className="icon"><InstagramIcon /></li>
                    <li className="icon"><PinterestIcon /></li>
                </div>
            </div>
        </div>
        <div className="quickLinks">
            <div className="contentFooter" id="quick links">
            <h3 className='footerTitle'>Quick Links</h3>
                    <li className='footerlist1'><a href=""><Link to = '/'>Home</Link></a></li>
                    <li className='footerlist1'><a href=""><Link to = '/product'>Product</Link></a></li>
                    <li className='footerlist1'><a href=""><Link to = '/about'>About Us</Link></a></li>
                    <li className='footerlist1'><a href=""><Link to = '/contact'>Contact Us</Link></a></li>
                    
</div>
        </div>
            <div className='contentFooter' id="contact">
        <h3 className='footertitle'>Contact Us</h3>
            <div className="contactList">
                <div className="list">
                <span className='contactIcon'><BusinessIcon/></span>
                <li className="footerlink2">123 Main St, City, Country</li>
                </div>
                <div className="list">
                <span className='contactIcon'><PhoneIcon/></span>
                <li className="footerlink2">+1 234 567 890</li>
                </div>
                <div className="list">
                <span className='contactIcon'><EmailIcon/></span>
                <li className="footerlink2">fashionhunt123@gmail.com</li>
                </div>
            </div>
        </div>
            </div>
        <hr />
        <div className="copyright">
            <div className="secondlist">
                <li className="copyrightIcon"><CopyrightIcon/></li>
                <li className="text">Copyright 2025 Fashion Hunt | All rights reserved.</li>
            </div>
        </div>
    </div> 
    );
}

export default Footer;
