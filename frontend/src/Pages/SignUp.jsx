import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"



function Register()
{
    const users ={
        name:"",
        email:"",
        username:"",
        password:"",

    }

    const[user,setUser] = useState(users);

    const navigate = useNavigate();

    const InputHandler = (e)=>{
        
        const{name,value} = e.target;

        setUser({...user,[name]:value});

        console.log(name,value);

    }

    const RegHandle = async(e)=>{
        
        e.preventDefault();

      

            await axios.post("https://notenest-aphs.onrender.com/api/register",user)
            .then((response)=>{
                toast.success(response.data.message,{position:"top-center"});
                navigate("/login");
            })
            .catch((error)=>{
                console.log(error);
            })           
            
            
    
    };

    return(
        <>
     <form onSubmit={RegHandle}>
        <div className="login">
        
            <div >Sign In</div>
                    <div>Name </div>
                    <input type="text" name="name" id="name" onChange={InputHandler}/>
                    <div>Email</div>
                    <input type="email" name="email" id="email" onChange={InputHandler}/>
                    <div>UserName </div>
                    <input type="text" name="username" id="uname" onChange={InputHandler}/>
                    <div>Password</div>
                    <input type="password" name="password" id="pword" onChange={InputHandler}/>
                    <button type="Submit">Register</button>  
                
        </div>
    </form>
        </>
    )

}

export default Register
