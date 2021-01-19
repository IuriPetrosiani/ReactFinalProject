import React, { useState } from "react";
import Home from "./components/Home"
import Contact from "./components/Contact"
import Ajax1 from "./components/Ajax"
import About from "./components/About"
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function NewRouter() {
  const [theme, setTheme] = useState('black')
  return (
    
    <Router>
    
      <div class="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/ajax'>Ajax</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      

      
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 61px)', backgroundColor: `${theme === 'white' ? 'white' : '#1C2249'}`}}>
      <div >
        <button style={{
          marginLeft:'1700px',
          marginTop: '20px' ,
          padding: '10px',
          border: 'none',
          width: '150px',
          fontWeight:'900',
          background: '#E65412'
        }}
        onClick={() => setTheme(theme === 'white' ? 'black' : 'white')}
        >Change Theme</button>
      </div>
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/ajax">
          <Ajax1/>
          </Route>
        </Switch>
        
      </main>
    </Router>
  );
}
