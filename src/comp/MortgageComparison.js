import React from 'react';
import NVD3Chart from 'react-nvd3'
import { format} from 'd3';

import LoanAmountDetails from './LoanAmountDetails.js'
import FixedExpenses from './FixedExpenses.js'
import LoanDetails from './LoanDetails.js'
import ComparisonResults from './ComparisonResults.js'

import Mortgage from '../lib/mortgage.js'

import './../css/nv.d3.css'

class MortgageComparison extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mortA: new Mortgage(400000, 0.03250, 15, 350.00),
      mortB: new Mortgage(400000, 0.03930, 30, 350.00),

      loanAmount: 400000,
      propertyTax: 3000,
      insurance: 1200,

      years: {
        mortA: 15,
        mortB: 30
      },

      interestRates: {
        mortA: 0.03250,
        mortB: 0.03930
      },

      termData: [
        { title: 'Terminator', value: 21, year: 1984 },
        { title: 'Commando', value: 81, year: 1985 },
        { title: 'Predator', value: 25, year: 1987 },
        { title: 'Raw Deal', value: 26, year: 1986 },
        { title: 'The Running Man', value: 11, year: 1987 },
        { title: 'Total Recall', value: 44, year: 1990 },
        { title: 'Terminator 2', value: 0, year: 1991 },
        { title: 'Last Action Hero', value: 22, year: 1993 },
        { title: 'True Lies', value: 51, year: 1994 },
        { title: 'Eraser', value: 29, year: 1996 },
        { title: 'Terminator 3', value: 2, year: 2003 },
      ],

      dummyData: [
          {x: 0, y: 2},
          {x: 2, y: 5},
          {x: 3, y: 0},
      ],

      margin : {
        top: 20, right: 20, bottom: 30, left: 50
      },
      width: 500,
      height: 200,
      plotWidth : 0,
      plotHeight : 0
    };
  }

  totalExpenses = () => {
    return (Number(this.state.propertyTax) + Number(this.state.insurance))
  }

  totalMonthlyExpenses = () => {
    return (this.totalExpenses() / 12.0)
  }

  // anytime a field that is a common input to the mortgage changes, this updates
  // common inputs are: loanAmount, fixedExpense Amount
  updateCommonMortgageInput = (fieldId, newValue) => {
    var newState = {}
    newState[fieldId] = newValue
    this.setState(newState)
    this.recalcMortgages()
  }

  recalcMortgages = () => {
    this.setState({
      mortA: new Mortgage(this.state.loanAmount, this.state.interestRates.mortA, this.state.years.mortA, this.totalMonthlyExpenses()),
      mortB: new Mortgage(this.state.loanAmount, this.state.interestRates.mortB, this.state.years.mortB, this.totalMonthlyExpenses()),
    })
  }

  updateMortgageInterestRate = (mortId, newinterestRate) => {
    var newState = { interestRates: this.state.interestRates }
    newState.interestRates[mortId] = newinterestRate/100
    this.setState(newState)
    this.recalcMortgages()
  }

  updateMortgageYears = (mortId, newYears) => {
    var newState = { years: this.state.years }
    newState.years[mortId] = Math.round(Number(newYears))
    this.setState(newState)
    this.recalcMortgages()
  }

  setPlotWidth() {
    this.setState({
      plotWidth : this.state.width - this.state.margin.left - this.state.margin.right
    })
  }

  setPlotHeight() {
    this.setState({
      plotHeight : this.state.height - this.state.margin.top - this.state.margin.bottom
    })
  }

  buildGraphData(mortgage){
    // mortgage is mortgage object from state
    const months = Array.from(new Array(mortgage.months), (x,i) => i + 1) // to correct for off-by-one error

    let series = {
      'key': 'Series1',
      'values': months.map(i => [i, mortgage.paidToDate(i)]),
      'color': 'blue'
    }
    return series;
  }

  componentDidMoount() {
    this.setPlotWidth()
    this.setPlotHeight()
  }

    render() {
      const mortAData = this.buildGraphData(this.state.mortA);
      return (
        <div>
          <div className='layoutRow'>
            <LoanAmountDetails updateCommonMortgageInput={this.updateCommonMortgageInput} loanAmount={this.state.loanAmount} />
          </div>
          <div className='layoutRow'>
            <FixedExpenses updateCommonMortgageInput={this.updateCommonMortgageInput} insurance={this.state.insurance} propertyTax={this.state.propertyTax} />
          </div>
          <div className='layoutRow'>
            <div className='sideBySideColumn'>
              <LoanDetails id='mortA' mortgage={this.state.mortA} updateinterestRate={this.updateMortgageInterestRate} updateMortgageYears={this.updateMortgageYears} />
            </div>
            <div className='sideBySideColumn'>
              <LoanDetails id='mortB' mortgage={this.state.mortB}  updateinterestRate={this.updateMortgageInterestRate} updateMortgageYears={this.updateMortgageYears} />
            </div>
          </div>
          <div className='layoutRow'>
            <ComparisonResults mortA={this.state.mortA} mortB={this.state.mortB}/>
          </div>
          <div className='layoutRow'>
            <NVD3Chart
              id="chart"
              type="lineChart"
              datum={[mortAData]}
              x={d => d[0]}
              y={d => d[1]}
              yAxis={{
                tickFormat: format('$,'),
              }}
              margin={{top:10, left: 100}}
              
            />
          </div>
        </div>
      )
    }
}

export default MortgageComparison;
