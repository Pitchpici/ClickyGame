import React, { Component } from 'react';
import './ClickyApp.css';
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Footer from "./Components/Footer";
import Emoticon from "./Components/Emoticon";
import emoti from "./emoti.json";

class App extends Component {

    state = {
      emoti,
      score: 0,
      alreadyClicked: []
    };

  //take image out of the array when user click it!
  clickEmoti = (event) => {

      const currentEmoti = event.target.alt;
      let indexCurrent = this.state.alreadyClicked.indexOf(currentEmoti);

      if (indexCurrent > -1) {

        this.setState({
          
          emoti: this.state.emoti.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          alreadyClicked: [],
          score: 0

        });

        alert("Oh, no! You just lost! Play again?");
  
      } else {

        this.setState(

        {

          emoti: this.state.emoti.sort(function(a, b) {
            return 0.5-Math.random();

          }),

          alreadyClicked: this.state.alreadyClicked.concat(currentEmoti),
          score: this.state.score + 1

        },


        () => {
          if (this.state.score ==12) {
            alert("You won!");

            this.setState({
              emoti: this.state.emoti.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              alreadyClicked: [],
              score: 0
            });

          }
        }
    );
  }
  };     

      render() {
        return (

          <div className="App">

                <Navbar 
                        score = {this.state.score} 
                />

                <Jumbotron />

                <div className="container">

                        {this.state.emoti.map(emoti => (
                          
                          <Emoticon 
                            clickEmoti = {this.clickEmoti}
                            id = {emoti.id}
                            key = {emoti.id}
                            image = {emoti.image}

                          /> 

                        ))}
                </div>

                <Footer />
            
          </div>
        );
      }
}


export default App;
