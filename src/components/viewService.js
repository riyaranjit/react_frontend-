import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const Viewservice = () => {

  const [service, setService] = useState([]);


  useEffect(() => {

    axios.get("http://localhost:90/service/view", { headers: headers }).then(
      result => {
        console.log(result)

        setService(result.data)
      }
    )
      .catch((err) => {
        console.log(err.response)
      })
  }, [])
  
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('admintoken')
    }


  const servicedetail = {
    service
  }
  console.log(servicedetail)



  const deleteService=(sid)=>{
    console.log('id ' , sid)
    axios.delete("http://localhost:90/service/delete/" + sid,{ headers:headers

    }). then((result)=>{
      
      console.log(result.data);
      toast.success('Service Deleted Successfully', {autoClose:4000})

      window.location.reload();
    })
    .catch(e => {
      // setMessage("sth went wrong, please try again!");
      toast.error("Please try again!")

      
    })
  }



  return(
  <>

  <ToastContainer></ToastContainer>
  <div className='sidepanel'>
    <div className='sidepanel-left'> <Sidebar /></div>
    <div className='sidepanel-right'>
      <div className="container-fluid" style={{ marginTop: 20 }}>
        <div className="row">

          <div className="col-md-12">
            <div className="row">
              <div className='table-responsive'>
              <table className="table">
                <thead class=" table-striped thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Service</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Price(Rs)</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {service.map((item, index)=>{
                    console.log(item)
                    return(
                      
                      <tr>
                        <td>{index+1}</td>
                        <td>{item.sname}</td>
                        <td>{item.sduration}</td>
                        <td>Rs.{item.sprice}</td>
                        <td>{item.sdescription}</td>
                        
                        <td><img src={'http://localhost:90/'+ item.simage} className="s-image" /></td>
                        <td> <Link to={"/service/update/"+ item._id}
                            style={{ textDecoration: "none", left: "10px" }}
                          >
                           <Button>Update</Button> 
                          </Link> 

                          <Button size="small" onClick={()=>deleteService(item._id)} color="secondary" >
                              Delete
                            </Button>

                        </td>
                      </tr>
                    )
                  })}
                

                </tbody>
              </table>


              </div>
            </div>
          </div>

        </div>
      </div>

    </div>




  </div>
  </>) 
}

export default Viewservice;
