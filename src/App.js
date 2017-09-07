import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MortgageComparison from './comp/MortgageComparison.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>15 Year Mortgage Versus 30 Year Moratgage</h2>
          <p>How much can you really save if you choose a 15 year mortgage over a 30?</p>
        </div>
        <MortgageComparison/>
      </div>
    );
  }
}


export default App;
