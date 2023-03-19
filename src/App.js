import './App.css';
import  {Routes,Route,BrowserRouter,} from 'react-router-dom'
import Home from './Home/Home';
import Nav from './Nav';
import About from './About/About';
import Service from './Ofers/Service';
import Contact from './Contact/Contact';
import Copy from './Copy';
function App() {
  return (
  <BrowserRouter>
  <Nav/>
  <Routes>
  <Route path="/*" element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Service" element={<Service/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  </Routes>
  <Copy/>
  </BrowserRouter>
  );
}

export default App;
