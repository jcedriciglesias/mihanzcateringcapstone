import { FaFacebook, FaPhone } from 'react-icons/fa';
import './Footer.css';
import { FaMapLocationDot, FaMobileScreen } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


export default function Footer (){
return(
<>
<footer>
    <h1>
        Mihanz <br/> Catering
    </h1>

    <ul>
        <li>
            <label for="getInTouch">Get in touch</label>
            <br/><Link href="https://www.facebook.com/profile.php?id=100066545202436" target="_blank" rel="noreferrer"><FaFacebook/>Facebook</Link>
        </li>
        <li>
            <label for="Contact">Contact</label><br/>
            <Link to="#"> <FaMobileScreen/>0926-563-1143 <br/>
               <FaMobileScreen/> 0916-412-2250</Link>
         </li>
         <li>
            <label for="Location">Location</label> <br/>
            <Link to="https://goo.gl/maps/eYMwkLUwLh3tVrsLA" target="_blank" rel="noreferrer"><FaMapLocationDot/> Calderon St. Subic
                Baliwag, Bulacan</Link>
         </li>
    </ul>
   
</footer>
</>
);
}