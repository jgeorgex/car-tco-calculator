describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

describe('Homepage tests', () => {
  it('Visits homepage', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });
});
