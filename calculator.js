document.getElementById('form').addEventListener('submit', calculator);

function calculator(e) {
  const maintenance = parseInt(document.getElementById('maintenance').value);
  const tax = parseInt(document.getElementById('tax').value);
  const insurance = parseInt(document.getElementById('insurance').value);
  const todaysValue = parseInt(document.getElementById('todays-value').value);
  const futureValue = parseInt(document.getElementById('future-value').value);
  const fuel = parseInt(document.getElementById('fuel').value);
  const tco = maintenance + tax;

  console.log(maintenance);
  console.log(tax);
  console.log(insurance);
  console.log(todaysValue);
  console.log(futureValue);
  console.log(fuel);
  console.log(tco);

  // function runCalculation() {

  //   document.getElementById('result').innerHTML = tco;
  // }
  // runCalculation();
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

// module.exports = calculator;
