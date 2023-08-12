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
        <h1>
            Birthday Promo
        </h1>
        <ul>
            <li>
                <a href="">
                    <h1>Birthday Promo #1</h1>
                    <p>50 Guest</p>
                </a>
            </li>

            <li>
                <a href="">
                <h1>Birthday Promo #2</h1>
                    <p>100 Guest</p>
                </a>
            </li>

            <li>
                <a href="">
                <h1>Birthday Promo #3</h1>
                    <p>150 Guest</p>
                </a>
            </li>

            <li>
                <a href="">
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

export function Baptismal() {
    return(<>
    <div className='Event-Container'>



    </div>
    </>);
}