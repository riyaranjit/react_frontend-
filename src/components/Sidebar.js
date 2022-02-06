import { Button } from '@material-ui/core';
import { ExitToApp} from '@material-ui/icons';
import React from 'react';
import {useNavigate } from "react-router-dom";
import {SidebarData} from './sidebarData';



function Sidebar () {
  let navigate= useNavigate();

  const handleClick=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('isUser')
    localStorage.removeItem('isAdmin')

    navigate('/')
    // window.location.href = '/'

    
  }
  return <div className='Apple'>
    <div className=' Sidebar'>
      

        <ul className='SidebarList'>
        {SidebarData.map((val, key)=>{
          return <li key={key} 
          className="row"
          id={window.location.pathname== val.link ? "active": " "}
          onClick={()=> {window.location.pathname= val.link;
          
          }}>
            {" "}
             <div id='icon'>{val.icon}
             </div>  {" "}
             <div id='title'>{val.title }</div>
             </li>
        })}
        </ul>

    
        <Button  startIcon={<ExitToApp />} size="large" onClick={handleClick} style={{color:"white",marginTop:150, marginLeft:50}}>Logout</Button>
 
      </div>

  </div>
}

export default Sidebar;

