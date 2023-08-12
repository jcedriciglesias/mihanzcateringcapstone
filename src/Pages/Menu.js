
import './Menu.css';


export default function Menu(){
    return (
    <>
        <div className="menu-Container">

            <div><h1>Menu Selection</h1></div>
            <ul className="menu-Card-Selection">
                <li>
                    <a href="/pork">Pork</a>
                </li>
                <li>
                    <a href="/beef">Beef</a>
                </li>
                <li>
                    <a href="/chicken">Chicken</a>
                </li>
                <li>
                    <a href="/fish">Fish</a>
                </li>
                <li>
                    <a href="/seafood">SeaFood</a>
                </li>
                <li>
                    <a href="/pasta">Pasta</a>
                </li>
                <li>
                    <a href="/vegetables">Vegetables</a>
                </li>
                <li>
                    <a href="/desserts">Desserts</a>
                </li>
                <li>
                    <a href="/drinks">Drinks</a>
                </li>
            </ul>

        </div>
    </>
    );
}
export function Pork(){
    return(
    <>
<div className="Pork-Container">

    <h1>Pork Menu</h1>

    <ul >
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-Description"> ipsum</p>
        </li>
    </ul>






</div>
    
    
    </>
    );
}
export function Beef(){
    return(
    <>
<div className="Beef-Container">

    <h1>Beef Menu</h1>

    <ul >
        <li className="Food-Card-Menu">
            <img src="/" alt="" />
            <p className="Food-Description"> ipsum</p>
        </li>
    </ul>






</div>
    
    
    </>
    );
}