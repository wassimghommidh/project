import React from "react";
import {Link} from 'react-router-dom'
const Account = (props) => (
  <div id="color">
    <div className="container">
      <h1 id="name">Profile name </h1>
      <button id="editprofile">Edit profile</button>
      <Link to='/MainPage' ><li>HomePage</li></Link> 
    </div>
    <div className="container1">
      <h3 className="name1">200 posts</h3>
      <h3 className="name1">50 likes</h3>
    </div>
    <div className="container2">{/* <h1 id="name2">Posts</h1> */}</div>
    <div className="container3">
      <img src="https://images.pexels.com/photos/428431/pexels-photo-428431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <img src="https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <img src="https://images.pexels.com/photos/50859/pexels-photo-50859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </div>
  </div>
);

export default Account;
