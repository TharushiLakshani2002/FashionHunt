import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Contact.css'

function Contact() {
    return (
        <div className='contact'>
        <Navbar />
        <div className='contact-container'>
        </div>
            <h1>Contact Us</h1>
            <div className='contactcontainer'>
                <div className='containr1' id='contactForm'>
                    <h2>Get In Touch..</h2>
                    <div>
                        <input className='contactElements' type='text' placeholder='Enter your name' id="name" />
                        </div>
                        <div>
                        <input className='contactElements' type='email' placeholder='Enter your email' id="email" />
                        </div>
                        <div>
                           <textarea className='contactElements' type='text' placeholder='Enter your message' id="message" cols="30" rows="10" />
                    </div>
                    <div>
                        <button>Send Now</button>
                    </div>
                    </div>
                    <div className='container1' id="contactDetails">
            <div className="contactList1">
                <div className="list1" >
                    <span className='contactDetailIcon'><BusinessIcon /></span>
                    <li className='element'>1234 Street Name, City, State, 12345</li>
                </div>
                <div className="list1">
                    <span className='contactDetailIcon'><PhoneIcon /></span>
                    <li className='element'>+1 234 567 890</li>
                </div>
                <div className="list1">
                    <span className='contactDetailIcon'><EmailIcon /></span>
                    <li className='element'>fashionhunt123@gmail.com</li>
                </div>
                <hr />
                <p>At FashionHunt, your satisfaction is our top priority. Whether you 
                    have questions about our products, need assistance with an order, or
                     simply want to share your thoughts, we're here to listen. Our 
                     dedicated team is committed to providing prompt and personalized
                     support to ensure your shopping experience is seamless and enjoyable.</p>
                <p>Connect with us on social media for the latest updates, style tips, and exclusive offers. We love hearing from our customers and are always ready to assist you.</p>
                <div className='list2'>
                    <div className='contctIcons'>
                        <li className='icon1'><FacebookIcon /></li>
                        <li className='icon1'><LinkedInIcon /></li>
                        <li className='icon1'><InstagramIcon /></li>    
                        <li className='icon1'><PinterestIcon /></li>
                    </div>
                </div>
            </div>
        </div>
            </div>
                    <Footer />
                </div>
            )
        }
        export default Contact;