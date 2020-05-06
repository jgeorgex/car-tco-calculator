document.getElementById('form').addEventListener('submit', calculator);

function calculator(e) {
  const maintenance = parseInt(document.getElementById('maintenance').value);
  const tax = parseInt(document.getElementById('tax').value);
  const insurance = parseInt(document.getElementById('insurance').value);
  const todaysValue = parseInt(document.getElementById('todays-value').value);
  const futureValue = parseInt(document.getElementById('future-value').value);
  const fuel = parseInt(document.getElementById('fuel').value);
  const tco =
    (maintenance + tax + insurance + todaysValue - futureValue + fuel) / 12;
  console.log(tco);
  e.preventDefault();
}

// module.exports = calculator;
