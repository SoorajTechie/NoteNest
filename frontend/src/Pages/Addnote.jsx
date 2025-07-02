import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import "../Pages/Addnote.css"


axios.defaults.withCredentials = true;

const Addnote = () => {
  
    const[notes,setNotes] = useState({title:" ",content:" "});

    const navigate = useNavigate();

    const Handleinput = (e) => {

        setNotes({...notes,[e.target.name]:e.target.value});
    }

    const Addnote = async() =>{

        await axios.post("https://notenest-aphs.onrender.com/api/create",notes);

        toast.success("Note created",{position:"top-center"});
       // navigate("/dashboard");

    }

  
    return (

    <div className='Add-note'>
        <button onClick={()=> navigate("/dashboard")}>Back to dash</button>
       <form onSubmit={Addnote}>
            <h3>Add note</h3>
            <h4>Title</h4>
            <input type='text' name="title" id="title" onChange={Handleinput}/>
            <h4>Content</h4>
            <textarea name="content" id="content" onChange={Handleinput}></textarea>
            <button type='submit' onClick={()=>navigate("/dashboard")}>Add note</button>
       </form>
       
    </div>
  )
}

export default Addnote
