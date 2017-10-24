import React from 'react';
import { moneyize, printableAnnualInterestRate, printableMonthlyInterestRate } from '../lib/formatting_helpers'

export default class ComparisonResults extends React.Component {

  paymentDiff = () => {
    return (this.props.mort30.minimumMonthlyPayment - this.props.mort15.minimumMonthlyPayment)
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
