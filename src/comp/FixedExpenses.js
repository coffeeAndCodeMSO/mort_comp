import React from 'react';
import { moneyize } from '../lib/formatting_helpers'

import InputCell from './InputCell.js';
import DisplayCell from './DisplayCell.js';

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
        <div className="section-header">Ownership costs</div>
        <InputCell id="insurance" label="Insurance, annual"
          value={this.props.insurance}
          onChange={handleChange}
        />
        <InputCell id="propertyTax" label="Property tax, annual"
          value={this.props.propertyTax}
          onChange={handleChange}
        />

        <DisplayCell label="Annual expenses"
          value={this.totalExpenses()}
          unitLabel='$'
          formatFunction={moneyize}
        />
        <DisplayCell label="Monthly expenses"
          value={this.totalMonthlyExpenses()}
          unitLabel='$'
          formatFunction={moneyize}
        />
      </section>
    );
  }

}

export default FixedExpenses;
