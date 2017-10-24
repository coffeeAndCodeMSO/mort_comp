import React from 'react';
import { moneyize } from '../lib/formatting_helpers'

class FixedExpenses extends React.Component {

  totalExpenses = () => {
    return (Number(this.props.propertyTax) + Number(this.props.insurance))
  }

  totalMonthlyExpenses = () => {
    return (this.totalExpenses() / 12.0)
  }

  render() {
    return(
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>
            <tr>
              <td className='column-heading'>Insurance</td>
              <td className='column-data' >$<input id='insurance' className='moneyInput' value={moneyize(this.props.insurance)} type='number' min='0' step='100' onChange={(event) => this.props.updateCommonMortgageInput(event.target.id, event.target.value)} /></td>
            </tr>
            <tr>
              <td className='column-heading'>Property Tax</td>
              <td className='column-data' >$<input id='propertyTax' className='moneyInput' value={moneyize(this.props.propertyTax)} type='number' min='0' step='100' onChange={(event) => this.props.updateCommonMortgageInput(event.target.id, event.target.value)} /></td>
            </tr>
            <tr>
              <td className='column-heading'>Annual Fixed Expenses</td>
              <td className='column-data' >${moneyize(this.totalExpenses())} </td>
              <td className='minor-column-heading' >Monthly</td>
              <td className='minor-data' >${moneyize(this.totalMonthlyExpenses())}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }

}

export default FixedExpenses;
