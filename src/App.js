import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoanAmountDetails from './comp/LoanAmountDetails.js'
import FixedExpenses from './comp/FixedExpenses.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mortgage calculator</h2>
        </div>
        <LoanAmountDetails/>
        <FixedExpenses/>
      </div>
    );
  }
}


export default App;
