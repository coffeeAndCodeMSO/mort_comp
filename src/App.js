import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MortgageComparison from './comp/MortgageComparison.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mortgage calculator</h2>
        </div>
        <MortgageComparison/>
      </div>
    );
  }
}


export default App;
