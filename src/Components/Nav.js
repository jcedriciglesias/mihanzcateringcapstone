import './Nav.css';
import { Link } from "react-router-dom";


export default function Navbar (){
    return(
<>
<nav>
    <h1>Mihanz Catering</h1>

    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/menu">Menu</Link>
        </li>
        <li>
            <Link to="/services">Services</Link>
        </li>
        <li>
            <Link to="/theme">Theme</Link>
        </li>
    </ul>


</nav>


</>



    );
}

