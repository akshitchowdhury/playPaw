
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NAv from './components/NAv';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './components/Pricing/Pricing';
import Franchise from './components/Franchise/Franchise';


import Attractions from './components/Attractions/Attractions';
import ContactComponent from './components/Contact/ContactComponent';
import Events from './components/Events/Events';
import BirthdayParties from './components/Event List/BirthdayParties';
import KittyParties from './components/Event List/KittyParties';
import EventParties from './components/Event List/EventParties';
import Cafe from './components/Event List/Cafe';



function App() {
  return (
    <div className="App">
    <Router>
    <NAv/>
      <Routes>
        
      
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/attractions' element= {<Attractions/>}/>
      {/* <Route path='/events' element= {<Events/>}/> */}
      <Route path='/birthday' element= {<BirthdayParties/>}/>
      <Route path='/kitty' element= {<KittyParties/>}/>
      <Route path='/event' element= {<EventParties/>}/>
      <Route path='/cafe' element= {<Cafe/>}/>
      <Route path='/franchise' element= {<Franchise/>}/>
      <Route path='/pricing' element= {<Pricing/>}/>
      <Route path='/contact' element= {<ContactComponent/>}/>
      
      
      </Routes>
      <Footer/>
    </Router>


    </div>
  );
}

export default App;
