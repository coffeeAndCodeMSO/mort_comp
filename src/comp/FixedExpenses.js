import React from 'react';

class FixedExpenses extends React.Component {

  render() {
    return(
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>
            <tr>
              <td className='column-heading'>Insurance</td>
              <td className='column-data' >$<input id='insurance' className='moneyInput' value={this.props.expenses.insurance.toFixed(2)} type='number' min='0' step='100' onChange={(event) => this.props.updateExpense(event.target.id, event.target.value)} /></td>
            </tr>
            <tr>
              <td className='column-heading'>Property Tax</td>
              <td className='column-data' >$<input id='propertyTax' className='moneyInput' value={this.props.expenses.propertyTax.toFixed(2)} type='number' min='0' step='100' onChange={(event) => this.props.updateExpense(event.target.id, event.target.value)} /></td>
            </tr>
            <tr>
              <td className='column-heading'>Annual Fixed Expenses</td>
              <td className='column-data' >${this.props.totalExpenses.toFixed(2)} </td>
              <td className='minor-column-heading' >Monthly</td>
              <td className='minor-data' >${this.props.totalMonthlyExpenses.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }

}

export default FixedExpenses;
