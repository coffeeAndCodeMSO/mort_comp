import React from 'react';
import { observer, inject } from 'mobx-react';
import { moneyize, printableSingleDecimalPercent } from '../lib/formatting_helpers'

@inject('rootStore')
@observer
class LoanAmountDetails extends React.Component {
  render() {
    const store = this.props.rootStore.loanAmountDetailsStore;
    const siblingStore = this.props.rootStore.mortgageComparisonStore;
    return (
      <section className='relatedSectionOfNumbers'>
        <table>
          <tbody>
          <tr>
            <td className='column-heading' >House Cost</td>
            <td className='column-data' >$<input id='houseCost' className='moneyInput' value={moneyize(store.houseCost)} type='number' min='0' step='1000' onChange={store.updateLoanAmountInput} /></td>
          </tr>
          <tr>
            <td className='column-heading' >Down Payment Amount</td>
            <td className='column-data' >
                $<input id='downAmount' className='moneyInput' value={moneyize(store.downAmount)} type='number' min='0' step='1000' onChange={store.updateLoanAmountInput} />
            </td>
            <td className='column-data' >
                %<input id='downPercent' className='percentageInput' value={printableSingleDecimalPercent(store.downPercent)} type='number' min='0' step='1' onChange={store.updateLoanAmountInput} />
            </td>
          </tr>
          <tr>
            <td className='column-heading' >Loan Amount</td>
            <td className='column-data' >$<input id='loanAmount' className='moneyInput' value={moneyize(siblingStore.loanAmount)} type='number' min='0' step='1000' onChange={store.updateLoanAmountInput} /></td>
          </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default LoanAmountDetails;
