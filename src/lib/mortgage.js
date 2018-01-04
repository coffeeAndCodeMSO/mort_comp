/*
Mortgage is a class that handles all the math involved in a Mortgage
*/

import { moneyize } from './formatting_helpers'

export default class Mortgage {

  constructor(loanAmount, interestRate, years, fixedMonthlyExpenses, makeExtraPayment=false) {
    this._loanAmount = Number(loanAmount);
    this._interestRate = Number(interestRate);
    this._years = Number(years);
    this._fixedMonthlyExpenses = Number(fixedMonthlyExpenses);
    this._makeExtraPayment = makeExtraPayment;
    this.calculatePayments();
    this.calculateAmortizationTable();
  }

  set loanAmount(newLoanAmount) {
    this._loanAmount = Number(newLoanAmount);
    this.calculatePayments();
  }

  set interestRate(newInterestRate) {
    this._interestRate = Number(newInterestRate);
    this.calculatePayments();
  }

  set years(newYears) {
    this._years = Number(newYears);
    this.calculatePayments();
  }

  set fixedMonthlyExpenses(newFixedMonthlyExpenses) {
    this._fixedMonthlyExpenses = Number(newFixedMonthlyExpenses);
    this.calculatePayments();
  }

  get loanAmount() {
    return this._loanAmount;
  }

  get interestRate() {
    return this._interestRate;
  }

  get monthlyInterestRate() {
    return(this._interestRate / 12.0);
  }

  get years() {
    return this._years;
  }

  get months() {
    return(this.years * 12);
  }

  get fixedMonthlyExpenses() {
    return this._fixedMonthlyExpenses;
  }

  calculatePayments() {
    var term1 = Math.pow((1.0 + this.monthlyInterestRate), this.months);
    var term2  = ((this.loanAmount * this.monthlyInterestRate * term1) / (term1 - 1.0));
    this._principalAndInterestPayment  = (parseInt(term2*100)) / 100.0;
    this._minimumMonthlyPayment = this._principalAndInterestPayment + this.fixedMonthlyExpenses;
  }

  calculateAmortizationTable() {
    var paymentTable = [];
    var outstandingPrincipal = this.loanAmount;
    for(var paymentNum = 1; paymentNum <= this.months; paymentNum++) {
      var paymentObj = { paymentNum: paymentNum }
      if (outstandingPrincipal <= 0) {
        paymentObj.paymentAmount = 0;
        paymentObj.interestPaid = 0;
        paymentObj.principalPaid = 0;
        paymentObj.outstandingPrincipal = 0;
      } else if(this._makeExtraPayment && (paymentNum % 12 == 0)) {
        paymentObj.paymentAmount = this._minimumMonthlyPayment * 2;
        paymentObj.interestPaid = parseInt(this.monthlyInterestRate * outstandingPrincipal * 100) / 100.0;
        paymentObj.principalPaid = parseInt((paymentObj.paymentAmount - paymentObj.interestPaid - this.fixedMonthlyExpenses) * 100) / 100.0;
        if (paymentObj.principalPaid > outstandingPrincipal) {
          paymentObj.paymentAmount -= paymentObj.principalPaid - outstandingPrincipal;
          paymentObj.principalPaid = parseInt((paymentObj.paymentAmount - paymentObj.interestPaid - this.fixedMonthlyExpenses) * 100) / 100.0;
        }
        paymentObj.outstandingPrincipal = parseInt((outstandingPrincipal - paymentObj.principalPaid) * 100) / 100.0;
      } else {
        paymentObj.paymentAmount = this._minimumMonthlyPayment;
        paymentObj.interestPaid = parseInt(this.monthlyInterestRate * outstandingPrincipal * 100) / 100.0;
        paymentObj.principalPaid = parseInt((paymentObj.paymentAmount - paymentObj.interestPaid - this.fixedMonthlyExpenses) * 100) / 100.0;
        paymentObj.outstandingPrincipal = parseInt((outstandingPrincipal - paymentObj.principalPaid) * 100) / 100.0;
      }
      // all done calculating this payment, stick in the table
      paymentTable.push(paymentObj);
      // keep the principal paid handy for next time
      outstandingPrincipal = paymentObj.outstandingPrincipal
    }
    this._ammortizationTable = paymentTable;
  }

  get principalAndInterestPayment() {
    return this._principalAndInterestPayment;
  }

  get minimumMonthlyPayment() {
    return this._minimumMonthlyPayment;
  }

  get totalLifetimeCost() {
    var totalCost = 0.0
    this._ammortizationTable.forEach(function(payment) {
      totalCost += payment.paymentAmount;
    })
    return parseInt(totalCost * 100) / 100.0;
  }

  get totalNumberOfPayments() {
    var totalNumPayments = 0;
    this._ammortizationTable.forEach(function(payment) {
      if (payment.paymentAmount > 0) {
        totalNumPayments += 1
      }
    })
    return totalNumPayments;
  }

  get amortizationTable() {
    return this._ammortizationTable;
  }
};
