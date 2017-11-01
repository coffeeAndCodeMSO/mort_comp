/*
Mortgage is a class that handles all the math involved in a Mortgage
*/

import { moneyize } from './formatting_helpers'

export default class Mortgage {

  constructor(loanAmount, interestRate, years, fixedMonthlyExpenses) {
    this._loanAmount = Number(loanAmount);
    this._interestRate = Number(interestRate);
    this._years = Number(years);
    this._fixedMonthlyExpenses = Number(fixedMonthlyExpenses);
    this.calculate();
  }

  set loanAmount(newLoanAmount) {
    this._loanAmount = Number(newLoanAmount);
    this.calculate();
  }

  set interestRate(newInterestRate) {
    this._interestRate = Number(newInterestRate);
    this.calculate();
  }

  set years(newYears) {
    this._years = Number(newYears);
    this.calculate();
  }

  set fixedMonthlyExpenses(newFixedMonthlyExpenses) {
    this._fixedMonthlyExpenses = Number(newFixedMonthlyExpenses);
    this.calculate();
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

  calculate() {
    var term1 = Math.pow((1.0 + this.monthlyInterestRate), this.months);
    var term2  = ((this.loanAmount * this.monthlyInterestRate * term1) / (term1 - 1.0));
    this._principalAndInterestPayment  = (parseInt(term2*100)) / 100.0;
    this._minimumMonthlyPayment = this._principalAndInterestPayment + this.fixedMonthlyExpenses;
  }

  get principalAndInterestPayment() {
    return this._principalAndInterestPayment;
  }

  get minimumMonthlyPayment() {
    return this._minimumMonthlyPayment;
  }

  get totalLifetimePayments() {
    // this is naive... it assume the loan is payed back at the minimum required rate.
    // this should be improved but for now it does someting useful
    return (this._minimumMonthlyPayment * this.months)
  }
};
