import React,{useState,useEffect} from "react";
import axios from "axios";
const MainPage=()=> {
  const [posts,setPosts] =useState([])
  useEffect(()=>{
   axios.get("api/get/post")
   .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  })
    return (
    <div>
     <h1>nav</h1>
     <h1>postes</h1>
    </div>
    );
  }
  
  export default MainPage;