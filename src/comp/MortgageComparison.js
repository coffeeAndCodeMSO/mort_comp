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
      mort_15: new Mortgage(400000, 0.03250, 15, 350.00),
      mort_30: new Mortgage(400000, 0.03930, 30, 350.00),

      loanAmount: 400000,
      propertyTax: 3000,
      insurance: 1200,

      int_rate_15: 0.03250,
      int_rate_30: 0.03930
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
    this.setState({
      mort_15: new Mortgage(this.state.loanAmount, this.state.int_rate_15, 15, this.totalMonthlyExpenses()),
      mort_30: new Mortgage(this.state.loanAmount, this.state.int_rate_30, 30, this.totalMonthlyExpenses()),
    })
  }

  render() {
    return (
      <div>
        <LoanAmountDetails updateCommonMortgageInput={this.updateCommonMortgageInput} loanAmount={this.state.loanAmount} />
        <FixedExpenses     updateCommonMortgageInput={this.updateCommonMortgageInput} insurance={this.state.insurance} propertyTax={this.state.propertyTax} />
        <ComparisonResults />
        <div className='sideBySideColumn'>
          <LoanDetails id='loanA' loanYears='15' loanAmount={this.state.mort_15.loanAmount} fixedMonthlyExpenses={this.state.fixedMonthlyExpenses} />
        </div>
        <div className='sideBySideColumn'>
          <LoanDetails id='loanB' loanYears='30' loanAmount={this.state.mort_30.loanAmount} fixedMonthlyExpenses={this.state.fixedMonthlyExpenses} />
        </div>
      </div>
    )
  }
}

export default MortgageComparison;
