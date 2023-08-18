import './Nav.css';
import { NavLink } from "react-router-dom";


export default function Navbar (){
    return(
<>
<nav>
    <h1>Mihanz Catering</h1>

    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
            <NavLink to="/services">Services</NavLink>
        </li>
        <li>
            <NavLink to="/theme">Theme</NavLink>
        </li>
    </ul>


</nav>


</>



    );
}

