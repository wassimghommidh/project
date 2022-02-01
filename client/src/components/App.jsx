import React from "react";
import FileUpload from './FileUpdate.jsx'
import axios from'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:[]
    };
  }
   componentDidMount() {
     axios.get("/api/vid").then(res=>{console.log("res",res.data)
     this.setState({data:res.data});}
     )
   }
   render() {
     return (
       <div >
      <FileUpload/>
       {this.state.data.map((elem)=>{return (
              <div className="fl">
                 <video controls><source src={elem.file} type="video/mp4"/></video>
                   
                   
                    </div>
        )})}
       </div>
     );
   }
 }
 export default App;