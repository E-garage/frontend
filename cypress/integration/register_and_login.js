describe('registration', () => {
    it('user can register and log in', () => {
        // rejestracja
        cy.visit('localhost:3000/');
        cy.findByRole('link', {  name: /register/i}).click()
        cy.findByRole('textbox', {  name: /name/i}).type('Kacper')
        cy.findByRole('textbox', {  name: /email/i}).type('kacper123123123@email.com')
        cy.get('input[id*="register-password"]').type('kacper123123123')
        cy.findByLabelText(/confirm password/i).type('kacper123123123')
        cy.findByRole('button', {  name: /register/i}).click()
        cy.findByRole('link', {  name: /continue/i}).click()

        // logowanie
        
        cy.findByRole('textbox', {  name: /email/i}).type('kacper123123123@email.com')
        cy.findByLabelText(/password/i).type('kacper123123123')
        cy.findByRole('checkbox', {  name: /remember me/i}).check()
        cy.findByRole('button', {  name: /login/i}).click()

        

    })

})