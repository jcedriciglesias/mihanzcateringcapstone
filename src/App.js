import Nav from'./Components/Nav.js';
import Footer from'./Components/Footer.js';
import './App.css';
import Home from './Pages/Home.js';
import Menu from './Pages/Menu.js';
import Services from './Pages/Services.js';
import Theme from './Pages/Theme.js';
import Login from './Pages/Login.js';









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
    case "" :
         Component = 
      break;
  }
  return (
    <div>
      <Nav />

      <Component />
      
      <Footer />
    </div>
  );
}

export default App;
