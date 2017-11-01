import React from 'react';
import { moneyize, printableAnnualInterestRate, printableMonthlyInterestRate } from '../lib/formatting_helpers'

export default class ComparisonResults extends React.Component {

  paymentDiff = () => {
    return (this.props.mortB.minimumMonthlyPayment - this.props.mortA.minimumMonthlyPayment)
  }

  render = () => {
    return(
      <div className='relatedSectionOfNumbers' >
        <p>Summary of differences</p>
        <table>
          <tbody>
            <tr>
              <td className='column-heading' >Payment difference</td>
              <td className='column-data' >${moneyize(this.paymentDiff())}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
