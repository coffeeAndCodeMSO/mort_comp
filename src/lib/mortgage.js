/*
Mortgage is a class that handles all the math involved in a Mortgage
*/

import { moneyize } from './formatting_helpers'

export default class Mortgage {

  constructor(loanAmount, interestRate, years, fixedMonthlyExpenses) {
    this.loanAmount = moneyize(loanAmount);
    this.interestRate = interestRate;
    this.years = years;
    this.fixedMonthlyExpenses = moneyize(fixedMonthlyExpenses);
    this.calculate();
  }

  set loanAmount(newLoanAmount) {
    this._loanAmount = moneyize(newLoanAmount);
    this.calculate();
  }

  set interestRate(newInterestRate) {
    this._interestRate = newInterestRate;
    this.calculate();
  }

  set years(newYears) {
    this._years = newYears;
    this.calculate();
  }

  set fixedMonthlyExpenses(newFixedMonthlyExpenses) {
    this._fixedMonthlyExpenses = moneyize(newFixedMonthlyExpenses);
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
    var payment = ((this.loanAmount * this.monthlyInterestRate * term1) / (term1 - 1.0));
    this._principalAndInterestPayment = moneyize(payment);

    this._minimumMonthlyPayment = this.principalAndInterestPayment + this.fixedMonthlyExpenses;
  }

  get principalAndInterestPayment() {
    return this._principalAndInterestPayment;
  }

  get minimumMonthlyPayment() {
    return this._minimumMonthlyPayment;
  }
};
