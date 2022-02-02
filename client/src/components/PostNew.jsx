import axios from 'axios';
import React, {useState} from 'react';
function PostNew(props) {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const posting = () => {
        axios.post('http://localhost:3000/api/post', {
            title:title,
            image:url,
            userid:props.data
        })
        .then((result)=>{
            console.log(result)
        });
    }

  return (
    <div>
        <label>Title</label>
        <input type='text' onChange={(e)=>setTitle(e.target.value)}></input>
        <label>URL</label>
        <input type='url' onChange={(e)=>setUrl(e.target.value)}></input>
        <button type='submit' onClick={posting}>Post</button>
    </div>
  )     
}

export default PostNew;
