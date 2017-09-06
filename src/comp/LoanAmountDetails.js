import React from 'react';

class LoanAmountDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseCost: 500000,
      downPercent: 20,
      downAmount: 100000,
      loanAmount: 400000
    };
  }

  componentDidMount = () => {
    this.props.loanAmountChangedCallback(this.state.loanAmount);
  }

  // Why does this cause infinite loop???  Use setStateAndCallback approach instead
  // componentDidUpdate = () => {
  //   this.props.loanAmountChangedCallback(this.state.loanAmount);
  // }

  setStateAndCallback = (state) => {
    this.setState(state);
    this.props.loanAmountChangedCallback(this.state.loanAmount);
  }

  updateHouseCost = (event) => {
    var houseCost = Math.round(event.target.value);
    var loanAmount = Math.round(houseCost * (1.0 - (this.state.downPercent / 100.0)));
    var downAmount = Math.round(houseCost - loanAmount);
    this.setStateAndCallback({houseCost: houseCost, loanAmount: loanAmount, downAmount: downAmount});
  }

  updateDownPercent = (event) => {
    var downPercent = Number(event.target.value);
    var loanAmount = Math.round(this.state.houseCost * (1.0 - (downPercent / 100.0)));
    var downAmount = Math.round(this.state.houseCost - loanAmount);
    this.setStateAndCallback({downPercent: downPercent, loanAmount: loanAmount, downAmount: downAmount});
  }

  updateDownAmount = (event) => {
    var downAmount  = Math.round(event.target.value);
    var downPercent = ((downAmount / this.state.houseCost) * 100);
    var loanAmount = Math.round(this.state.houseCost - downAmount);
    this.setStateAndCallback({downAmount: downAmount, downPercent: downPercent, loanAmount: loanAmount});
  }

  updateLoanAmount = (event) => {
    var loanAmount = Math.round(event.target.value);
    this.setStateAndCallback({loanAmount: loanAmount, downPercent: 0, houseCost: 0, downAmount: 0});
  }

  render() {
    return (
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>

          <tr>
            <td className='column-heading' >House Cost</td>
            <td className='column-data' >$<input id='houseCost' className='moneyInput' value={Number(this.state.houseCost).toFixed(2)} type='number' min='0' step='1000' onChange={this.updateHouseCost} /></td>
          </tr>
          <tr>
            <td className='column-heading' >Down Payment Amount</td>
            <td className='column-data' >
                $<input id='downAmount' className='moneyInput' value={Number(this.state.downAmount).toFixed(2)} type='number' min='0' step='1000' onChange={this.updateDownAmount} />
            </td>
            <td className='column-data' >
                %<input id='downPercent' className='percentageInput' value={Number(this.state.downPercent).toFixed(1)} type='number' min='0' step='1' onChange={this.updateDownPercent} />
            </td>
          </tr>
          <tr>
            <td className='column-heading' >Loan Amount</td>
            <td className='column-data' >$<input id='loanAmount' className='moneyInput' value={Number(this.state.loanAmount).toFixed(2)} type='number' min='0' step='1000' onChange={this.updateLoanAmount} /></td>
          </tr>

          </tbody>
        </table>
      </section>
    )
  }
}

export default LoanAmountDetails;
