import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";



function Navbar() {

  let user = localStorage.getItem('token')
  let userName = localStorage.getItem('user')
  console.log(userName);


  function logout() {
    localStorage.clear();
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    window.location.href = '/'
  }

  return (
    <>



      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} alt='logo of tob' width="120" height="60" />
        <a className="navbar-brand">TouchOfBeauty</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active pl-lg-5">
              <a href="/#">HOME<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item pl-lg-3">
              <a href="/#about">ABOUT</a>

            </li>
            <li className="nav-item pl-lg-3">
              <a href="#category">SERVICE</a>
            </li>
            <li className="nav-item pl-lg-3">
              <a href="/#team">TEAM</a>
            </li>
            <li className="nav-item pl-lg-3">
              <a href="#contact">CONTACT</a>
            </li>

            

            {user ? <div className="d-flex align-items-flex-start"><li className="cart" style={{ paddingLeft: "20px" }}><Link to='/cart'><i className="fas fa-shopping-cart" /></Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={{padding:"0 20px"}} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {userName}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item" ><Link to="/">Profile</Link></li>
                  <li className="dropdown-item" onClick={logout}><Link to="/">Logout</Link></li>

                </div>
              </li>
              {/* <li className=" pl-lg-5 item button" onClick={logout}><Link to="/">Logout</Link></li> */}
            </div>
              : <><li className=" pl-lg-5 item button"><Link to="/login">Log In</Link></li>
                <li className=" nav-item pl-lg-3 item button secondary "><Link to="/register">Sign Up</Link></li></>
            }



          </ul>
        </div>

      </nav>


    </>
  )
}

export default Navbar;