
import { Link } from 'react-router-dom';
import './Styles/Services.css';

export default function Services()  {
    
    return(
        <>
       
        <div className="Services-Container">
        <h1>Services</h1>

        <ul >
            <li >
                <Link to="/birthday">Birthday</Link>
            </li>

            <li>
                <Link to="/baptismal">Baptismal</Link>
            </li>
        </ul>
        </div>
        </>
    );
}
export function Birthday() {
    return(<>
    <div className='Event-Container'>
        <button><Link to="/services">back</Link></button>
        <h1>
            Birthday Promo
        </h1>
        <ul>
            <li>
                <Link to="/bdp1">
                    <h1>Birthday Promo #1</h1>
                    <p>50 Guest</p>
                </Link>
            </li>
            <li>
                <Link to="/bdp2">
                <h1>Birthday Promo #2</h1>
                    <p>100 Guest</p>
                </Link>
            </li>
            <li>
                <Link to="/bdp3">
                <h1>Birthday Promo #3</h1>
                    <p>150 Guest</p>
                </Link>
            </li>
            <li>
                <Link to="/customizationbdp">
                    <h1>Customization base<br /> on your Budget</h1>
                </Link>
            </li>
            <li>
                <Link to="/mostorderedmenu"><h1>Most Ordered Menu</h1></Link>
            </li>
        </ul>



    </div>
    </>);
}
export function BDP1(){
    return(<>
    <div>
        <button><Link to="/birthday">back</Link></button>
    </div>
    </>);
}
export function BDP2(){
    return(<>
    <div>
    <button><Link to="/birthday">back</Link></button>



    </div>
    </>);
}
export function BDP3(){
    return(<>
    <div>
    <button><Link to="/birthday">back</Link></button>



    </div>
    </>);
}
export function Customizationbdp(){
    return(<>
    <div className="Birthday-Package-Information">
    <button><Link to="/birthday">back</Link></button>
    <h1>Birthday Package</h1>
    <h2>Customize your own Package</h2>
        <p><ul>
            <li>Amazing Deals</li>
            <li>Make your reservation within 7 days for preparations</li>
            <li>We can customize your package base on your budget</li>
            <li>Customize your own package given to your budget and number person you provide</li>
            <li>Budget must be 15,000 minimum that the cater can provide</li>
            <li>Guest count must be 50 minimum that the cater can provide</li>
        </ul>
        </p>
        <div className="Button-Proceed"><button><Link to="/bdpform">Proceed</Link></button></div>
    </div>
    </>);
}
export function Ratings(){
    return(<>
    <div>
    <button><Link to="/birthday">back</Link></button>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    </>);
}
export function BDPForm(){
     return(<> 
        <div className="BDPForm-Container">

            <button><Link to="/customizationbdp">Back</Link></button><h1>Birthday Package</h1>
        <form action="post">
           <label >Budget:</label><input type="number" name="Customer-Budget" min='15000' placeholder="Minimum of 15,000" required/> <br />
           <label >No. of Guest:</label><input type="number" name="Customer-Budget"  placeholder="Minimum of 50 Guest" min='50' required/> 
        </form>

        <div className="rg-container">
        <h1>Recommended</h1>
                <ul>
                    <li>ITEM 1</li>
                    <li>ITEM 2</li>
                    <li>ITEM 3</li>
                    <li>ITEM 4</li>
                    <li>ITEM 5</li>
                    <li>ITEM 6</li>
                </ul>
           <div className="Generate-btn"><button>Generate</button>  <button><Link to="/">Proceed</Link></button></div>
           </div>
  
        </div>

      </>);
}
export function MostOrderedMenu() {
    return(<>
    <div>
        
    </div>
    </>);
}
export function Baptismal() {
    return(<>
    <div className='Event-Container'>
        <button><Link to="/services">back</Link></button>
        <h1>
            Baptismal Promo
        </h1>
        <ul>
            <li>
                <Link to="/bp1">
                    <h1>Baptismal Promo #1</h1>
                    <p>50 Guest</p>
                </Link>
            </li>
            <li>
                <Link to="/bp2">
                <h1>Baptismal Promo #2</h1>
                    <p>100 Guest</p>
                </Link>
            </li>
            <li>
                <Link to="/bp3">
                <h1>Baptismal Promo #3</h1>
                    <p>150 Guest</p>
                </Link>
            </li>
            <li>
                <Link to="/customizationbp">
                    <h1>Customization base <br /> on your Budget</h1>
                </Link>
            </li>
            <li>
                <Link to="/mostorderedmenu"><h1>Most Ordered Menu</h1></Link>
            </li>
        </ul>
    </div>
    </>);
}
export function BP1(){
    return(<>
    <div>
        <button><Link to="/baptismal">back</Link></button>



    </div>
    </>);
}
export function BP2(){
    return(<>
    <div>
    <button><Link to="/baptismal">back</Link></button>
    </div>
    </>);
}
export function BP3(){
    return(<>
    <div>
    <button><Link to="/baptismal">back</Link></button>



    </div>
    </>);
}

export function Customizationbp(){
    return(<>
    <div className="Birthday-Package-Information">
    <button><Link to="/baptismal">back</Link></button>
    <h1>Baptismal Package</h1>
    <h2>Customize your own Package</h2>

        <p><ul>
            <li>Amazing Deals</li>
            <li>Make your reservation within 7 days for preparations</li>
            <li>We can customize your package base on your budget</li>
            <li>Customize your own package given to your budget and number person you provide</li>
            <li>Budget must be 15,000 minimum that the cater can provide</li>
            <li>Guest count must be 50 minimum that the cater can provide</li>
        </ul>
        </p>

        <div className="Button-Proceed"><button><Link to="/bdpform">Proceed</Link></button></div>
    </div>
    </>);
}
export function BPForm(){
    return(<>
    <div className="BDPForm-Container">

<button><Link to="/customizationbp">Back</Link></button><h1>Baptismal Package</h1>
<form action="post">
<label >Budget:</label><input type="number" name="Customer-Budget" min='15000' placeholder="Minimum of 15,000" required/> <br />
<label >No. of Guest:</label><input type="number" name="Customer-Budget"  placeholder="Minimum of 50 Guest" min='50' required/> 
</form>

<div className="rg-container">
<h1>Recommended</h1>
    <ul>
        <li>ITEM 1</li>
        <li>ITEM 2</li>
        <li>ITEM 3</li>
        <li>ITEM 4</li>
        <li>ITEM 5</li>
        <li>ITEM 6</li>
    </ul>
<div className="Generate-btn"><button>Generate</button>  <button><Link to="/reservationform">Proceed</Link></button></div>
</div>

</div>
    </>);
}
export function ReservationForm(){
    return(<>
    <div className="Reservation-Container">
        <h1>Reservation Form</h1>
        <h2>PLEASE READ FIRST</h2>
        <p>Reservation Package for Guest The Package you chose already includes the following:</p>
        <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
            <li>Item6</li>
            <li>Item7</li>
            <li>Item8</li>
            <li>Item9</li>
            <li>Item10</li>
            <li>Item11</li>
        </ul>

    </div>
    
    
    </>);
}