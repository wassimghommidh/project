import React from "react";
import Search from "./Search.jsx";
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
      <div className="container5">
        <Search />
      </div>
      <div className="container6">
      <Link to='/PostNew' > <li>PostNew</li></Link>
        <Link to='/account' ><li>account</li></Link>
        <Link to='/MainPage' > <li>HomePage</li></Link>
      </div>
    </div>
  );
}

export default Nav;
