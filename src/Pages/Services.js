import './Services.css';

export default function Services()  {
    
    return(
        <>
        <div className="Services-Container">
        <h1>SERVICES</h1>

        <ul >
            <li >
                <a href="birthday">Birthday</a>
            </li>

            <li>
                <a href="baptismal">Baptismal</a>
            </li>
        </ul>
        </div>
        </>
    );




}
export function Birthday() {
    return(<>
    <div className='Event-Container'>
        <button><a href="/services">back</a></button>
        <h1>
            Birthday Promo
        </h1>
        <ul>
            <li>
                <a href="bdp1">
                    <h1>Birthday Promo #1</h1>
                    <p>50 Guest</p>
                </a>
            </li>

            <li>
                <a href="bdp2">
                <h1>Birthday Promo #2</h1>
                    <p>100 Guest</p>
                </a>
            </li>

            <li>
                <a href="bdp3">
                <h1>Birthday Promo #3</h1>
                    <p>150 Guest</p>
                </a>
            </li>

            <li>
                <a href="customizationbp">
                    <h1>Customization base on your Budget</h1>
                </a>
            </li>

            <li>
                <a href=""><h1>Most Ordered Menu</h1></a>
            </li>
        </ul>



    </div>
    </>);
}
export function BDP1(){
    return(<>
    <div>
        <button><a href="/birthday">back</a></button>



    </div>
    </>);
}
export function BDP2(){
    return(<>
    <div>
    <button><a href="/birthday">back</a></button>



    </div>
    </>);
}
export function BDP3(){
    return(<>
    <div>
    <button><a href="/birthday">back</a></button>



    </div>
    </>);
}
export function Customizationbdp(){
    return(<>
    <div>
    <button><a href="/birthday">back</a></button>
    <h1>Birthday Package</h1>
    <h2>Customize your own Package</h2>

        <p><ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul></p>

        <div><button><a href=""></a></button></div>
    </div>
    </>);
}
export function Ratings(){
    return(<>
    <div>
    <button><a href="/birthday"></a></button>



    </div>
    </>);
}
export function Baptismal() {
    return(<>
    <div className='Event-Container'>
        <button><a href="/services">back</a></button>
        <h1>
            Baptismal Promo
        </h1>
        <ul>
            <li>
                <a href="bp1">
                    <h1>Baptismal Promo #1</h1>
                    <p>50 Guest</p>
                </a>
            </li>

            <li>
                <a href="bp2">
                <h1>Baptismal Promo #2</h1>
                    <p>100 Guest</p>
                </a>
            </li>

            <li>
                <a href="bp3">
                <h1>Baptismal Promo #3</h1>
                    <p>150 Guest</p>
                </a>
            </li>

            <li>
                <a href="customizationbp">
                    <h1>Customization base on your Budget</h1>
                </a>
            </li>

            <li>
                <a href=""><h1>Most Ordered Menu</h1></a>
            </li>
        </ul>



    </div>
    </>);
}
export function BP1(){
    return(<>
    <div>
        <button><a href="/baptismal">back</a></button>



    </div>
    </>);
}
export function BP2(){
    return(<>
    <div>
    <button><a href="/baptismal">back</a></button>



    </div>
    </>);
}
export function BP3(){
    return(<>
    <div>
    <button><a href="/baptismal">back</a></button>



    </div>
    </>);
}
export function Customizationbp(){
    return(<>
    <div>
    <button><a href="/baptismal">back</a></button>



    </div>
    </>);
}