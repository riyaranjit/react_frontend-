import { useState } from "react";
import axios from "axios";
import loginimg from "../images/login.png";

const AdminLogin = () => {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [message, setMessage]= useState('');

    const AdminLoginState=(e)=>{
        e.preventDefault();
        const admindata=  {
            username, password
        }
        console.log(admindata);
        axios.post("http://localhost:90/admin/login", admindata)
        .then(result => {

            if(result.data.token){
              const token1= result.data.token;

              //locally stores 
              localStorage.setItem('admintoken', token1);
              window.location.href='/dashboard'
              setMessage("Admin login successful")
              

            }
            else{
                setMessage("Login failed, please try again!!")

            }
        })
        .catch()
    }
    return (
        <div className="container mt-5">

            <div className="row justify-content-center">
               
                <div className="col-md-4">
                    <h3 className="text-center"> Admin LOGIN</h3>
       
                    <p className="text-center login-msg">{message}</p>
                    <img className="login-img mb-5" src={loginimg} alt="image"/>
                    <form>
                        <div className="form-group">
                       
                            <input type="text" className="form-control" placeholder="Username"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            
                            <input type="password" className="form-control"  placeholder="Password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <div className="form-group text-center">
                            <input type= "submit" className="btn btn-primary"
                            onClick={AdminLoginState}
                            />
                        </div>
                    </form>

                </div>
  
            </div>
        </div>
    )
}

export default AdminLogin;