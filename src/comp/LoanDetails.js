import React from 'react';

class LoanDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interestRate: 0.0378
    }
  }

  render() {
    return (
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>
            <tr>
              <td className='column-heading' >Loan Years</td>
              <td>{this.props.loanYears}</td>
            </tr>
              <tr>
                <td className='column-heading' >Interest Rate</td>
                <td>{Math.round(this.state.interestRate * 10000) / 100.0} %</td>
              </tr>
            <tr>
              <td className='column-heading' >Payment Amount</td>
              <td>${this.props.minPaymentAmount}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default LoanDetails;
