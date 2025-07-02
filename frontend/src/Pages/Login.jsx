import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import toast from "react-hot-toast"

import "./signup.css"
const Login = ()=>{

    const users ={
        username:"",
        password:"",
    };

    const[user,setUser] = useState(users);

    const navigate = useNavigate();

    const HandleInput = (e)=>{
        
        const{name,value} = e.target;

        setUser({...user,[name]:value});

    };

    const loginHandle = async (e)=>{
        
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/api/login",user,{
                 withCredentials: true,
            });
            toast.success("Login success",{position:"top-center"});
            navigate("/dashboard");

            

        if(!res)
        {
           
            toast.error("Login Failed",{position:"top-center"});

        }
        } catch (error) {
            
        }
    };

    return(
        <>
        
        <form onSubmit={loginHandle}>
                 <div className="login">
        
                    <div >Log In</div>
                        
                        <div>UserName </div>
                        <input type="text" name="username" id="uname" onChange={HandleInput}/>
                        <div>Password</div>
                        <input type="password" name="password" id="pword" onChange={HandleInput}/>
                        <button type="Submit">Login</button>  
                     <div>
                    <div>Dont have account ? {''} <Link to="/signup">Register</Link></div>
                </div>
        </div>
        </form>
    
       
        </>
    )

}

export default Login