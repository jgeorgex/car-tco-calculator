const calculator = require('./calulator');

test('calulates monthly cost with maintainance input', () => {
  expect(calculator(12, 0, 0, 0, 0, 0)).toBe(1);
});

test('calulates monthly cost with all input except car values', () => {
  expect(calculator(12, 12, 12, 0, 0, 12)).toBe(4);
});

test('calulates monthly cost with all inputs car has 0 deprecation', () => {
  expect(calculator(12, 12, 12, 100, 100, 12)).toBe(4);
});

test('calulates monthly cost with all inputs car has 1 deprecation', () => {
  expect(calculator(12, 12, 12, 100, 88, 12)).toBe(5);
});
