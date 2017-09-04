import React from 'react';

class LoanAmountDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseCost: 300000,
      downPercent: 20,
      downAmount: 60000,
      loanAmount: 240000
    }
  }

  updateHouseCost = (event) => {
    var houseCost = event.target.value;
    var loanAmount = houseCost * (1.0 - (this.state.downPercent / 100.0));
    var downAmount = houseCost - loanAmount;
    this.setStateAndCallback({houseCost: houseCost, loanAmount: loanAmount, downAmount: downAmount});
  }

  updateDownPercent = (event) => {
    var downPercent = event.target.value;
    var loanAmount = this.state.houseCost * (1.0 - (downPercent / 100.0));
    var downAmount = this.state.houseCost - loanAmount;
    this.setStateAndCallback({downPercent: downPercent, loanAmount: loanAmount, downAmount: downAmount});
  }

  updateDownAmount = (event) => {
    var downAmount  = event.target.value;
    var downPercent = ((downAmount / this.state.houseCost) * 100).toPrecision(3);
    var loanAmount = this.state.houseCost - downAmount;
    this.setStateAndCallback({downAmount: downAmount, downPercent: downPercent, loanAmount: loanAmount});
  }

  updateLoanAmount = (event) => {
    var loanAmount = event.target.value;
    this.setStateAndCallback({loanAmount: loanAmount, downPercent: '', houseCost: '', downAmount: ''});
  }

  setStateAndCallback = (state) => {
    this.setState(state);
    this.props.loanAmountChangedCallback(state.loanAmount);
  }

  render() {
    return (
      <section className='relatedSectionOfNumbers'>
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
      </section>
    )
  }
}

export default LoanAmountDetails;
