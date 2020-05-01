const calculator = require('./calulator');

test('runs calculator with no input', () => {
  expect(calculator()).toBe(0);
});
