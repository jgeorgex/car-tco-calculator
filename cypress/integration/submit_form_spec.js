describe('Submit form to get result test', () => {
  it('returns a result of 4', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('input[name=maintenance]').type(`12`);
    cy.get('input[name=tax]').type(`12`);
    cy.get('input[name=insurance]').type(`12`);
    cy.get('input[name=todays-value]').type(`12`);
    cy.get('input[name=future-value]').type(`12`);
    cy.get('input[name=fuel]').type(`12`);
    cy.get('button[value=Submit]').click();
    cy.contains(4);
  });
});
