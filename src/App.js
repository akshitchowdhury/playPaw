
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NAv from './components/NAv';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './components/Pricing/Pricing';
import Franchise from './components/Franchise/Franchise';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import Attractions from './components/Attractions/Attractions';



function App() {
  return (
    <div className="App">
    <Router>
    <NAv/>
      <Routes>
        
      
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/attractions' element= {<Attractions/>}/>
      <Route path='/èvents' element= {<Events/>}/>
      <Route path='/franchise' element= {<Franchise/>}/>
      <Route path='/pricing' element= {<Pricing/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      
      
      </Routes>
      <Footer/>
    </Router>


    </div>
  );
}

export default App;
