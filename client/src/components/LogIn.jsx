import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {

    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

    const connect = () => {
        axios.post('http://localhost:3000/api/login', {
            email:emailLog,
            password:passwordLog
        })
        .then((result)=>{
            console.log(result);
        });
    };

    return (
        <div className='login-container'>
        <h3>Connect to your account :</h3>
            <input type="email" placeholder='Your E-mail...' onChange={(e)=>setEmailLog(e.target.value)}></input>
            <br/>
            <input type="password" placeholder='Your Password...' onChange={(e)=>setPasswordLog(e.target.value)}></input>
            <button type='submit' onClick={connect}> Login </button>
        </div>
    );
}

export default Login;
