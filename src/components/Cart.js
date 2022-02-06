import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {

  const [citem, setCItem] = useState([]);
  const [cart, setCart] = useState();

  useEffect(() => {
    axios.get("http://localhost:90/cart/view", config)
      .then(result => {
        console.log(result.data);
        setCItem(result.data.sid)
        setCart(result.data)
        console.log('use', citem)
      }).catch((err) => {
        console.log(err);
      })
  }, []);
console.log(citem)

  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')

    }
  }
  

  return (
    <>
      {/* {citem.length===0 && <div>No item added to cart </div>} */}
      <div className="container-fluid" style={{ marginTop: 20 }}>
        <div className="row">

          <div className=" offset-md-2 col-md-8">
            <div className="row">
              <div className='table-responsive'>
                <table className="table">
                  <thead className=" table-striped ">
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Service</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Price(Rs)</th>
                      <th scope="col">Image</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    {citem && citem.map((item, index) => {
                      console.log(item)
                      return (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{item.sname}</td>
                                <td>{item.sduration}</td>
                                <td>Rs.{item.sprice}</td>
                                <td><img src={'http://localhost:90/' + item.simage} className="s-image" /></td>
                            <td>
                              <Button size="small" color="error"  >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        </>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className=" offset-md-3 col-md-6 row" style={{marginTop:"20rem;"}}>
              <Button size="medium" color="danger" variant="contained">
                <Link to="/appointment"
                  state={{cartId:cart}}
                 
                >
                Book Appointment
                </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Cart;