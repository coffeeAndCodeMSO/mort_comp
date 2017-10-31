

// import { Mortgage } from '../../src/lib/mortgage.js'

describe("Mortgage class", function() {

  it("Should allow setting/getting basic loan parameters", function() {
    var mort = new Mortgage(100000, 0.0378, 15, 100);

    expect(mort.loanAmount).to.equal(100000);
    expect(mort.interestRate).to.equal(0.0378);
    expect(mort.monthlyInterestRate).to.equal(0.00315);
    expect(mort.years).to.equal(15);
    expect(mort.months).to.equal(180);

    mort.loanAmount = 123765.98;
    mort.interestRate = 0.041245
    mort.years = 30;
    expect(mort.loanAmount).to.equal(123765.98);
    expect(mort.interestRate).to.equal(0.041245);
    expect(mort.monthlyInterestRate).to.equal(0.0034370833333333332);
    expect(mort.years).to.equal(30);
    expect(mort.months).to.equal(360);
  });

  it("should know the minimum monthly payment amount", function() {
    var mort = new Mortgage(500000, 0.0456, 30, 200);

    expect(mort.principalAndInterestPayment).to.equal(2551.28);
    expect(mort.minimumMonthlyPayment).to.equal(2751.28);

    var mort = new Mortgage(500000, 0.0301, 15, 300.31);
    expect(mort.principalAndInterestPayment).to.equal(3455.31);
    expect(mort.minimumMonthlyPayment).to.equal(3755.62);

  });

});
