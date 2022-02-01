import React from "react";
import Register from "./Register.jsx";
import LogIn from "./LogIn.jsx";

class App extends React.Component {
    constructor(props) {
      super(props);
    }

   render() {
     return (
       <div>
      <Register />
      
      <LogIn />
       </div>
     );
   }
 }
 export default App;