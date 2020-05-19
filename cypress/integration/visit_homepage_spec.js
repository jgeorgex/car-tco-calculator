describe('Homepage tests', () => {
  it('Visits homepage', () => {
    cy.visit('http://localhost:8080/');
    cy.contains(`Car Monthly`);
  });
});
