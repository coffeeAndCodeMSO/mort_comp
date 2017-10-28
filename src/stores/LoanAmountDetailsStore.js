import { observable, action } from 'mobx';

export default class LoanAmountDetailsStore {
  constructor(rootstore) {
   this.rootStore = rootstore;
 }

  @observable houseCost = 500000
  @observable downAmount = 100000
  @observable downPercent = 0.20

  @action updateLoanAmountInput = (event) => {
    const siblingStore = this.rootStore.mortgageComparisonStore;
    let keys;
    var newValue = Number(event.target.value)
    var newState = {}

    switch(event.target.id) {
      case "houseCost":
        newState["houseCost"] = Math.round(newValue)
        newState["loanAmount"] = Math.round(newState["houseCost"] * (1.0 - (this.downPercent / 100.0)));
        newState["downAmount"] = Math.round(newState["houseCost"] - newState["loanAmount"]);
        break;
      case "downPercent":
        newState["downPercent"] = Number(newValue)/100;
        newState["loanAmount"] = Math.round(this.houseCost * (1.0 - (newState["downPercent"])));
        newState["downAmount"] = Math.round(this.houseCost - newState["loanAmount"]);
        break;

        // incrementing this breaks the downPercent calculation (multiplies by an additional 100)
      case "downAmount":
        newState["downAmount"]  = Math.round(newValue)
        newState["downPercent"] = ((newState["downAmount"] / this.houseCost) * 100);
        newState["loanAmount"] = Math.round(this.houseCost - newState["downAmount"]);
        break;
        // this maintains the original logic, but results in any modification
        // to loanAmount clearing the sibling fields. Issue submitted.
      case "loanAmount":
        siblingStore.loanAmount = Math.round(newValue);
        this.downAmount = '';
        this.downPercent = '';
        this.houseCost = '';
        break;
      default:
        console.error('event.target.id not defined');
    }

    keys = Object.keys(newState);
    // loop through keys in newState & assign variables within the proper store
    keys.forEach(key => {
      if (key === "loanAmount") {
        siblingStore[key] = newState[key];
      } else {
        this[key] = newState[key]
      }
    }, this);

    siblingStore.updateCommonMortgageInput("loanAmount", siblingStore.loanAmount)
  }
}
