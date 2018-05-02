import React, { Component } from 'react';
import './ClickyApp.css';
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Cats from "./Cats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Cats />

        <Footer />
        
      </div>
    );
  }
}

export default App;
