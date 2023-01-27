
import React,{useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom';
const Signup=()=>{

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();

      
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')


        }
        
    })


     const collect=async()=>{
        

        //fetch takes two parameters url from where req will be made and body and returns promise
       let result=await fetch('http://localhost:5000/register',{
        //there are many mathods like get post etc post is used to save to mongodb
        method:'post',
        //as json format is accepted so converting
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        },

       });
       result=await result.json()
       console.warn(result);
       //when we recieve data from api for signup etc we can keep it in local storage so that it still present on refresh
       localStorage.setItem("user",JSON.stringify(result));
       //if result got navigate to home
      if(result){
       
        navigate('/')
      }
       

     }


 
   

    return(
        
        <div className='nn'>
            <h1 className="lll">Register</h1>
            
            <input type="text" className="inputbox" id="mmm" placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" className="inputbox" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter mail'/>
            <input type="password" className="inputbox" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
            <button className="appbutton" id="mm" onClick={collect} type="button">Signup</button>
            
            
           

        </div>
    )
    }
export default Signup;