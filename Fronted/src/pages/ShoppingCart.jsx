import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/ShoppingCart.css";
import { Link } from "react-router-dom";


export default function ShoppingCart() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Navbar />
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center">
          <MDBCol lg="10">
            <MDBCard className="shopping-cart">
              <MDBCardBody>
                <MDBRow>
                  {/* Products Section */}
                  <MDBCol lg="7">
                    <MDBTypography tag="h3">
                      Your products
                    </MDBTypography>
                    {/* Add your product items here */}
                  </MDBCol>

                  {/* Payment Section */}
                  <MDBCol lg="5">
                    <MDBTypography tag="h3">
                      Payment
                    </MDBTypography>

                    <form>
                      <div className="mb-4">
                        <label className="form-label">Card number</label>
                        <MDBInput
                          type="text"
                          size="lg"
                          defaultValue="1234 5678 9012 3457"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Name on card</label>
                        <MDBInput
                          type="text"
                          size="lg"
                          defaultValue="John Smith"
                        />
                      </div>

                      <MDBRow>
                        <MDBCol md="6" className="mb-4">
                          <label className="form-label">Expiration</label>
                          <MDBInput
                            type="text"
                            size="lg"
                            minLength="7"
                            maxLength="7"
                            defaultValue="01/22"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-4">
                          <label className="form-label">CVV</label>
                          <MDBInput
                            type="text"
                            size="lg"
                            minLength="3"
                            maxLength="3"
                            placeholder="•••"
                            defaultValue="•••"
                          />
                        </MDBCol>
                      </MDBRow>

                      <p className="mb-4">
  Fashion Hunt offers a seamless and secure shopping experience by accepting major credit cards, including Visa, Mastercard, American Express, and Discover. For more details, visit
  <a href="https://www.fashionhunt.ro/us/fees" target="_blank" rel="noopener noreferrer"> Fashion Hunt</a>.
</p>

<div className="button-group">

  <Link to='/'>
    <button className="btn btn-outline-dark" type="submit">
      Buy now
    </button>
    </Link>
  
  <Link to='/product'>
 <button className="btn btn-outline-dark">
      Back to shopping
    </button>
    
    </Link>
</div>

                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </section>
  );
}
