import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MortgageComparison from './comp/MortgageComparison.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Comparing mortgages</h2>
          <p>Choosing a shorter-term mortgage means higher monthly payments — but can save you money in the long run.</p>
        </div>
        <MortgageComparison/>
      </div>
    );
  }
}


export default App;
