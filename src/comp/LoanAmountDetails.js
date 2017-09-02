import React from 'react';

class LoanAmountDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseCost: 300000,
      downPercent: 20,
      downAmount: 60000,
      loanAmount: 240000,
    }
    this.updateHouseCost = this.updateHouseCost.bind(this);
    this.updateDownPercent = this.updateDownPercent.bind(this);
    this.updateLoanAmount = this.updateLoanAmount.bind(this);
    this.updateDownAmount = this.updateDownAmount.bind(this);
  }

  updateHouseCost(event) {
    var houseCost = event.target.value;
    var loanAmount = houseCost * (1.0 - (this.state.downPercent / 100.0));
    var downPercent = ((this.state.downAmount / houseCost) * 100).toPrecision(3);
    this.setState({houseCost: houseCost, loanAmount: loanAmount, downPercent: downPercent});
  }

  updateDownPercent(event) {
    var downPercent = event.target.value;
    var loanAmount = this.state.houseCost * (1.0 - (downPercent / 100.0));
    var downAmount = this.state.houseCost - loanAmount;
    this.setState({downPercent: downPercent, loanAmount: loanAmount, downAmount: downAmount});
  }

  updateDownAmount(event) {
    var downAmount  = event.target.value;
    var downPercent = ((downAmount / this.state.houseCost) * 100).toPrecision(3);
    var loanAmount = this.state.houseCost - downAmount;
    this.setState({downAmount: downAmount, downPercent: downPercent, loanAmount: loanAmount});
  }

  updateLoanAmount(event) {
    var loanAmount = event.target.value;
    this.setState({loanAmount: loanAmount, downPercent: '', houseCost: '', downAmount: ''});
  }

  render() {
    return (
      <div className='LoanAmountDetails'>
        <table>
          <tbody>

          <tr><td className='column-heading' >House Cost</td><td>
          <span>
          $<input id='houseCost' value={this.state.houseCost} type='number' min='0' step='1000' onChange={this.updateHouseCost} />
          </span>
          </td></tr>

          <tr><td className='column-heading' >Down Payment Amount</td><td>
          <span>
          $<input id='downAmount' className='money-input' value={this.state.downAmount} type='number' min='0' step='1000' onChange={this.updateDownAmount} />
          %<input id='downPercent' className='rounded-percentage' value={this.state.downPercent} type='number' min='0' step='1' onChange={this.updateDownPercent} />
          </span>
          </td></tr>

          <tr><td className='column-heading' >Loan Amount</td><td>
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

export default LoanAmountDetails;
