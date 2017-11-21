import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MortgageComparison from './comp/MortgageComparison.js'

const linkStyle = { textDecoration: "none" };

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Comparing mortgages</h2>
          <p>Choosing a shorter-term mortgage means higher monthly payments — but can save you money in the long run.</p>
        </div>
        <MortgageComparison/>
        <div className='footer'>
          <div className="footer-header">
            <h3>About this website</h3>
          </div>
          <p>This Website was made by the <a href="https://www.meetup.com/Montana-Programmers/events/244514169/">Coffee & Code club</a> from beautiful Missoula, Montana, USA.</p>
          <p>The source code for this website is available on <a style={linkStyle} href="https://github.com/coffeeAndCodeMSO/mort_comp/"><i className="fa fa-github-alt" aria-hidden="true" /> GitHub</a></p>
        </div>
      </div>
    );
  }
}


export default App;
