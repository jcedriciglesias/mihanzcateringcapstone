import {useState} from 'react';
import "./Styles/Form.css";
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <>
        <div className="Login-Container">
            

                <form>
                <h1 className="Login">Login</h1>
                <label>Email:</label> <input type="email" placeholder="Email Address" />
                   
                    <label>Password:</label> <input type="password" placeholder="Password"/>

                   <div className="btn-Login"><button><Link to="/signup">Sign Up</Link></button><button>Login</button> </div> 
                </form>
        </div>
        </>
    );



}

export function SignUp(){
    return(<><div className="SignUp-Container">
        

    <form className="SignUp-Form">
    <div><h1>SignUp</h1></div>
        <label>Name:</label><input type="text" name="" id="" placeholder="Full Name"/>
        <label>Address:</label><input type="text" name="" id="" placeholder="Address"/>
        <label>Contact No.:</label><input type="text" name="" id="" placeholder="Contact No."/>
        <label>Email:</label><input type="text" name="" id="" placeholder="Email"/>
        <label>Password:</label><input type="text" name="" id="" placeholder="Password"/>
        <label>Confirm Password:</label><input type="text" name="" id="" placeholder="Confirm Password"/>

        <div className="btn-Login"><button><Link to="/login">Sign Up</Link></button></div> 
    </form>
    
        
        
        
        
        
        </div></>);
}