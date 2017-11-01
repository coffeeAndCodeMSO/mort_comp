import React from 'react';

import LoanAmountDetails from './LoanAmountDetails.js'
import FixedExpenses from './FixedExpenses.js'
import LoanDetails from './LoanDetails.js'
import ComparisonResults from './ComparisonResults.js'
import LoanParameters from './LoanParameters.js'
import Mortgage from '../lib/mortgage.js'

class MortgageComparison extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mort15: new Mortgage(400000, 0.03250, 15, 350.00),
      mort30: new Mortgage(400000, 0.03930, 30, 350.00),

      loanAmount: 400000,
      propertyTax: 3000,
      insurance: 1200,

      years: {
        mort15: 15,
        mort30: 30
      },

      interestRates: {
        mort15: 0.03250,
        mort30: 0.03930
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
    // console.log(fieldId + " -> " + newValue);
    var newState = {}
    newState[fieldId] = newValue
    this.setState(newState)
    this.recalcMortgages()
  }

  recalcMortgages = () => {
    this.setState({
      mort15: new Mortgage(this.state.loanAmount, this.state.interestRates.mort15, 15, this.totalMonthlyExpenses()),
      mort30: new Mortgage(this.state.loanAmount, this.state.interestRates.mort30, 30, this.totalMonthlyExpenses()),
    })
  }

  updateMortgageinterestRate = (mortId, newinterestRate) => {
    var newState = { interestRates: this.state.interestRates }
    newState["interestRates"][mortId] = newinterestRate/100
    this.setState(newState)
    this.recalcMortgages()
  }



  render() {
    return (
      <div>
        <LoanAmountDetails updateCommonMortgageInput={this.updateCommonMortgageInput} loanAmount={this.state.loanAmount} />
        <FixedExpenses     updateCommonMortgageInput={this.updateCommonMortgageInput} insurance={this.state.insurance} propertyTax={this.state.propertyTax} />
        <div className='row'>
          <div className='sideBySideColumn'>
            <LoanParameters mortname='mort15' years={this.state.years.mort15} interestRate={this.state.interestRates.mort15} updateinterestRate={this.updateMortgageinterestRate} />
          </div>
          <div className='sideBySideColumn'>
            <LoanParameters mortname='mort30' years={this.state.years.mort30} interestRate={this.state.interestRates.mort30} updateinterestRate={this.updateMortgageinterestRate} />
          </div>
        </div>
        <div className='row'>
          <div className='sideBySideColumn'>
            <LoanDetails id='mort15' mortgage={this.state.mort15} />
          </div>
          <div className='sideBySideColumn'>
            <LoanDetails id='mort30' mortgage={this.state.mort30} />
          </div>
        </div>
        <div className='row'>
          <ComparisonResults mort15={this.state.mort15} mort30={this.state.mort30}/>
        </div>
      </div>
    )
  }
}

export default MortgageComparison;
