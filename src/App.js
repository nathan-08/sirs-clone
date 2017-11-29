import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import Header from './Header'
import MidContainer from './midContainer.js';
import Navbar from './navbar.js'
import router from './router.js'
import Footer from './footer.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Navbar/>

        {router}
        <Footer/>
        
      </div>
    );
  }
}

export default App;
