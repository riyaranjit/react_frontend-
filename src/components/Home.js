import React from "react";
import Navbar from "./Navbar";
import web from "../images/headerimage.png";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import About from "./About";
import Team from "./Team";
import Category from "./Category";


const Home = () => {
  return (
    <>
      <Navbar />
      <section id="header" className=" d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column">
                <h1>Relax And Unwind With <strong className="brandname">Touch Of Beauty</strong>
                </h1>
                <h4 className="my-3">We offer a full range of services from eyebrows to hairdressing to bridal
                makeup. Entrust your beauty to professionals.</h4>
                <div className="mt-3">
                  < Link to="/services" className="btn-get-started">Get Started</Link>
                </div>
              </div>

              {/* image section */}
              <div className="col-lg-6 order-1 order-lg-2 header-image">
                <img src={web} className="img-fluid"  alt="header"/>
              </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <About/>
      <Category/>


      <Team/>
      <Footer/>
    </>
  )
}

export default Home;