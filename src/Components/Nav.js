import './Nav.css';
import { NavLink } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";
import { FaBookOpen, FaBrush } from 'react-icons/fa';


export default function Navbar (){
    return(
<>
<nav>
    <h1>Mihanz Catering</h1>

    <ul>
        <li>
            <NavLink to="/"><FaHouseChimney/> Home</NavLink>
        </li>
        <li>
            <NavLink to="/menu"><FaBookOpen/> Menu</NavLink>
        </li>
        <li>
            <NavLink to="/services">Services</NavLink>
        </li>
        <li>
            <NavLink to="/theme"><FaBrush/> Theme</NavLink>
        </li>
    </ul>


</nav>


</>



    );
}

