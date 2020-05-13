describe('Homepage tests', () => {
  it('Visits homepage', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.contains(`Car Monthly`);
  });
});
