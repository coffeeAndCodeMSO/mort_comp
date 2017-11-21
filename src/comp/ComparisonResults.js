import React from 'react';
import { moneyize, printableSingleDecimalPercent } from '../lib/formatting_helpers'

import DisplayCell from './DisplayCell.js';

export default class ComparisonResults extends React.Component {

  paymentDiff = () => {
    return (this.props.mortA.minimumMonthlyPayment - this.props.mortB.minimumMonthlyPayment)
  }

  paymentDiffPct = () => {
    return (this.props.mortA.minimumMonthlyPayment / this.props.mortB.minimumMonthlyPayment)
  }

  paymentDiffStr = () => {
    if (this.props.mortA.minimumMonthlyPayment > this.props.mortB.minimumMonthlyPayment) {
      var moreOrLess = " more"
    } else {
      var moreOrLess = " less"
    }
    return("Mortgage A is $" +
           moneyize(Math.abs(this.paymentDiff())) +
           moreOrLess + " per month (%" +
           printableSingleDecimalPercent(this.paymentDiffPct()) + ")"
     )
  }

  totalPaymentDiff = () => {
    return (this.props.mortA.totalLifetimePayments - this.props.mortB.totalLifetimePayments)
  }

  totalPaymentDiffPct = () => {
    return (1 - (this.props.mortA.totalLifetimePayments / this.props.mortB.totalLifetimePayments))
  }

  totalPaymentDiffStr = () => {
    if (this.props.mortA.totalLifetimePayments > this.props.mortB.totalLifetimePayments) {
      var moreOrLess = " more"
    } else {
      var moreOrLess = " less"
    }
    return("Mortgage A wil be $" +
           moneyize(Math.abs(this.totalPaymentDiff())) +
           moreOrLess + " (%" +
           printableSingleDecimalPercent(this.totalPaymentDiffPct()) + ")" +
         "\n over the life of the loan")
  }

  timeDiffStr = () => {
    var yearsDiff = ((this.props.mortA.months - this.props.mortB.months) / 12.0)
    if (yearsDiff < 0) {
      return("Mortgage A  will be payed off " + Math.abs(yearsDiff.toFixed(1)) + " years sooner")
    } else {
      return("Mortgage A will be payed off " + yearsDiff.toFixed(1) + " years later")
    }
  }

  render = () => {
    return(
      <div className='conclusionSection' >
        <div className="section-header">Summary</div>
        <DisplayCell
          label="Payment"
          value={this.paymentDiffStr()}
          displayClass='text-display'
        />
        <DisplayCell
          label="Total loan lifetime payments"
          value={this.totalPaymentDiffStr()}
          displayClass='text-display'
        />
        <DisplayCell
          label="Difference in time to payoff loan"
          value={this.timeDiffStr()}
          displayClass='text-display'
        />
      </div>
    )
  }
}
