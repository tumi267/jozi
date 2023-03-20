import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  {Routes,Route,HashRouter,} from 'react-router-dom'
import Home from './Home/Home';
import Nav from './Nav';
import About from './About/About';
import Service from './Ofers/Service';
import Contact from './Contact/Contact';
import Copy from './Copy';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter>
  <Nav/>
  <Routes>
  <Route path="/*" element={<Home/>}/>
  <Route path="/jozi/About" element={<About/>}/>
  <Route path="/jozi/Service" element={<Service/>}/>
  <Route path="/jozi/Contact" element={<Contact/>}/>
  </Routes>
  <Copy/>
  </HashRouter> 
  </React.StrictMode>
);
reportWebVitals();
