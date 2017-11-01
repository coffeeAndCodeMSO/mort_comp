import React from 'react';
import { printableMonthlyInterestRate } from '../lib/formatting_helpers'

class LoanParameters extends React.Component {

  loanMonths = () => {
    return (this.props.years * 12)
  }

  monthlyInterestRate = () => {
    return (this.props.interestRate / 12)
  }

  render() {
    return (
      <div className='relatedSectionOfNumbers'>
        <table>
          <tbody>
            <tr>
              <td className='column-heading' >Loan Years</td>
              <td className='column-data' >{this.props.years}</td>
              <td className='minor-column-heading' >Months</td>
              <td className='minor-data' >{this.loanMonths()}</td>
            </tr>
            <tr>
              <td className='column-heading' >Interest Rate</td>
              <td className='column-data' >%<input id={"interestRate_" + this.id} className='percentageInput' value={printableMonthlyInterestRate(this.props.interestRate)} type='number' min='0.0' step='0.01' onChange={(event) => this.props.updateinterestRate(this.props.mortname, event.target.value)} /></td>
              <td className='minor-column-heading' >Monthly</td>
              <td className='minor-data' >%{printableMonthlyInterestRate(this.monthlyInterestRate())}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default LoanParameters;
