
// return a value suitable for printing as money
export function moneyize(value) {
  return Number(value).toFixed(2);
}

export function printableAnnualInterestRate(value) {
  return (value * 100).toFixed(2)
}

export function printableMonthlyInterestRate(value) {
  return (value * 100).toFixed(4)
}

export function printableSingleDecimalPercent(value) {
  return (value * 100).toFixed(1)
}
