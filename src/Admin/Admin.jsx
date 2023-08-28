import { Link } from 'react-router-dom';
import './Admin.css';




export default function Admin(){
    return(<>
        <AdminNav />
    
    </>);
}








export function AdminNav(){
    return(<>
    <nav className="admin-nav">
    <div><h1>Mihanz Catering</h1></div>
    <ul>
        <li><Link>Dashboard</Link></li>
        <li><Link>Users</Link></li>
        <li><Link>Menu</Link></li>
        <li><Link>Theme</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Bookings</Link></li>
        <li><Link>Reservation</Link></li>
        <li><Link>Log out</Link></li>
        
    </ul>
</nav>
    </>);
}