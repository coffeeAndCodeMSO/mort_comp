import React from 'react';

class FixedExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: {
        propertyTax: 3000,
        insurance: 1000
      },
      total: 4000,
      monthlyTotal: 333.33
    }
  }

  componentDidMount = () => {
    this.props.fixedMonthlyExpensesChangedCallback(this.state.monthlyTotal);
  }

  setStateAndCallback = (state) => {
    this.setState(state);
    this.props.fixedMonthlyExpensesChangedCallback(state.monthlyTotal);
  }

  updateExpense = (event) => {
    var fieldId = event.target.id;
    var expenses = this.state.expenses;
    expenses[fieldId] = Number(Number(event.target.value).toFixed(2));
    var total = Number((Object.values(expenses).reduce((a,b) => Number(a)+Number(b))).toFixed(2));
    var monthlyTotal = Number((total / 12.0).toFixed(2));
    this.setStateAndCallback({expenses: expenses, total: total, monthlyTotal: monthlyTotal});
  }

  render() {
    return(
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>
            <tr>
              <td className='column-heading'>Insurance</td>
              <td className='column-data' >$<input id='insurance' className='moneyInput' value={this.state.expenses.insurance.toFixed(2)} type='number' min='0' step='100' onChange={this.updateExpense} /></td>
            </tr>
            <tr>
              <td className='column-heading'>Property Tax</td>
              <td className='column-data' >$<input id='propertyTax' className='moneyInput' value={this.state.expenses.propertyTax.toFixed(2)} type='number' min='0' step='100' onChange={this.updateExpense} /></td>
            </tr>
            <tr>
              <td className='column-heading'>Annual Fixed Expenses</td>
              <td className='column-data' >${this.state.total.toFixed(2)} </td>
              <td className='minor-column-heading' >Monthly</td>
              <td className='minor-data' >${this.state.monthlyTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }

}

export default FixedExpenses;
