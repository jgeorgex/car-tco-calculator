document.getElementById('form').addEventListener('submit', calculator);

function calculator(e) {
  const maintenance = document.getElementById('maintenance').value;
  const tax = document.getElementById('tax').value;
  const insurance = document.getElementById('insurance').value;
  const todaysValue = document.getElementById('todays-value').value;
  const futureValue = document.getElementById('future-value').value;
  const fuel = document.getElementById('fuel').value;

  console.log(maintenance);
  console.log(tax);
  console.log(insurance);
  console.log(todaysValue);
  console.log(futureValue);
  console.log(fuel);

  function runCalculation() {
    const tco = Math.round(
      (maintenance + tax + insurance + fuel + value - futureValue) / 12
    );
    console.log(tco);
    document.getElementById('result').innerHTML = tco;
  }
  runCalculation();
  e.preventDefault();
}

// function calculator(maintenance, tax, insurance, value, futureValue, fuel) {
//   return Math.round(
//     (maintenance + tax + insurance + fuel + value - futureValue) / 12
//   );
// }

// const form = document.forms[0];
// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const value = form.querySelector('input[id="maintenance"]'.value);
//   console.log(value);
// });

module.exports = calculator;
