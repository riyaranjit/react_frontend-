const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <h6>COMPANY</h6>
                                    <ul>
                                        <li>
                                            <a>About</a>
                                        </li>
                                        <li>
                                            <a>Contact</a>
                                        </li>

                                        <li>
                                            <a>Our Team</a>
                                        </li>
                                        <li>
                                            <a>Booking</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h6>USEFUL LINKS</h6>
                                    <ul>
                                        <li>
                                            <a>Hair care</a>
                                        </li>
                                        <li>
                                            <a>Skin care</a>
                                        </li>

                                        <li>
                                            <a>Login</a>
                                        </li>

                                        <li>
                                            <a>Register</a>
                                        </li>
                                    </ul>

                                </div>
                                <div className="col-6 col-lg-3">
                                    <h6>Contact Us</h6>
                                    <ul>
                                        <li>
                                            <a>Address-<span>Tokha,Kathmandu</span> </a>
                                        </li>
                                        <li>
                                            <a>Email-<span>touchofbeauty@gmail.com</span></a>
                                        </li>
                                    </ul>

                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="row justify-content-end">
                                        <div className="col-md-12 col-lg-11 mb-md-0 mb-4">
                                            <h6 className="footer-heading">Follow Us</h6>
                                            <div className=" row">
                                                <div className="col-3 mx-auto">
                                                    <a href="https://www.facebook.com/Touch-of-Beauty-868091186599372" target="_blank">
                                                        <i className="fab fa-facebook fontawesome-style"></i>
                                                    </a>
                                                </div>
                                                <div className="col-3 mx-auto">
                                                    <a href="#">
                                                        <i className="fab fa-instagram fontawesome-style"></i>
                                                    </a>
                                                </div>
                                                <div className="col-3 mx-auto">
                                                    <a href="#">
                                                        <i className="fab fa-twitter fontawesome-style"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className=" main-hero-para text-center w-100 ">

                                    Copyright @ 2022 TouchOfBeauty. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;