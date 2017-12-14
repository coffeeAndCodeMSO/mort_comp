import React from 'react';
import { moneyize, printableMonthlyInterestRate } from '../lib/formatting_helpers'

import InputCell from './InputCell.js';
import DisplayCell from './DisplayCell.js';

class LoanDetails extends React.Component {

  render() {
    const letter = this.props.id === "mortA" ? "A" : "B"
    return (
      <div className='relatedSectionOfNumbers'>
        <div className="section-header">
          {`(${letter}) ${this.props.mortgage.years}-year mortgage`}
        </div>
        <InputCell id={"years_" + this.id}
          label="Loan years"
          unitLabel=' '
          value={this.props.mortgage.years}
          min='1'
          step='1'
          onChange={(event) => this.props.updateMortgageYears(this.props.id, event.target.value)}
        />
        <DisplayCell
          label="Loan months"
          value={this.props.mortgage.months}
        />

        <InputCell id={"interestRate_" + this.props.id}
          label="Annual interest rate"
          unitLabel='%'
          value={printableMonthlyInterestRate(this.props.mortgage.interestRate)}
          min='1'
          step='0.01'
          onChange={(event) => this.props.updateinterestRate(this.props.id, event.target.value)}
        />
        <DisplayCell
          label="Monthly interest rate"
          unitLabel='%'
          value={printableMonthlyInterestRate(this.props.mortgage.monthlyInterestRate)}
        />

        <DisplayCell
          label="Loan payment, monthly"
          value={this.props.mortgage.principalAndInterestPayment}
          unitLabel='$'
          formatFunction={moneyize}
        />
        <DisplayCell
          label="Total cost, monthly"
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
