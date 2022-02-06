import { useState } from "react";
import axios from "axios"; //databse ma pathaune kam
import Sidebar from "./Sidebar";

const AddCategory = () => {
  const [cname, setName] = useState('');
  const [cimage, setCImage] = useState('');
  const [message, setMessage] = useState('');






  const CategoryDetails = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('admintoken')
      }
    }
    const categorydata = new FormData();
    categorydata.append('cname', cname);
    categorydata.append('category_image', cimage)

    console.log(categorydata);

    axios.post("http://localhost:90/category/insert", categorydata, config)
      .then(result => {

        console.log(result.data);

        if (result.data.success) {
          //service added
          setMessage('Category Added!!!!!!');

        }
        else {
          //something went wrong
          setMessage("Category couldnt be added");

        }
      })
      .catch(e => {
        setMessage("sth went wrong, please try again!");
      })
  }
  return (

    <div className="sidepanel">
      <div className='sidepanel-left'> <Sidebar /></div>
      <div className='sidepanel-right'>
        <div className="container-fluid">

          <div className="row">

            <div className="offset-md-2 col-md-6">
              <h2 className="text-center" style={{ marginTop: 20 }}>Add Category</h2>

              <p className="text-center"> {message}</p>
              <form >
                <div className="form-group">
                  <input type="text" className="form-control " placeholder="Name"
                    value={cname}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input type="file" className="form-control" onChange={(e) => setCImage(e.target.files[0])}></input>
                </div>

            


                <div className="form-group">
                  <input type="submit" className="btn btn-primary"
                    onClick={CategoryDetails}
                  />
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory;

