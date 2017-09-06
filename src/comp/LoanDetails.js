import React from 'react';

class LoanDetails extends React.Component {
  constructor(props) {
    super(props);
    var intRate = (props.loanYears === '15' ) ? 0.0378 : 0.0412;
    this.state = {
      interestRate: intRate
    }

  }

  loanMonths = () => {
    return (this.props.loanYears * 12);
  }

  monthlyInterestRate = () => {
    return (this.state.interestRate / 12);
  }

  monthlyPrincipalInterestPayment = () => {
    var mir = this.monthlyInterestRate();
    var lm = this.loanMonths()
    var la = this.props.loanAmount;
    var term1 = Math.pow((1.0 + mir),lm);
    var payment = ((la * mir * term1) / (term1 - 1.0));
    return Number(payment.toFixed(2));
  }

  totalMinimumMonthlyPayment = () => {
    return Number((this.monthlyPrincipalInterestPayment() + this.props.fixedMonthlyExpenses).toFixed(2));
  }

  updateInterestRate = (event) => {
    this.setState({interestRate: (event.target.value / 100.0)});
  }

  render() {
    return (
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>
            <tr>
              <td className='column-heading' >Loan Years</td>
              <td className='column-data' >{this.props.loanYears}</td>
              <td className='minor-column-heading' >Months</td>
              <td className='minor-data' >{this.loanMonths()}</td>
            </tr>
            <tr>
              <td className='column-heading' >Interest Rate</td>
              <td className='column-data' >%<input id='interestRate' className='percentageInput' value={(this.state.interestRate * 100).toFixed(2)} type='number' min='0.0' step='0.01' onChange={this.updateInterestRate} /></td>
              <td className='minor-column-heading' >Monthly</td>
              <td className='minor-data' >%{(this.monthlyInterestRate() * 100).toFixed(4)}</td>
            </tr>
            <tr>
              <td className='minor-column-heading' >Loan Amount</td>
              <td className='minor-data'>${Number(this.props.loanAmount).toFixed(2)}</td>
              <td className='minor-column-heading' >Fixed Monthly Expenses</td>
              <td className='minor-data' >${Number(this.props.fixedMonthlyExpenses).toFixed(2)}</td>
            </tr>
            <tr>
              <td className='column-heading' >Monthly Principal+Interest payment</td>
              <td className='column-data' >${Number(this.monthlyPrincipalInterestPayment()).toFixed(2)}</td>
            </tr>
            <tr>
              <td className='column-heading' >Total Monthly payment</td>
              <td className='column-data' >${Number(this.totalMinimumMonthlyPayment()).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default LoanDetails;
