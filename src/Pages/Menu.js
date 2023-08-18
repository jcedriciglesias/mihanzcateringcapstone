import PorkImg from './Image/Beef-and-Broccoli-Oyster.jpg';
import './Styles/Menu.css';
import { Link } from 'react-router-dom';


export default function Menu(){
    return (
    <>
        <div className="menu-Container">

            <div><h1>Menu Selection</h1></div>
            <ul className="menu-Card-Selection">
                <li>
                    <Link to="/pork">Pork</Link>
                </li>
                <li>
                    <Link to="/beef">Beef</Link>
                </li>
                <li>
                    <Link to="/chicken">Chicken</Link>
                </li>
                <li>
                    <Link to="/fish">Fish</Link>
                </li>
                <li>
                    <Link to="/seafood">SeaFood</Link>
                </li>
                <li>
                    <Link to="/pasta">Pasta</Link>
                </li>
                <li>
                    <Link to="/vegetables">Vegetables</Link>
                </li>
                <li>
                    <Link to="/desserts">Desserts</Link>
                </li>
                <li>
                    <Link href="/drinks">Drinks</Link>
                </li>
            </ul>

        </div>
    </>
    );
}

export function Pork(){
    return(
    <>
<div className="Food-Container">
<div><button><Link to="/menu">back</Link></button></div>
    <h1>Pork Menu</h1>
    <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
    <ul >
        
    </ul>
</div>  
    </>
    );
}
export function Beef(){
    return(
    <>
<div className="Food-Container">
<div><button><Link to="/menu">back</Link></button></div>
    <h1>Beef Menu</h1>

    <ul >
    <li className="Food-Card-Menu">
            <img  src={PorkImg} alt="Beef and Broccoli Oyster" />
            <div className="Food-name"><p >Beef and Broccoli Oyster</p> </div>
          
        </li>
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
    </ul>
</div>
    
    
    </>
    );
}
export function Chicken(){
    return(
    <>
<div className="Food-Container">
<div><button><Link to="/menu">back</Link></button></div>
    <h1>Chicken Menu</h1>

    <ul >
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
    </ul>
</div>
    </>
    );
}
export function Fish(){
    return(
    <>
<div className="Food-Container">
<div><button><Link to="/menu">back</Link></button></div>
    <h1>Fish Menu</h1>

    <ul >
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
    </ul>
</div>   
    </>
    );
}
export function SeaFood(){
    return(
    <>
<div className="Food-Container">
<div><button><Link to="/menu">back</Link></button></div>
    <h1>Seafood Menu</h1>

    <ul >
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
    </ul>
</div>
    
    
    </>
    );
}
export function Pasta(){
    return(
    <>
<div className="Food-Container">
<div><button><Link to="/menu">back</Link></button></div>
    <h1>Pasta Menu</h1>

    <ul >
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
    </ul>
</div>   
    </>
    );
}
export function Vegetables(){
    return(
    <>
<div className="Food-Container">
<div><button><Link to="/menu">back</Link></button></div>
    <h1>Vegetables Menu</h1>

    <ul >
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
    </ul>
</div>
    
    
    </>
    );
}
export function Desserts(){
    return(
    <>
<div className="Food-Container">
<div><button><Link to="/menu">back</Link></button></div>
    <h1>Desserts Menu</h1>

    <ul >
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
    </ul>
</div>   
    </>
    );
}
export function Drinks(){
    return(
    <>
<div className="Food-Container">
<div><button><Link to="/menu">back</Link></button></div>
    <h1>Drinks Menu</h1>

    <ul >
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-name">name</p>
        </li>
    </ul>
</div>    
    </>
    );
}