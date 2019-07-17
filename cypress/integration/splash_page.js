describe('Splash Page', function() {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  }) 

  it('visits the splash page', function() {
    cy.visit('http://localhost:3000')
  })

  it('verifies github link', function() {
    cy.get('#github-link')
      .should('have.prop', 'href')
      .and('equal', 'https://github.com/ldgarber')
  }) 

  it('verifies linkedin link', function() {
    cy.get('#linkedin-link')
      .should('have.prop', 'href')
      .and('equal', 'https://linkedin.com/in/leahdgarber')
  }) 

  it('contains welcome text', function() {
    cy.contains('WELCOME')
  }); 

  it('clicks through to projects', function() {
    cy.contains('PROJECTS').click()

    cy.url().should('include', '/code')
  })

})


