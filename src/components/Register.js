import { useState } from "react";
import axios from "axios";
import signimg from "../images/6333050.jpg";

const Register = () => {
    const [username, setUsername] = useState(''); //username lai backend ko req.body.username
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const ClientRegister = (e) => {
        e.preventDefault(); //prevents the page from being refresh
        const userdata = { username, email, phone, password };
        axios.post("http://localhost:90/client/register", userdata)
            .then((result) => {
                if (result.data.status == 1)
                    // {console.log("everything is fine")}
                    setMessage("Customer registered successfully!!")
            })
            .catch((err) => {
                setMessage("Couldn't register");
            })

    }
    return (
        <div className="container col-md-10 mx-auto mt-5">
            <div className="row">
                <div className=" offset-md-1 col-md-4 mt-5">
                    <form>
                        <p className="h5 text-center mb-4">Create an account</p>
                        <p className="register-msg text-center">{message}</p>
                        <div className="form-group">
                            <input type='text' className="form-control" placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input type='text' className="form-control" placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input type='text' className="form-control" placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input type='password' className="form-control" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <p className="text-center">
                            <button type="submit" className="btn btn-danger" onClick={ClientRegister}>Submit</button></p>
                        <p className="forgot-password text-right">
                            Already have an account? <a href="/login">Log in</a>
                        </p>

                    </form>
                </div>
                <div className="offset-1 col-md-5">
                    <img className="w-100" src={signimg} />
                </div>
            </div>
        </div>
    )
}

export default Register;