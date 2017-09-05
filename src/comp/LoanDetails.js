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
    return this.props.loanYears * 12;
  }

  monthlyInterestRate = () => {
    return this.state.interestRate / 12;
  }

  monthlyPrincipalInterestPayment = () => {
    var mir = this.monthlyInterestRate();
    var lm = this.loanMonths()
    var la = this.props.loanAmount;
    var term1 = Math.pow((1.0 + mir),lm);
    var payment = ((la * mir * term1) / (term1 - 1.0));
    var roundedPayment = Math.round(100 * payment) / 100;
    return roundedPayment;
  }

  totalMinimumMonthlyPayment = () => {
    return (this.monthlyPrincipalInterestPayment() + this.props.fixedMonthlyExpenses);
  }

  render() {
    return (
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>
            <tr>
              <td className='column-heading' >Loan Years</td>
              <td>{this.props.loanYears}</td>
              <td className='minor-column-heading' >Months</td>
              <td>{this.loanMonths()}</td>
            </tr>
            <tr>
              <td className='column-heading' >Loan Amount</td>
              <td>${this.props.loanAmount}</td>
            </tr>
            <tr>
              <td className='column-heading' >Fixed Monethly Expenses</td>
              <td>${this.props.fixedMonthlyExpenses}</td>
            </tr>
            <tr>
              <td className='column-heading' >Interest Rate</td>
              <td>{this.state.interestRate}</td>
              <td className='minor-column-heading' >Monthly</td>
              <td>{this.monthlyInterestRate()}</td>
            </tr>
            <tr>
              <td className='column-heading' >Monthly Principal+Interest payment</td>
              <td>${this.monthlyPrincipalInterestPayment()}</td>
            </tr>
            <tr>
              <td className='column-heading' >Total Monthly payment</td>
              <td>${this.totalMinimumMonthlyPayment()}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default LoanDetails;
