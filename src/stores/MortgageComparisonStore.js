import { observable, computed, action } from 'mobx';
import Mortgage from '../lib/mortgage.js';

export default class MortgageComparisonStore {
  constructor(rootstore) {
  this.rootStore = rootstore;
}

  @observable mort15 = new Mortgage(400000, 0.03250, 15, 350.00);
  @observable mort30 = new Mortgage(400000, 0.03930, 30, 350.00);

  @observable loanAmount = 400000
  @observable propertyTax = 3000
  @observable insurance = 1200

  @observable intRates = {
    mort15: 0.03250,
    mort30: 0.03930
  }

  @computed get totalExpenses() {
      return (Number(this.propertyTax) + Number(this.insurance));
    }

  @computed get totalMonthlyExpenses() {
      return (this.totalExpenses / 12.0);
    }

    // anytime a field that is a common input to the mortgage changes, this updates
    // common inputs are: loanAmount, fixedExpense Amount
    @action updateCommonMortgageInput = (fieldId, newValue) => {
      this[fieldId] = newValue;
      this.recalcMortgages();
    }

    @action recalcMortgages = () => {
      this.mort15 = new Mortgage(this.loanAmount, this.intRates.mort15, 15, this.totalMonthlyExpenses);
      this.mort30 = new Mortgage(this.loanAmount, this.intRates.mort30, 30, this.totalMonthlyExpenses);
    }

    @action updateMortgageIntRate = (mortId, newIntRate) => {
      this.intRates[mortId] = newIntRate/100;
      this.recalcMortgages();
    }
}


// const MortgageComparisonStore = new MortgageComparisonStoreSuper();
// export default MortgageComparisonStore;
