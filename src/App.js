import React, { Component } from 'react';
import './css/App.css';
import Header from './comp/Header.js'
import Footer from './comp/Footer.js'
import MortgageComparison from './comp/MortgageComparison.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <MortgageComparison />
        <Footer />
      </div>
    );
  }
}


export default App;
