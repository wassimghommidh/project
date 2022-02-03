import React from 'react';
import Search from "./Search.jsx";
import Upload from "./Upload.jsx";
import { IoHome } from "react-icons/fa";
// import style from "../../public/style.css" 
 function Nav() {
  return (
  
  <div className='nav-bar'>
       <div className ='left-side'> 
       <button id='homePage' type="submit">HomePage</button>
       </div>
       <div className ='middle-side'>
     <Search/>      
       </div>
       <div className ='right-side'></div>
        <Upload/>
         </div>
       
  )
}

export default Nav ;