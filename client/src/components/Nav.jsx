import React from 'react';
import Search from "./Search.jsx";
import {Link} from 'react-router-dom'

// import style from "../../public/style.css" 
 function Nav() {
  return (
  <div className='nav-bar'>
    <div className ='left-side'> 
       <Link to='/MainPage' ><li id='HomePage'>HomePage</li></Link> 
    </div>
       <div className ='middle-side'>
     <Search/>      
    </div>
       <div className ='right-side'>
       <Link to='/PostNew' ><li>PostNew</li></Link>
       </div>
         <div className ='right-side'>
         <Link to='/account' ><li>account</li></Link>
         </div>
      </div> 
  )
}

export default Nav ;