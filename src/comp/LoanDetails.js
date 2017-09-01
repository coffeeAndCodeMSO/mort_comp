import React from 'react';

class LoanDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseCost: 300000,
      downPercent: 20,
      loanAmount: 240000,
    }
    this.updateHouseCost = this.updateHouseCost.bind(this);
    this.updateDownPercent = this.updateDownPercent.bind(this);
    this.updateLoanAmount = this.updateLoanAmount.bind(this);
  }

  updateHouseCost(event) {
    var houseCost = event.target.value;
    var loanAmount = houseCost * (1.0 - (this.state.downPercent / 100.0));
    this.setState({houseCost: houseCost, loanAmount: loanAmount});
  }

  updateDownPercent(event) {
    var downPercent = event.target.value;
    var loanAmount = this.state.houseCost * (1.0 - (downPercent / 100.0));
    this.setState({downPercent: downPercent, loanAmount: loanAmount});
  }

  updateLoanAmount(event) {
    var loanAmount = event.target.value;
    this.setState({loanAmount: loanAmount, downPercent: '', houseCost: ''});
  }

  render() {
    return (
      <div className='LoanDetails'>
        <table>
          <tbody>

          <tr><th>House Cost</th><td>
          <span className='moneyInput'>
          $<input id='houseCost' value={this.state.houseCost} type='number' min='0' step='1000' onChange={this.updateHouseCost} />
          </span>
          </td></tr>

          <tr><th>Down Payment Percent</th><td>
          <span>
          <input id='downPercent' value={this.state.downPercent} type='number' min='0' step='1' onChange={this.updateDownPercent} />%
          </span>
          </td></tr>

          <tr><th>Loan Amount</th><td>
          <span className='moneyInput'>
          $<input id='loanAmount' value={this.state.loanAmount} type='number' min='0' step='1000' onChange={this.updateLoanAmount} />
          </span>
          </td></tr>

          </tbody>
        </table>
      </div>
    )
  }
}

export default LoanDetails;
