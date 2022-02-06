import { useState } from "react";
import axios from "axios"; //databse ma pathaune kam
import loginimg from "../images/login.png";
import {  useNavigate } from "react-router-dom";

const Login = () => {
   
    let navigate= useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const ClientLogin = (e) => {
        e.preventDefault();
        const logindata = {
            username, password
        }
         console.log(logindata);
        axios.post("http://localhost:90/client/login", logindata)
            .then(result => {
                
                

                if (result.data.token) {
                    const token1 = result.data.token;
                   
                    localStorage.setItem('user',username)
                    //locally stores 
                    localStorage.setItem('token', token1);
                    // localStorage.setItem('isUser',token1);
                    console.log(token1)
                   

                   
                    setMessage("Login Successfull !!")
                    window.location.href='/'
                    navigate('/');

                }
                else {
                    setMessage("Login failed, please try again!!")

                }
            })
            .catch()
    }
    return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4 mt-3">
                    <h4 className="text-center mb-4">LOGIN</h4>
                    <p className=" text-center login-msg">{message}</p>
                    <img className="login-img mb-5" src={loginimg} alt="image"/>
                    <form>
                        <div className="form-group">
                           
                            <input type="text" className="form-control" placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                           
                            <input type="password" className="form-control" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <p className="text-center">
                            <button type="submit" className="btn btn-danger" onClick={ClientLogin}>Submit</button>
                        </p>

                        <p className="account-option text-right">
                            Don't have an account? <a href="/register">Sign up</a>
                        </p>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Login;