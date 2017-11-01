import React from 'react';
import { moneyize, printableSingleDecimalPercent } from '../lib/formatting_helpers'

class LoanAmountDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      houseCost: 500000,
      downAmount: 100000,
      downPercent: 0.20,
      loanAmount: Number(this.props.loanAmount)
    };
  }

  updateLoanAmountInput = (event) => {
    // console.log(event)
    var newValue = Number(event.target.value)
    var newState = {}
    switch(event.target.id) {
      case "houseCost":
        newState["houseCost"] = Math.round(newValue)
        newState["loanAmount"] = Math.round(newState["houseCost"] * (1.0 - (this.state.downPercent / 100.0)));
        newState["downAmount"] = Math.round(newState["houseCost"] - newState["loanAmount"]);
        break;
      case "downPercent":
        newState["downPercent"] = Number(newValue)/100;
        newState["loanAmount"] = Math.round(this.state.houseCost * (1.0 - (newState["downPercent"])));
        newState["downAmount"] = Math.round(this.state.houseCost - newState["loanAmount"]);
        break;
      case "downAmount":
        newState["downAmount"]  = Math.round(newValue)
        newState["downPercent"] = ((newState["downAmount"] / this.state.houseCost) * 100);
        newState["loanAmount"] = Math.round(this.state.houseCost - newState["downAmount"]);
        break;
      case "loanAmount":
        this.setState({loanAmount: newValue, downAmount: '', downPercent: '', houseCost: ''});
        break;
    }
    this.setState(newState);
    this.props.updateCommonMortgageInput("loanAmount", this.state.loanAmount)
  }

  render() {
    return (
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>
          <tr>
            <td className='column-heading' >House Cost</td>
            <td className='column-data' >$<input id='houseCost' className='moneyInput' value={moneyize(this.state.houseCost)} type='number' min='0' step='1000' onChange={this.updateLoanAmountInput} /></td>
          </tr>
          <tr>
            <td className='column-heading' >Down Payment Amount</td>
            <td className='column-data' >
                $<input id='downAmount' className='moneyInput' value={moneyize(this.state.downAmount)} type='number' min='0' step='1000' onChange={this.updateLoanAmountInput} />
            </td>
            <td className='column-data' >
                %<input id='downPercent' className='percentageInput' value={printableSingleDecimalPercent(this.state.downPercent)} type='number' min='0' step='1' onChange={this.updateLoanAmountInput} />
            </td>
          </tr>
          <tr>
            <td className='column-heading' >Loan Amount</td>
            <td className='column-data' >$<input id='loanAmount' className='moneyInput' value={moneyize(this.state.loanAmount)} type='number' min='0' step='1000' onChange={this.updateLoanAmountInput} /></td>
          </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default LoanAmountDetails;
