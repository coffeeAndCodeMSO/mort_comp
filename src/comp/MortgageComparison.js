import React from 'react';
import { observer, inject } from 'mobx-react';
import LoanAmountDetails from './LoanAmountDetails.js';
import FixedExpenses from './FixedExpenses.js';
import LoanDetails from './LoanDetails.js';
import ComparisonResults from './ComparisonResults.js';


@inject('rootStore')
@observer
class MortgageComparison extends React.Component {
  render() {
    const store = this.props.rootStore.mortgageComparisonStore;
    return (
      <div>
        <LoanAmountDetails updateCommonMortgageInput={store.updateCommonMortgageInput} loanAmount={store.loanAmount} />
        <FixedExpenses     updateCommonMortgageInput={store.updateCommonMortgageInput} insurance={store.insurance} propertyTax={store.propertyTax} />
        <ComparisonResults mort15={store.mort15} mort30={store.mort30}/>
        <div className='sideBySideColumn'>
          <LoanDetails id='mort15' mortgage={store.mort15} updateMortgageIntRate={store.updateMortgageIntRate} />
        </div>
        <div className='sideBySideColumn'>
          <LoanDetails id='mort30' mortgage={store.mort30} updateMortgageIntRate={store.updateMortgageIntRate} />
        </div>
      </div>
    )
  }
}

export default MortgageComparison;
