import {useState} from 'react';
import "./Form.css";
export default function Login(){
    const[login, setLogin] = useState();
    return(
        <>
        <div className="Login-Container">
            

                <form>
                <h1 className="Login">Login</h1>
                <label>Email:</label> <input type="email" placeholder="Email Address" />
                   
                    <label>Password: </label> <input type="password" placeholder="Password"/>

                   <div className="btn-Login"><button>Login</button> </div> 
                </form>
        </div>
        </>
    );



}

export function SignUp(){
    return(<><div className="SignUp-Container">
        <h1>SignUp</h1>

    <form>
        <label>Name:<input type="text" name="" id="" placeholder="Full Name"/></label>
    </form>
        
        
        
        
        
        </div></>);
}