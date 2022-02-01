import React,{Fragment,useState} from 'react'
import axios from 'axios';
// import FormData from 'form-data';
import "babel-polyfill";
const FileUpload =()=>{
 
      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
 
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
      const uploadFile = async (e) => {
        const formData =new FormData();
        formData.append('file',file)
        console.log(formData,'fi');
        try {
          const res = await axios.post(
            "/api/upload",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
 
      return (
        <div >
          <input type="file" onChange={saveFile} name='image'/>
          <button onClick={uploadFile}>Upload</button>
        </div>
      );
}
 
export default FileUpload;