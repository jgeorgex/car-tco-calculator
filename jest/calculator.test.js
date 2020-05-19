const calculator = require('../scripts/calculator');

test('calulates monthly cost with maintainance input', () => {
  expect(calculator(12, 0, 0, 0, 0, 0)).toBe(1);
});

test('calulates monthly cost with all input except car values', () => {
  expect(calculator(12, 12, 12, 0, 0, 12)).toBe(4);
});

test('calulates monthly cost with all inputs car has 0 deprecation', () => {
  expect(calculator(12, 12, 12, 100, 100, 12)).toBe(4);
});

test('calulates monthly cost with all inputs car has -12 deprecation', () => {
  expect(calculator(12, 12, 12, 100, 88, 12)).toBe(5);
});

test('calulates monthly cost with all inputs car has +12 deprecation', () => {
  expect(calculator(12, 12, 12, 100, 112, 12)).toBe(3);
});

test('calulates monthly cost with all inputs car has -5000 deprecation', () => {
  expect(calculator(1500, 350, 700, 50000, 45000, 1000)).toBe(713);
});
