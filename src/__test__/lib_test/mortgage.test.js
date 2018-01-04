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
    expect(mort.totalLifetimeCost).toBe(990460.8)

    var mort = new Mortgage(500000, 0.0301, 15, 300.31);
    expect(mort.principalAndInterestPayment).toBe(3455.31);
    expect(mort.minimumMonthlyPayment).toBe(3755.62);
    expect(mort.totalLifetimeCost).toBe(676011.59)
  });

  it("should know amortization table with details of all payments", function() {
    var mort = new Mortgage(1000, 0.10, 1, 0); //simple 1 year mortgages
    expect(mort.principalAndInterestPayment).toBe(87.91);
    expect(mort.minimumMonthlyPayment).toBe(87.91);

    var expectedTable = [
      {paymentNum: 1,  paymentAmount: 87.91, interestPaid: 8.33, principalPaid: 79.58, outstandingPrincipal: 920.42},
      {paymentNum: 2,  paymentAmount: 87.91, interestPaid: 7.67, principalPaid: 80.23, outstandingPrincipal: 840.19},
      {paymentNum: 3,  paymentAmount: 87.91, interestPaid: 7.00, principalPaid: 80.91, outstandingPrincipal: 759.28},
      {paymentNum: 4,  paymentAmount: 87.91, interestPaid: 6.32, principalPaid: 81.59, outstandingPrincipal: 677.69},
      {paymentNum: 5,  paymentAmount: 87.91, interestPaid: 5.64, principalPaid: 82.27, outstandingPrincipal: 595.42},
      {paymentNum: 6,  paymentAmount: 87.91, interestPaid: 4.96, principalPaid: 82.95, outstandingPrincipal: 512.46},
      {paymentNum: 7,  paymentAmount: 87.91, interestPaid: 4.27, principalPaid: 83.64, outstandingPrincipal: 428.82},
      {paymentNum: 8,  paymentAmount: 87.91, interestPaid: 3.57, principalPaid: 84.34, outstandingPrincipal: 344.48},
      {paymentNum: 9,  paymentAmount: 87.91, interestPaid: 2.87, principalPaid: 85.04, outstandingPrincipal: 259.44},
      {paymentNum: 10, paymentAmount: 87.91, interestPaid: 2.16, principalPaid: 85.75, outstandingPrincipal: 173.69},
      {paymentNum: 11, paymentAmount: 87.91, interestPaid: 1.44, principalPaid: 86.47, outstandingPrincipal: 87.22},
      {paymentNum: 12, paymentAmount: 87.91, interestPaid: 0.72, principalPaid: 87.19, outstandingPrincipal: 0.03 }
    ]

    expect(mort.amortizationTable).toEqual(expectedTable)
  })

  it("should allow an extra payment per year", function() {
    var mortNormal = new Mortgage(100000, 0.05, 30, 100);
    var mortExtra  = new Mortgage(100000, 0.05, 30, 100, true);
    expect(mortNormal.minimumMonthlyPayment).toBe(636.82);
    expect(mortExtra.minimumMonthlyPayment).toBe(636.82);

    expect(mortNormal.totalLifetimeCost).toBe(229255.20)
    expect(mortExtra.totalLifetimeCost).toBe( 204419.22)

    expect(mortNormal.totalNumberOfPayments).toBe(360)
    expect(mortExtra.totalNumberOfPayments).toBe(297)
  })

});
