import React from "react";
import aboutimg from "../images/aboutimage.jpg"


function About() {
  return (
    <>
    
    <section id="about">
    <div className="about" >
      <div className=" container ">
        <div className="row align-items-center my-5 lets-pad">
          <div className="  col-lg-5">
            <img
              className="img-fluid rounded mb-lg-0"
              src={aboutimg}
              alt="about image"/>
          </div>
          <div className=" col-lg-6">
            <h1 className="font-weight-light">About Us</h1>
            <p>
            We are a leading beauty service provider, providing professional Makeup artists and 
            stylists at your comfort.Our dedicated and highly professional beauticians are very well
            equipped with necessary skillsets to help our customers experience the premium services. 
            Our core value lies in satisfying our customer base by overcoming their expectations in terms of
            quality of services within a reasonable price range . Open the app, choose 
            the service and get a premium beauty parlour services.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
    
    </>
  );
}

export default About;