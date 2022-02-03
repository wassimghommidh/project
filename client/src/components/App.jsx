import React from "react";
import Register from "./Register.jsx";
import LogIn from "./LogIn.jsx";
import axios from 'axios';
import PostNew from "./PostNew.jsx";
import Home from "./Home.jsx";
import MainPage from './MainPage.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo:{}
    }
  }
    connect (emailLog,passwordLog)  {
      axios.post('http://localhost:3000/api/login', {
        email:emailLog,
        password:passwordLog
      })
      .then((result)=>{
        console.log(result);
        this.setState({userinfo:result.data.userinfo,redirect:result.data.redirect})
      });
  };
  render() {
    return (
     <Router>    
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/PostNew" element={<PostNew data={this.state.userinfo.id}/>}/> 
        <Route path="/LogIn" element={<LogIn connect={this.connect.bind(this)} />}/> 
        <Route path="/MainPage" element={<MainPage/>}/> 
      </Routes> 
     </Router> 
    );
   }
 }
 export default App;