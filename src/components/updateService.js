import { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


const UpdateService=()=>{
    let  navigate = useNavigate();
    const [sname, setSName]= useState('');
    const [sprice, setPrice]= useState('');
    const [sduration, setDuration]= useState('');
    const [sdescription, setDescription]= useState('');

    const config={
        headers:{
            Authorization: 'Bearer '+ localStorage.getItem('admintoken')
          
        }
    }

    const {sid}= useParams();

    useEffect(()=>{
        axios.get("http://localhost:90/service/single/"+ sid,config)
        .then(result=>{
          console.log(result.data);
          setSName(result.data.sname);
          setPrice(result.data.sprice);
          setDescription(result.data.sdescription);
          setDuration(result.data.sduration);

      }).catch(function(err){
        console.log(err);
      })
      },[]);

      //nowto update service 

      const updateService=(e)=>{
        e.preventDefault();

          const myservicedata={
              sid, sname, sdescription, sduration, sprice
          }

          axios.put("http://localhost:90/service/update", myservicedata, config)
          .then(result=>{
              console.log(result);
              
                toast.success('Service Updated Successfully',{autoClose:2000});
              
                navigate('/viewservice');

          })
          .catch(e=>{
              console.log(e)
          })
      }

    return(
        <>
        <ToastContainer></ToastContainer>
        <div className="container">
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h2 className="text-center">Service Update</h2>

                    <form className="mt-5">
                    <div className="form-group">
                        <label>Service Name</label>
                        <input type="text" className="form-control"
                         value={sname}
                         onChange={e=>setSName(e.target.value)}
                        />
                        </div>
                      

                        <div className="form-group">
                        <label>Service Price</label>
                        <input type="text" className="form-control"
                         value={sprice}
                         onChange={e=>setPrice(e.target.value)}
                        />
                        </div>

                        
                        <div className="form-group">
                        <label>Service Duration</label>
                        <input type="text" className="form-control"
                         value={sduration}
                         onChange={e=>setDuration(e.target.value)}
                        />
                        </div>

                        <div className="form-group">
                        <label>Service Description</label>
                        <input type="text" className="form-control"
                         value={sdescription}
                         onChange={e=>setDescription(e.target.value)}
                        />
                        </div>



                        <input type="submit" className="btn btn-dark" 
                        onClick={updateService}
                        />
                    </form>
                </div>
            </div>

        </div>
        </>
    )
}

export default UpdateService;