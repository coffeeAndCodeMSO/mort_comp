import React from 'react';

import LoanAmountDetails from './LoanAmountDetails.js'
import FixedExpenses from './FixedExpenses.js'
import LoanDetails from './LoanDetails.js'
import ComparisonResults from './ComparisonResults.js'

class MortgageComparison extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      houseCost: 500000,
      downPercent: 20,
      downAmount: 100000,
      loanAmount: 400000,
      expenses: {
        propertyTax: 3000,
        insurance: 1000
      },
      totalExpenses: 4000,
      totalMonthlyExpenses: 333.33
    };
  }

  updateHouseCost = (new_value) => {
    var houseCost = Math.round(new_value);
    var loanAmount = Math.round(houseCost * (1.0 - (this.state.downPercent / 100.0)));
    var downAmount = Math.round(houseCost - loanAmount);
    this.setState({houseCost: houseCost, loanAmount: loanAmount, downAmount: downAmount});
  }

  updateDownPercent = (new_value) => {
    var downPercent = Number(new_value);
    var loanAmount = Math.round(this.state.houseCost * (1.0 - (downPercent / 100.0)));
    var downAmount = Math.round(this.state.houseCost - loanAmount);
    this.setState({downPercent: downPercent, loanAmount: loanAmount, downAmount: downAmount});
  }

  updateDownAmount = (new_value) => {
    var downAmount  = Math.round(new_value);
    var downPercent = ((downAmount / this.state.houseCost) * 100);
    var loanAmount = Math.round(this.state.houseCost - downAmount);
    this.setState({downAmount: downAmount, downPercent: downPercent, loanAmount: loanAmount});
  }

  updateLoanAmount = (amount) => {
    var rounded = Math.round(amount);
    this.setState({loanAmount: rounded});
  }

  updateExpense = (fieldId, new_value) => {
    var expenses = this.state.expenses;
    expenses[fieldId] = Number(Number(new_value).toFixed(2));
    var total = Number((Object.values(expenses).reduce((a,b) => Number(a)+Number(b))).toFixed(2));
    var monthlyTotal = Number((total / 12.0).toFixed(2));
    this.setState({expenses: expenses, totalExpenses: total, totalMonthlyExpenses: monthlyTotal});
  }

  render() {
    return (
      <div>
        <LoanAmountDetails updateHouseCost={this.updateHouseCost} updateDownPercent={this.updateDownPercent} updateDownAmount={this.updateDownAmount} updateLoanAmount={this.updateLoanAmount} loanDetails={this.state} />
        <FixedExpenses updateExpense={this.updateExpense} expenses={this.state.expenses} totalExpenses={this.state.totalExpenses} totalMonthlyExpenses={this.state.totalMonthlyExpenses} />
        <ComparisonResults />
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
