// import $ from "jQuery";

import axios from "axios";
import React,{ useState } from "react";
import { useLocation } from "react-router-dom";

const Appointment = () => {

    const [date, setDate]= useState();
    const [time, setTime]= useState();
    const location=useLocation()
    const {cartId}=location.state

    console.log(cartId)
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')

        }
    }

    const handleSubmit=async (e)=>{
        let adate=date
        let atime=time
        let cartid=cartId?._id
        let cid=cartId?.clientid
        const appointmentData={
            adate,atime,cartid,cid
        }
        console.log(cartid)
        await axios.post("http://localhost:90/appointment/insert",appointmentData,config)
        await axios.delete( `http://localhost:90/cart/delete/${cartid}`,config)
    }

    return (
        <>
            <div class="container">
                <h3>Selected Date:{date}</h3>
                <div class="row">
                    <div class='col-sm-6'>
                        <div class="form-group">
                                <input type='date' name="adate" class="form-control" onChange={e=> setDate(e.target.value)} />
                                <input type='time' class="form-control" onChange={e=> setTime(e.target.value)} />
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                                <p className="text-center">
                            <button type="submit" className="btn btn-danger" onClick={handleSubmit}>Confirm Booking</button>
                        </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )

}


export default Appointment;