import React from 'react';

import LoanAmountDetails from './LoanAmountDetails.js'
import FixedExpenses from './FixedExpenses.js'
import LoanDetails from './LoanDetails.js'
import ComparisonResults from './ComparisonResults.js'
import Mortgage from '../lib/mortgage.js'

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
      }
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


    render() {
      return (
        <div>
          <div className='layoutRow'>
            <LoanAmountDetails updateCommonMortgageInput={this.updateCommonMortgageInput} loanAmount={this.state.loanAmount} />
          </div>
          <div className='layoutRow'>
            <FixedExpenses     updateCommonMortgageInput={this.updateCommonMortgageInput} insurance={this.state.insurance} propertyTax={this.state.propertyTax} />
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
        </div>
      )
    }
}

export default MortgageComparison;
