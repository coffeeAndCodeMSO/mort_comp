import React from 'react';
import { moneyize, printableSingleDecimalPercent } from '../lib/formatting_helpers'

import DisplayCell from './DisplayCell.js';

const ComparisonResults = ({ mortA, mortB }) => {

  let   paymentDiff,
        paymentDiffPct,
        totalPaymentDiff,
        totalPaymentDiffPct,
        paymentDiffStr,
        totalPaymentDiffStr,
        timeDiffStr;

  paymentDiff = () => mortA.minimumMonthlyPayment - mortB.minimumMonthlyPayment;

  paymentDiffPct = () => mortA.minimumMonthlyPayment / mortB.minimumMonthlyPayment;

  totalPaymentDiff = () => mortA.totalLifetimePayments - mortB.totalLifetimePayments;

  totalPaymentDiffPct = () => 1 - (mortA.totalLifetimePayments / mortB.totalLifetimePayments);

  paymentDiffStr = () => {
    const moreOrLess =  mortA.minimumMonthlyPayment > mortB.minimumMonthlyPayment ? "more" : "less";
    return (`Mortgage A is $ ${moneyize(Math.abs(paymentDiff()))} ${moreOrLess} per month (%${printableSingleDecimalPercent(paymentDiffPct())})`);
  };

  totalPaymentDiffStr = () => {
    const moreOrLess =  mortA.totalLifetimePayments > mortB.totalLifetimePayments ? "more" : "less";
    return (`Mortgage A will be $ ${moneyize(Math.abs(totalPaymentDiff()))} ${moreOrLess} (%${printableSingleDecimalPercent(totalPaymentDiffPct())}) over the life of the loan`);
  };

timeDiffStr = () => {
  const yearsDiff = (mortA.months - mortB.months) / 12.0;
  return `Mortgage A  will be payed off ${Math.abs(yearsDiff.toFixed(1))} years ${yearsDiff < 0 ? 'sooner' : 'later'}`;
};

  return (
    <div className='conclusionSection'>
        <div className="section-header">Summary</div>
        <DisplayCell
          label="Payment"
          value={paymentDiffStr()}
          displayClass='text-display'
          />
        <DisplayCell
          label="Total loan lifetime payments"
          value={totalPaymentDiffStr()}
          displayClass='text-display'
          />
        <DisplayCell
          label="Difference in time to payoff loan"
          value={timeDiffStr()}
          displayClass='text-display'
          />
    </div>
  );
}

export default ComparisonResults;
