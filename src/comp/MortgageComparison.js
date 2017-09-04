import React from 'react';

import LoanAmountDetails from './LoanAmountDetails.js'
import FixedExpenses from './FixedExpenses.js'
import LoanDetails from './LoanDetails.js'

class MortgageComparison extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 400000,
      fixedMonthlyExpenses: 300
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
        <LoanDetails loanYears='15' loanAmount={this.state.loanAmount} fixedMonthlyExpenses={this.state.fixedMonthlyExpenses} />;
        <LoanDetails loanYears='30' loanAmount={this.state.loanAmount} fixedMonthlyExpenses={this.state.fixedMonthlyExpenses} />;
      </div>
    )
  }
}

export default MortgageComparison;
