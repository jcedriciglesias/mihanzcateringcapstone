import Nav from'./Components/Nav.js';
import Footer from'./Components/Footer.js';
import './App.css';
import Home from './Pages/Home.jsx';
import Menu from './Pages/Menu.js';
import Services from './Pages/Services.js';
import Theme from './Pages/Theme.js';
import Login, { SignUp } from './Pages/Form.jsx';
import{Pork,Beef,Chicken,Fish,Vegetables,Pasta,Desserts,Drinks,SeaFood} from './Pages/Menu.js';
import { Birthday,Baptismal,BDP1,BDP2,BDP3,Customizationbdp,BP1,BP2,BP3,BDPForm,BPForm,Ratings,Customizationbp,ReservationForm} from './Pages/Services.js';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect,} from 'react';


 function App() {
  const pathname = useLocation();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth"});

   


  },[pathname]);









    return (
      <>

        <Nav />
        <Routes>
      
          <Route index path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/theme" element={<Theme/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/pork" element={<Pork/>}/>
          <Route path="/beef" element={<Beef/>}/>
          <Route path="/chicken" element={<Chicken/>}/>
          <Route path="/seafood" element={<SeaFood/>}/>
          <Route path="/fish" element={<Fish/>}/>
          <Route path="/pasta" element={<Pasta/>}/>
          <Route path="/vegetables" element={<Vegetables/>}/>
          <Route path="/desserts" element={<Desserts/>}/>
          <Route path="/drinks" element={<Drinks/>}/>
          <Route path="/birthday" element={<Birthday/>}/>
          <Route path="/baptismal" element={<Baptismal/>}/>
          <Route path="/bdp1" element={<BDP1/>}/>
          <Route path="/bdp2" element={<BDP2/>}/>
          <Route path="/bdp3" element={<BDP3/>}/>
          <Route path="/bp1" element={<BP1/>}/>
          <Route path="/bp2" element={<BP2/>}/>
          <Route path="/bp3" element={<BP3/>}/>
          <Route path="/customizationbdp" element={<Customizationbdp/>}/>
          <Route path="/customizationbp" element={<Customizationbp/>}/>
          <Route path="/mostorderedmenu" element={<Ratings/>}/>
          <Route path="/bdpform" element={<BDPForm/>}/>
          <Route path="/bpform" element={<BPForm/>}/>
          <Route path="/reservationform" element={<ReservationForm/>}/>
        </Routes>
        
        <Footer />
      </>
    );
  
  
}


export default App;
