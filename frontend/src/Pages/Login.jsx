import { Link } from "react-router-dom";
import "./signup.css";

function Login()
{

return(<>
    <div className="login">

         <div >Sign In</div>
         <div>Username </div>
         <input type="username" />
         <div>Password</div>
         <input type="password" />
         <button type="Sbmit"> Login</button>

    
            <div className="No-acc">
                <div>don't have a account ?{' '}</div><Link to="/signup">register</Link>
            </div>    

    </div>
                
    
</>)




}
export default Login