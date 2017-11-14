import React from 'react';
import { moneyize, printableMonthlyInterestRate } from '../lib/formatting_helpers'

class LoanDetails extends React.Component {

  render() {
    return (
      <div className='relatedSectionOfNumbers'>
        <h4>Mortgage {this.props.id == "mortA" ? "A" : "B"} Details</h4>
        <table>
          <tbody>
            <tr>
              <td className='column-heading' >Loan Years</td>
              <td className='column-data' >%<input id={"years_" + this.id} className='yearInput' value={this.props.mortgage.years} type='number' min='1' step='1' onChange={(event) => this.props.updateMortgageYears(this.props.id, event.target.value)} /></td>
              <td className='minor-column-heading' >Months</td>
              <td className='minor-data' >{this.props.mortgage.months}</td>
            </tr>
            <tr>
              <td className='column-heading' >Interest Rate</td>
              <td className='column-data' >%<input id={"interestRate_" + this.id} className='percentageInput' value={printableMonthlyInterestRate(this.props.mortgage.interestRate)} type='number' min='0.0' step='0.01' onChange={(event) => this.props.updateinterestRate(this.props.id, event.target.value)} /></td>
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
            <tr>
              <td className='column-heading' >Total lifetime payments (naive)</td>
              <td className='column-data' >${moneyize(this.props.mortgage.totalLifetimePayments)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default LoanDetails;
