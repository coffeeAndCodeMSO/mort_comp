import React from 'react';
import { moneyize } from '../lib/formatting_helpers'

import InputCell from './InputCell.js';

class FixedExpenses extends React.Component {

  totalExpenses = () => {
    return (Number(this.props.propertyTax) + Number(this.props.insurance))
  }

  totalMonthlyExpenses = () => {
    return (this.totalExpenses() / 12.0)
  }

  render() {
    const handleChange = (event) => this.props.updateCommonMortgageInput(event.target.id, event.target.value);

    return(
      <section className='relatedSectionOfNumbers'>
        <InputCell id="insurance" label="Insurance"
          value={this.props.insurance}
          onChange={handleChange}
        />
        <InputCell id="propertyTax" label="Property Tax"
          value={this.props.propertyTax}
          onChange={handleChange}
        />

        <div className="display-group">
          <div className="display-label">Annual expenses</div>
          <div className="money-display">
            ${moneyize(this.totalExpenses())}
          </div>
        </div>
        <div className="display-group">
          <div className="display-label">Monthly expenses</div>
          <div className="money-display">
            ${moneyize(this.totalMonthlyExpenses())}
          </div>
        </div>
      </section>
    );
  }

}

export default FixedExpenses;
