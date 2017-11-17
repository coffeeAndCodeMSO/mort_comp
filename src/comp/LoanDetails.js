import React from 'react';
import { moneyize, printableMonthlyInterestRate, printableAnnualInterestRate } from '../lib/formatting_helpers'

import InputCell from './InputCell.js';
import DisplayCell from './DisplayCell.js';

class LoanDetails extends React.Component {

  render() {
    return (
      <div className='relatedSectionOfNumbers'>
        <div className="section-header">Mortgage {this.props.id == "mortA" ? "A" : "B"} Details</div>
        <InputCell id={"years_" + this.id}
          label="Loan Years"
          unitLabel=' '
          value={this.props.mortgage.years}
          min='1'
          step='1'
          onChange={(event) => this.props.updateMortgageYears(this.props.id, event.target.value)}
        />
        <DisplayCell
          label="Loan Months"
          value={this.props.mortgage.months}
        />

        <InputCell id={"interestRate_" + this.id}
          label="Interest Rate"
          unitLabel='%'
          value={printableMonthlyInterestRate(this.props.mortgage.interestRate)}
          min='1'
          step='1'
          onChange={(event) => this.props.updateinterestRate(this.props.id, event.target.value)}
        />
        <DisplayCell
          label="Monthly interest rate"
          unitLabel='%'
          value={printableMonthlyInterestRate(this.props.mortgage.monthlyInterestRate)}
        />

        <DisplayCell
          label="Monthly Principal+Interest payment"
          value={this.props.mortgage.principalAndInterestPayment}
          unitLabel='$'
          formatFunction={moneyize}
        />
        <DisplayCell
          label="Total Monthly payment"
          value={this.props.mortgage.minimumMonthlyPayment}
          unitLabel='$'
          formatFunction={moneyize}
        />
        <DisplayCell
          label="Total lifetime payments (naive)"
          value={this.props.mortgage.totalLifetimePayments}
          unitLabel='$'
          formatFunction={moneyize}
        />
      </div>
    )
  }
}

export default LoanDetails;
