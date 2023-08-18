import { Link } from "react-router-dom";
import "./Styles/Theme.css";

export default function Theme(){

 return(<><div className="Theme-Container">
        <div><h1> Theme</h1></div> 
        
    </div></>);
        
}

function ThemeNav(){
    return(<><nav>
        <ul>
            <li><Link>Birthday</Link></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        
        
        
        </nav></>)
}