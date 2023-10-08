describe('MovieList Page E2E', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
  
    it('performs a search and selects a movie', () => {
        cy.get('input[name="query"]').type('Inception');
        cy.get('button[type="submit"]').click();
        cy.get('.movie-item__container').should('have.length.gt', 0);
        cy.get('.movie-item__container').first().click();
        cy.get('.movie-detail__main-container').should('be.visible');
    });
  });