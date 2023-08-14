import Nav from'./Components/Nav.js';
import Footer from'./Components/Footer.js';
import './App.css';
import Home from './Pages/Home.js';
import Menu from './Pages/Menu.js';
import Services from './Pages/Services.js';
import Theme from './Pages/Theme.js';
import Login from './Pages/Login.js';
import{Pork,Beef,Chicken,Fish,Vegetables,Pasta,Desserts,Drinks} from './Pages/Menu.js';
import { Birthday,Baptismal,BDP1,BDP2,BDP3,Customizationbdp,BP1,BP2,BP3,BDPForm,Ratings} from './Pages/Services.js';












 function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
        Component = Home 
      break;
    case "/menu":
        Component = Menu
      break;
    case "/services":
        Component = Services
      break;
    case "/theme":
        Component = Theme
      break;
    case "/footer":
        Component = Footer
      break;
    case "/login":
        Component = Login
      break;
    case "/pork":
        Component = Pork
      break;
    case "/beef":
        Component = Beef
      break;
    case "/chicken":
        Component = Chicken;
      break;
    case "/fish":
        Component = Fish
      break;
    case "/vegetables":
        Component = Vegetables
      break;
    case "/pasta":
        Component = Pasta
      break;
    case "/desserts":
        Component = Desserts
      break;
    case "/drinks":
        Component = Drinks
      break;
    case "/birthday":
        Component = Birthday
      break;
    case "/baptismal":
        Component = Baptismal
      break;
    case "/bdp1":
        Component = BDP1
      break;
    case "/bdp2":
        Component = BDP2
      break;
    case "/bdp3":
        Component = BDP3
      break;
    case "/customizationbdp":
        Component = Customizationbdp
      break;
    case"/mostorderedmenu":
        Component = Ratings
      break;
    case "/bp1":
        Component = BP1
      break;
    case "/bp2":
        Component = BP2
      break;
    case "/bp3":
        Component = BP3
      break;
    case "/customizationbp":
        Component = Customizationbdp
      break;
    case "/bdpform":
        Component = BDPForm
      break;  
    
  }

    return (
      <>
      
      
        <Nav />
  
        <Component />
        
        <Footer />
      </>
    );
  
  
}


export default App;
