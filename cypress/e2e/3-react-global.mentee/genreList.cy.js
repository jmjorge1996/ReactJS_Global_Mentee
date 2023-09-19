describe('GenreList Component', () => {
  it('should find and verify the presence of genre items', () => {
    cy.visit('http://localhost:3000');
    cy.get('.genre-item__container').should('exist');
    cy.get('.genre-item__container').should('have.length.greaterThan', 0);
    cy.get('.genre-item__container').contains('ALL').should('exist');
  });
});
