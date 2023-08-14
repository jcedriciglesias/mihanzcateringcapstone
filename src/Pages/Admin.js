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
        <li><a href="">Dashboard</a></li>
        <li><a href="">Users</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Theme</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Bookings</a></li>
        <li><a href="">Reservation</a></li>
        <li><a href="">Log out</a></li>
        
    </ul>
</nav>
    </>);
}