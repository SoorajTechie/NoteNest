import "./signup.css";

function SignUp()
{

    return(<>
    
    <div className="login">

         <div >Sign In</div>
         <div>Email</div>
         <input type="email" id="email"/>
         <div>UserName </div>
         <input type="username" id="uname"/>
         <div>Pasword</div>
         <input type="password" id="pword"/>
         <button type="Sbmit">Register</button>

           
    </div>
    
    </>)



}

export default SignUp