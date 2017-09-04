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
  }

  setTotal = () => {
    var total = Object.values(this.state.expenses).reduce((a,b) => Number(a)+Number(b));
    var monthlyTotal = (Math.round((total / 12.0) * 100) / 100);
    this.setState({total: total, monthlyTotal: monthlyTotal});
    this.props.fixedMonthlyExpensesChangedCallback(monthlyTotal);
  }

  updateExpense = (event) => {
    var fieldId = event.target.id;
    var expenses = this.state.expenses;
    expenses[fieldId] = event.target.value;
    this.setState({expenses: expenses});
    this.setTotal();

  }

  render() {
    return(
      <section className='relatedSectionOfNumbers'>
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
      </section>
    )
  }

}

export default FixedExpenses;
