import React from 'react';

class FixedExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: {
        propertyTax: 3000,
        insurance: 1500
      },
      total: 4500
    }
    this.updateExpense = this.updateExpense.bind(this);
  }

  setTotal() {
    var total = Object.values(this.state.expenses).reduce((a,b) => Number(a)+Number(b));
    this.setState({total: total});
  }

  updateExpense(event) {
    var fieldId = event.target.id;
    var expenses = this.state.expenses;
    expenses[fieldId] = event.target.value;
    this.setState({expenses: expenses});
    // console.log(fieldId);
    // console.log(event.target.value);

    this.setTotal();
  }

  render() {
    return(
      <div id='FixedExpenses'>
        <table>
          <tbody>
            <tr>
              <td className='column-heading'>Insurance</td>
              <td>$<input id='insurance' value={this.state.expenses.insurance} type='number' min='0' step='100' onChange={this.updateExpense} /></td>
            </tr>
            <tr>
              <td className='column-heading'>Property Tax</td>
              <td>$<input id='propertyTax' value={this.state.expenses.propertyTax} type='number' min='0' step='100' onChange={this.updateExpense} /></td>
            </tr>
            <tr>
              <td className='column-heading'>Total Fixed Expenses</td>
              <td>$ {this.state.total} </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default FixedExpenses;
