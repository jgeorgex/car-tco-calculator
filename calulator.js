function calculator(maintenance, tax, insurance, value, futureValue, fuel) {
  const annualDepreciation = value - futureValue;
  return (maintenance + tax + insurance + fuel + annualDepreciation) / 12;
}
module.exports = calculator;
