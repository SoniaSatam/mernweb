
import './components/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import React from 'react';


//import ReactDOM from 'react-dom';
//import {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import {Routes,Route} from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import Protectedroute from './components/ProtectedRoute';




// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Services/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        
        <Route path="/login" element={<Login/>} auth={true}></Route>
        <Route path="/register" element={<Register/>} auth={true}></Route>
        <Route path="/dashboard" element={<Dashboard/>} auth={true}></Route>
        <Route path="/logout" element={<Logout/>} auth={true}></Route>
        
        </Routes>
      
    
    
    </>
  );
}

export default App;
