import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";


const Service = () => {

    const [data, setData] = useState([]);

    const { cid } = useParams();

    const config={
        headers:{
            Authorization: 'Bearer '+ localStorage.getItem('token')
          
        }
    }


    useEffect(() => {
        axios.get("http://localhost:90/service/category/" + cid)
            .then(result => {
                console.log(result.data);
                setData(result.data)

            }).catch(function (err) {
                console.log(err);
            })
    }, []);

    const addCart = (sid) => {     
       
        axios.post('http://localhost:90/cart/insert/'+sid,{}, config)
        .then((response)=>{
            console.log(response);
          toast.success("Service has been added to your cart", {
            position: toast.POSITION.TOP_RIGHT,

          });
      
        //   window.location.href='/cart'
        }
        )
      }

    return (
        
        <>
        <ToastContainer/>
            <Navbar />
            {data && data.map(servicedata => {
                // console.log(servicedata._id)

                return (
                    <>
                    {/* <h1>Go to Cart({servicedata.length})</h1> */}
                    <div className="container service">
                        <div className="servicerow mt-5">

                            <div className="cardhorizontal">
                                <div className="img-fluid card-image">
                                    <img src={'http://localhost:90/' + servicedata.simage} className="fadeIn serviceimage" />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <span className="card-title" style={{ fontSize: "18px", fontWeight: 'bold' }}>{servicedata.sname}</span>
                                        <div className="row mt-2">
                                            <span className="card-time">Rs.{servicedata.sprice}</span>
                                            <span className="card-duration">Duration- {servicedata.sduration}</span>
                                        </div>

                                        <p className="mt-2">{servicedata.sdescription}</p>
                                    </div>
                                    <div className="card-action">

                                        <Button size="small" variant="contained" onClick={()=>addCart(servicedata._id)} >
                                            Add to cart
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>





                )


            })}
            <Footer />
        </>
    )
}

export default Service;


