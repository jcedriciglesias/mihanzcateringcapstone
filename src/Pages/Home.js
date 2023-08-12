import './Home.css';
export default function Home(){
    return (
        <>
    <Landing_Page/>

    <MihanzInformation/>

    <Reservation_information/>

    <Calendar_information/>
    
    

    
        </>
    );
    
}
function Landing_Page() {
    return(
        <>
        <div className="landing_Page">
        <h1>Mihanz Catering Service</h1>
        <button><a href="/login">Log In</a></button>
    </div>
        
        </>
    );
}

 function MihanzInformation(){
    return (
<>
<div className="mihanz-info">
        <h1>
            Mihanz <br/> Catering 
            <p id="p1">Since 2015</p>
        
        </h1>
        <p id="p2">Mihanz Catering is a food service business that has been serving its clients for 8 years and continues, located at 181 Calderon St.Subic Baliuag ,Bulacan, San Rafael, Philippines, 3010. founded in 2015, the business started through Mr. Antonio Javier’s passion for cooking and his business partner Golando Masi saw it as an opportunity. He offered Antonio Javier, who happened to be his brother- in-law, to finance the business. Antonio agreed and the business started as a small canteen. As a fellow business minded, Mr. Antonio Javier already set his plans and aiming to make a catering which after years of hard work was finally achieved, the business was named after Mirai Javier “Mi” whom is Antonio’s daughter and Yohanz Masi who is the son of Golando both combined to form the now “Mihanz Catering”.</p>
    </div>


</>



    );
}
function Reservation_information(){
    return (
        <>
        <div className="reservation-Info">
        <h1>
            Ready to make your <br/>reservation? 
        </h1>
        <ul>
            <li>Amazing Deals</li>
            <li>Make your reservation within 7 days for preparations</li>
            <li>We can customize your package base on your budget</li>
            <li>Check out our menu below</li>
        </ul>
        <div><button>Check out our Menu</button></div>

    </div>
        </>
    );
}
function Calendar_information(){
return (
    <>
    <div className="calendar-Date">

<div>
    <h1>Mark your Dates</h1>
<p>Here is our Available Event dates <br/>

  <b id="green">Green</b> means its Available</p>
<p><b id="red">Red</b> means it's Occupied</p>
</div>

<div>
    <tableable>
        <thead></thead>
        <tbody></tbody>
    </tableable>
</div>



</div>   
    
    
    </>
);
}