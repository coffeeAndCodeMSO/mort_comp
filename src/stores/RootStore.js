import MortgageComparisonStore from './MortgageComparisonStore.js';
import LoanAmountDetailsStore from './LoanAmountDetailsStore.js';

// class instantiations are lowercased
class RootStore {
  constructor() {
  this.mortgageComparisonStore = new MortgageComparisonStore(this)
  this.loanAmountDetailsStore = new LoanAmountDetailsStore(this)
  }
}

const rootStore = new RootStore();
export default rootStore;
