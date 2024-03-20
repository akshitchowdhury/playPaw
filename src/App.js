
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NAv from './components/NAv';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        
      <NAv/>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/èvents' element= {<Events/>}/>
      <Route path='/franchise' element= {<Franchise/>}/>
      <Route path='/pricing' element= {<Pricing/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      
      <Footer/>
      </Routes>
    </Router>


    </div>
  );
}

export default App;
