const calculator = require('./calulator');

test('runs calculator with no input', () => {
  expect(calculator(12, 0, 0, 0, 0, 0, 0)).toBe(1);
});
