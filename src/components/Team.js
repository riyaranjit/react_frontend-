import React from 'react';
import richaimg from "../images/richa.jpg";
import signupimg from "../images/6333050.jpg";
import umaimg from "../images/uma.jpg";
import ranjeetaimg from "../images/ranjeeta.jpg";
import riyaimg from "../images/riya.jpg";
import ivaanaimg from "../images/ivaana.jpg";
import calenthyimg from "../images/calenthy.jpg";

function Team() {
    return (
        <section id='team'>
        <div className='teamcontainer'>
            <h3>Meet our Professionals </h3>
           
                <div className='offset-md-1 col-md-10'>
                    <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
                        <ol className='carousel-indicators'>
                            <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active'></li>
                            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
                        </ol>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                            <div className='img-area'>
                                                <img src={richaimg} />
                                            </div>
                                            <div className='img-text'>
                                                <h4>Richa Shrestha</h4>
                                                <p>Hair Color Expert</p>

                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                            <div className='img-area'>
                                                <img src={umaimg} />
                                            </div>
                                            <div className='img-text'>
                                                <h4>Uma Tuladhar</h4>
                                                <p>Hair Style and Face Expert </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                            <div className='img-area'>
                                                <img src={ranjeetaimg} />
                                            </div>
                                            <div className='img-text'>
                                                <h4>Ranjeet Lama</h4>
                                                <p>Makeup Artist</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='carousel-item'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                            <div className='img-area'>
                                                <img src={riyaimg} />
                                            </div>
                                            <div className='img-text'>
                                                <h4>Riya Ranjit</h4>
                                                <p>Nail Artist</p>

                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                            <div className='img-area'>
                                                <img src={ivaanaimg} />
                                            </div>
                                            <div className='img-text'>
                                                <h4>Ivaana Sharma</h4>
                                                <p>Management Lead</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                            <div className='img-area'>
                                                <img src={calenthyimg} />
                                            </div>
                                            <div className='img-text'>
                                                <h4>Calenthy Rana</h4>
                                                <p>Body Masseaus</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default Team;
