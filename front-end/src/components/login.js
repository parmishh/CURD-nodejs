import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const[email,setEmail]=React.useState('');
    const[password,setPassword]=React.useState('');
    const navigate= useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
            navigate("/")
        }
    }, [])

    const handleLogin=async()=>{
        //as in our backend in login find used using email,password
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'content-Type':'application/json'
            }

        }
        );
        result=await result.json();
        if(result.name)
        {
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/");
            
        }
        else{
            alert("please enter correct details");
        }
        

    }
    return(
        <div className="login">
            <h1 className="fff">Login</h1>
            <input type="text" className="inputbox" placeholder='Enter email'
                onChange={(e)=>setEmail(e.target.value)} value={email}
            />
            <input type="text" className="inputbox" placeholder='Enter password'
                onChange={(e)=>setPassword(e.target.value)} value={password}
            />
            <button className="appbutton3" id="mm"type="button"   onClick={handleLogin} >Login</button>
           
        </div>
    )
}
export default Login;