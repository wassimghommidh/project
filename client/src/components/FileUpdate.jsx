import React,{Fragment,useState} from 'react'
import axios from 'axios';
// import FormData from 'form-data';
import "babel-polyfill";
const FileUpload =()=>{
 
      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
    //   let result;
      const saveFile = (e) => {
        setFile(e.target.value);
        setFileName(e.target.files[0].name);
      };
    //    const prevFile=async(file)=>{
    //     var reader= new FileReader();
    //     reader.readAsDataURL(file)
        
    //         result= reader.result
        
    //    }
    //    prevFile(file)
      const uploadFile = async (e) => {
        //   console.log(result)
        // const formData =new FormData();
        // formData.append('file',file)
        try {
          const res = await axios.post(
            "/api/upload",
            {file}
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
 
      return (
        <div >
          <input type="input" onChange={saveFile} name='image'/>
          <button onClick={uploadFile}>Upload</button>
        </div>
      );
}
 
export default FileUpload;