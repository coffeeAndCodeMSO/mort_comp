import React from 'react';
import { moneyize, printableSingleDecimalPercent } from '../lib/formatting_helpers'

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
    return("The payment for Mortgage A is $" +
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
    let moreOrLess
    if (this.props.mortA.totalLifetimePayments > this.props.mortB.totalLifetimePayments) {
      moreOrLess = " more"
    } else {
      moreOrLess = " less"
    }
    return("The total lifetime payment for Mortgage A is $" +
           moneyize(Math.abs(this.totalPaymentDiff())) +
           moreOrLess + " (%" +
           printableSingleDecimalPercent(this.totalPaymentDiffPct()) + ")")
  }

  timeDiffStr = () => {
    var yearsDiff = ((this.props.mortA.months - this.props.mortB.months) / 12.0)
    if (yearsDiff < 0) {
      return("Mortgage A payed off " + Math.abs(yearsDiff.toFixed(1)) + " years sooner")
    } else {
      return("Mortgage A payed off " + yearsDiff.toFixed(1) + " years later")
    }
  }

  render = () => {
    return(
      <div className='relatedSectionOfNumbers' >
        <p>Summary of differences</p>
        <table>
          <tbody>
            <tr>
              <td className='column-heading' >Payment</td>
              <td className='column-data' >{this.paymentDiffStr()}</td>
            </tr>
            <tr>
              <td className='column-heading' >Total loan lifetime payments</td>
              <td className='column-data' >{this.totalPaymentDiffStr()}</td>
            </tr>
            <tr>
              <td className='column-heading' >Difference in time to payoff loan</td>
              <td className='column-data' >{this.timeDiffStr()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
