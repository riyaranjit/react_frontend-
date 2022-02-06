import { useEffect, useState } from "react";
import axios from "axios"; //databse ma pathaune kam
import Sidebar from "./Sidebar";
import { toast, ToastContainer } from "react-toastify";





const Addservice = () => {
  const [sname, setName] = useState('');
  const [sduration, setDuration] = useState('');
  const [sprice, setPrice] = useState('');
  const [sdescription, setDescription] = useState('');
  const [simage, setImage] = useState('');
  // const [cid, setcid] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState([]);
  const [cid, setCCategory] = useState();

  useEffect(() => {
    axios.get("http://localhost:90/category/view").then(
      result => {
        console.log(result)

        setCategory(result.data)

      }
    )

  }, [])


  const onChangeUserType = (e) => {
    setCCategory(e.target.value);
  
  }


  const ServiceDetails = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('admintoken')
      }
    }
    const servicedata = {
      sname, sduration, sprice, sdescription, cid, simage
    }
    console.log(servicedata);

    axios.get("http://localhost:90/category/view").then(
      result => {
        console.log(result.data)

      }
    )

    const data = new FormData()
    data.append('cid', cid)
    data.append('sname', sname)
    data.append('sduration', sduration)
    data.append('sprice', sprice)
    data.append('sdescription', sdescription)
    data.append('service_image',  simage)


    axios.post("http://localhost:90/service/insert", data, config)  //data ko satta servicedata thyo
      .then(result => {

        console.log(result.data);
        toast.success('Service Added Successfully',{autoClose:3000});
   
      })
      .catch(e => {
        console.log(e.response);
  
        toast.error("Service couldn't be added");
      })
  }
  return (
    <>
    <ToastContainer></ToastContainer>

    <div className="sidepanel">
      <div className='sidepanel-left'> <Sidebar /></div>
      <div className='sidepanel-right'>
        <div className="container-fluid">

          <div className="row">

            <div className="offset-md-2 col-md-6">
              <h2 className="text-center" style={{ marginTop: 20 }}>Add service</h2>

              {message}
              <form >
                <div className="form-group">
                  <input type="text" className="form-control " placeholder="Name"
                    value={sname}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Duration"
                    value={sduration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Price"

                    value={sprice}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Description"
                    value={sdescription}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div> 

                <div className="form-group">
                
                <input type="file" name="simage" className="form-control" id="customFile" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>

                
                <select className="form-control" name="cid" label="Select service category" onChange={onChangeUserType}
                >
                   
                  {category.map((option) => (

                    <option key={option._id} value={option._id}>{option.cname}</option>

                  ))}
                </select>


              





                <div className="form-group mt-4 text-center">
                  <input type="submit" className="btn btn-primary"
                    onClick={ServiceDetails}
                  />
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Addservice;
