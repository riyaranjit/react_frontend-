import { useState } from "react";
import axios from "axios";
import adminsignimg from "../images/adminregister.jpg";

const AdminRegister=()=>{
const [username, setUsername]= useState(''); //username lai backend ko req.body.username
const [password, setPassword]= useState('');
const [message, setMessage]= useState('');

const AdminRegisterState =(e)=>{
    e.preventDefault(); //prevents the page from being refresh
    const admindata = {username ,password};
    axios.post("http://localhost:90/admin/register", admindata)
    .then((result) => {
        if (result.data.status === 1)
            setMessage("Admin registered successfully!!")
    })
    .catch((err) => {
        setMessage("Couldn't register as an admin");
    })
    console.log(admindata);
}
    return(
        <div className="container mt-5">

            <div className="row">

               <div className="col-md-4">
                <img className="w-100" src={adminsignimg}  alt="image"/>
                </div>
               
                <div className="offset-md-1 col-md-4 mt-5">
                <h3 className="register-title text-center">Create an Admin Account</h3>
                <p className="register-msg text-center">{message}</p>
                    <form>
                       
                        <div className="form-group">
                        <label>Username</label>
                        <input type='text' className="form-control"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}/>

                        
                        </div>
                    
                        <div className="form-group">
                        <label>Password</label>
                        <input type='password' className="form-control"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                        </div>

                        
                        <p className="text-center">
                            <button type="submit" className="btn btn-primary" onClick={AdminRegisterState}>Submit</button></p>

                        
                        </form>
                    </div>
                

            
            </div>
        </div>
    )
}

export default AdminRegister;