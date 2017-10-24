import React from 'react';
import { moneyize, printableAnnualInterestRate, printableMonthlyInterestRate } from '../lib/formatting_helpers'

class LoanDetails extends React.Component {

  render() {
    return (
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>
            <tr>
              <td className='column-heading' >Loan Years</td>
              <td className='column-data' >{this.props.mortgage.years}</td>
              <td className='minor-column-heading' >Months</td>
              <td className='minor-data' >{this.props.mortgage.months}</td>
            </tr>
            <tr>
              <td className='column-heading' >Interest Rate</td>
              <td className='column-data' >%<input id={"interestRate_" + this.props.mortgage.years} className='percentageInput' value={printableMonthlyInterestRate(this.props.mortgage.interestRate)} type='number' min='0.0' step='0.01' onChange={(event) => this.props.updateMortgageIntRate(this.props.id, event.target.value)} /></td>
              <td className='minor-column-heading' >Monthly</td>
              <td className='minor-data' >%{printableMonthlyInterestRate(this.props.mortgage.monthlyInterestRate)}</td>
            </tr>
            <tr>
              <td className='minor-column-heading' >Loan Amount</td>
              <td className='minor-data'>${moneyize(this.props.mortgage.loanAmount)}</td>
              <td className='minor-column-heading' >Fixed Monthly Expenses</td>
              <td className='minor-data' >${moneyize(this.props.mortgage.fixedMonthlyExpenses)}</td>
            </tr>
            <tr>
              <td className='column-heading' >Monthly Principal+Interest payment</td>
              <td className='column-data' >${moneyize(this.props.mortgage.principalAndInterestPayment)}</td>
            </tr>
            <tr>
              <td className='column-heading' >Total Monthly payment</td>
              <td className='column-data' >${moneyize(this.props.mortgage.minimumMonthlyPayment)}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default LoanDetails;
