describe('Login test cases', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        //added
        cy.visit('https://www.fastjobs.ph/site/login')
      })
    it('Login with correct credentials', () => {
      // added comment
        //Normal Login process using valid credentials
        
        cy.get(':nth-child(5) > .form-control').type('ace.simon.g@gmail.com')
        cy.get('#password').type('91366Fs8')
        cy.get('.form-group > .btn').click()
    })

    it('Login with incorrect credentials', () => {
        // comment add
        //Normal Login process using valid credentials
        cy.get(':nth-child(5) > .form-control').type('invalidemail@mail.com')
        cy.get('#password').type('invalidpassword123')
        cy.get('.form-group > .btn').click()
    
        //Validates alert message of incorrect credentials entered
        cy.get('form[action="/site/login"] .alert').contains('Invalid email and/or password.').should('exist')
      })
})