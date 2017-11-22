import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import Header from './Header'
import MidContainer from './midContainer.js';
import Navbar from './navbar.js'
import router from './router.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Navbar/>

        {router}
        
      </div>
    );
  }
}

export default App;
