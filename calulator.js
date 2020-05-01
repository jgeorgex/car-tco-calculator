function calculator(maintenance, tax, insurance, value, futureValue, fuel) {
  const annualDepreciation = value - futureValue;
  var monthlyCostCalculation =
    (maintenance + tax + insurance + fuel + annualDepreciation) / 12;
  var monthlyCostCalculation = Math.round(monthlyCostCalculation);
  return monthlyCostCalculation;
}
module.exports = calculator;
