import React from 'react';
import { moneyize, printableSingleDecimalPercent } from '../lib/formatting_helpers'

import InputCell from './InputCell.js';

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
      default:
      this.setState({loanAmount: newValue, downAmount: '', downPercent: '', houseCost: ''});
        break;
    }
    this.setState(newState);
    this.props.updateCommonMortgageInput("loanAmount", this.state.loanAmount)
  }

  render() {
    const handleChange = this.updateLoanAmountInput;

    return (
      <section className='relatedSectionOfNumbers'>
        <InputCell id="houseCost" label="Purchase price"
          value={this.state.houseCost}
          onChange={handleChange}
          step='1000'
        />
        <InputCell id="downAmount" label="Down payment amount"
          value={this.state.downAmount}
          onChange={handleChange}
          step='1000'
        />
        <InputCell id="downPercent" label="Down payment percent"
          value={printableSingleDecimalPercent(this.state.downPercent)}
          onChange={handleChange}
          step='1'
          unitLabel='%'
        />
        <InputCell id="loanAmount" label="Loan Amount"
          value={moneyize(this.state.loanAmount)}
          onChange={handleChange}
          step='1000'
        />
      </section>
    );
  }
}

export default LoanAmountDetails;
