document.getElementById('form').addEventListener('submit', runCalculator);

function runCalculator(e) {
  e.preventDefault();
  const maintenance = parseInt(document.getElementById('maintenance').value);
  const tax = parseInt(document.getElementById('tax').value);
  const insurance = parseInt(document.getElementById('insurance').value);
  const value = parseInt(document.getElementById('todays-value').value);
  const futureValue = parseInt(document.getElementById('future-value').value);
  const fuel = parseInt(document.getElementById('fuel').value);
  const result = calculator(
    maintenance,
    tax,
    insurance,
    value,
    futureValue,
    fuel
  );
  document.getElementById('result').innerHTML = result;
}
