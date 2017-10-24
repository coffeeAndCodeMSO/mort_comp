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
      mort15: new Mortgage(400000, 0.03250, 15, 350.00),
      mort30: new Mortgage(400000, 0.03930, 30, 350.00),

      loanAmount: 400000,
      propertyTax: 3000,
      insurance: 1200,

      intRates: {
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
      mort15: new Mortgage(this.state.loanAmount, this.state.intRates.mort15, 15, this.totalMonthlyExpenses()),
      mort30: new Mortgage(this.state.loanAmount, this.state.intRates.mort30, 30, this.totalMonthlyExpenses()),
    })
  }

  updateMortgageIntRate = (mortId, newIntRate) => {
    var newState = { intRates: this.state.intRates }
    newState["intRates"][mortId] = newIntRate/100
    this.setState(newState)
    this.recalcMortgages()
  }

  render() {
    return (
      <div>
        <LoanAmountDetails updateCommonMortgageInput={this.updateCommonMortgageInput} loanAmount={this.state.loanAmount} />
        <FixedExpenses     updateCommonMortgageInput={this.updateCommonMortgageInput} insurance={this.state.insurance} propertyTax={this.state.propertyTax} />
        <ComparisonResults mort15/>
        <div className='sideBySideColumn'>
          <LoanDetails id='mort15' mortgage={this.state.mort15} updateMortgageIntRate={this.updateMortgageIntRate} />
        </div>
        <div className='sideBySideColumn'>
          <LoanDetails id='mort30' mortgage={this.state.mort30} updateMortgageIntRate={this.updateMortgageIntRate} />
        </div>
      </div>
    )
  }
}

export default MortgageComparison;
