import React from 'react';
import { Link } from 'react-router-dom';
const Home = ()=>{
 return(
   <div>
     <Link to='/register'>
       <li >register</li>
     </Link>
     <Link to='/LogIn'>
       <li >LogIn</li>
     </Link>
   </div>
 )
}
export default Home;



