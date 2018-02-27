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
          label="Minimum payment, monthly"
          value={this.props.mortgage.minimumMonthlyPayment}
          unitLabel='$'
          formatFunction={moneyize}
        />

        <div className="input-group">
          <div className="input-label">Make 13th payment each year?</div>
          <input className='checkboxInput'
            type='checkbox'
            value={this.props.mortgage.makeExtraPayment}
            onChange={(event) => this.props.toggleMortgageExtraPayment(this.props.id, event.target.value)}
          />
        </div>

        <DisplayCell
          label="Total lifetime cost"
          value={this.props.mortgage.totalLifetimeCost}
          unitLabel='$'
          formatFunction={moneyize}
        />


        <DisplayCell
          label="Total years to pay off"
          value={this.props.mortgage.totalNumberOfPayments / 12.0}
          unitLabel='$'
          formatFunction={moneyize}
        />
      </div>
    )
  }
}

export default LoanDetails;
