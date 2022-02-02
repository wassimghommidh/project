import React from "react";
import Register from "./Register.jsx";
import LogIn from "./LogIn.jsx";
import axios from 'axios';
import PostNew from "./PostNew.jsx";
class App extends React.Component {
    constructor(props) {
      super(props);
         this.state = {
           userinfo:{},
           redirect:''
         }
    }
    connect (emailLog,passwordLog)  {
      console.log(emailLog,passwordLog)
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
       <div>
      <Register />
      <PostNew data={this.state.userinfo.id}/>
      <LogIn connect={this.connect.bind(this)} />
       </div>
     );
   }
 }
 export default App;