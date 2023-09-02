import "./App.css";
import "./index.css";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import About from './pages/About';

import './App.css'
import WhyChooseUs from './pages/WhyChooseUs';

function App() {

  return (
    <>
   <Router>
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element = {<Home/>}></Route>
        <Route  path='/about' element= {<About/>}></Route>
        <Route  path='/contact' element= {<Contact/>}></Route>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route  path='/why_choose_us' element= {<WhyChooseUs/>}></Route>
              </Route>
          </Routes>
      </Router> 
   
    </>
  )
}

export default App
