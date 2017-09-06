import React from 'react';

import LoanAmountDetails from './LoanAmountDetails.js'
import FixedExpenses from './FixedExpenses.js'
import LoanDetails from './LoanDetails.js'

class MortgageComparison extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 400000,
      fixedMonthlyExpenses: 300,
      loanA: {},
      loanB: {}
    };
  }

  updateLoanAmount = (amount) => {
    this.setState({loanAmount: amount});
  }

  updateFixedExpenses = (amount) => {
    this.setState({fixedMonthlyExpenses: amount});
  }

  render() {
    return (
      <div>
        <LoanAmountDetails loanAmountChangedCallback={this.updateLoanAmount} />
        <FixedExpenses fixedMonthlyExpensesChangedCallback={this.updateFixedExpenses} />
        <div className='sideBySideColumn'>
          <LoanDetails id='loanA' loanYears='15' loanAmount={this.state.loanAmount} fixedMonthlyExpenses={this.state.fixedMonthlyExpenses} />
        </div>
        <div className='sideBySideColumn'>
          <LoanDetails id='loanB' loanYears='30' loanAmount={this.state.loanAmount} fixedMonthlyExpenses={this.state.fixedMonthlyExpenses} />
        </div>
      </div>
    )
  }
}

export default MortgageComparison;
