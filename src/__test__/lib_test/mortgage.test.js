import Mortgage from '../../lib/mortgage.js'

describe("Mortgage class", function() {

  it("Should allow setting/getting basic loan parameters", function() {
    var mort = new Mortgage(100000, 0.0378, 15, 100);

    expect(mort.loanAmount).toBe(100000);
    expect(mort.interestRate).toBe(0.0378);
    expect(mort.monthlyInterestRate).toBe(0.00315);
    expect(mort.years).toBe(15);
    expect(mort.months).toBe(180);

    mort.loanAmount = 123765.98;
    mort.interestRate = 0.041245
    mort.years = 30;
    expect(mort.loanAmount).toBe(123765.98);
    expect(mort.interestRate).toBe(0.041245);
    expect(mort.monthlyInterestRate).toBe(0.0034370833333333332);
    expect(mort.years).toBe(30);
    expect(mort.months).toBe(360);
  });

  it("should know the minimum monthly payment amount", function() {
    var mort = new Mortgage(500000, 0.0456, 30, 200);

    expect(mort.principalAndInterestPayment).toBe(2551.28);
    expect(mort.minimumMonthlyPayment).toBe(2751.28);

    var mort = new Mortgage(500000, 0.0301, 15, 300.31);
    expect(mort.principalAndInterestPayment).toBe(3455.31);
    expect(mort.minimumMonthlyPayment).toBe(3755.62);

  });

});
