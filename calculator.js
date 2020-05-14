function calculator(maintenance, tax, insurance, value, futureValue, fuel) {
  return Math.round(
    (maintenance + tax + insurance + fuel + value - futureValue) / 12
  );
}

module.exports = calculator;
