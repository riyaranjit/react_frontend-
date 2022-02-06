import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Category = () => {
    const [cdata, setCData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:90/category/view")
            .then(result => {
                setCData(result.data);
                console.log(result.data);
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [])


    return (
        <>
            <section className='py-4  container d-flex align-items-center' id='category'>
        
                <div className='row justify-content-center'>
                <h2 className='category-name text-center'>Categories</h2>

                    {cdata.map(categorydata => {
                        console.log(categorydata)
                        return (
                            <div className='col-md-10 col-md-6 col-lg-3 mx-0 mb-4' key={categorydata.id}>
                                <Link to={'/service/category/'+ categorydata._id}>
                                <div className='card' style={{ width: "12rem" }}>
                                    <img src={'http://localhost:90/'+ categorydata.cimage} ></img>
                                    <div className='card-body'>
                                        <h5 className='card-text'>{categorydata.cname}</h5>

                                    </div>
                                </div>
                                </Link>
                                
                            </div>

                        )
                    })
                    }

                </div>

            </section>
            

        </>
    )
}

export default Category;

