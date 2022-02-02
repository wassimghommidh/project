import React, {useState} from 'react';
const Login = (props) => {
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    return (
        <div className='login-container'>
        <h3>Connect to your account :</h3>
            <input type="email" placeholder='Your E-mail...' onChange={(e)=>setEmailLog(e.target.value)}></input>
            <br/>
            <input type="password" placeholder='Your Password...' onChange={(e)=>setPasswordLog(e.target.value)}></input>
            <button type='submit' onClick={()=>{props.connect(emailLog,passwordLog)}}> Login </button>
        </div>
    );
}

export default Login;
