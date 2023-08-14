import './Footer.css';


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
            <br/>
           <a href="/">Facebook</a>
        </li>
        <li>
            <label for="Contact">Contact</label><br/>
            <a href="/"> 0926-563-1143 <br/>
                0916-412-2250</a>
         </li>
         <li>
            <label for="Location">Location</label> <br/>
            <a href="https://goo.gl/maps/o4Z2d3LZjFphzjLL8"> Calderon St. Subic
                Baliwag, Bulacan</a>
         </li>
    </ul>
    <button><a href="admin">admin</a></button>
</footer>
</>
);
}