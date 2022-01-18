describe('car management', () => {
    it('user can add and share a car', () => {

        cy.visit('localhost:3000/');
       // logowanie
        
        cy.findByRole('textbox', {  name: /email/i}).type('kacper123123456@email.com')
        cy.findByLabelText(/password/i).type('kacper123123456')
        cy.findByRole('checkbox', {  name: /remember me/i}).check()
        cy.findByRole('button', {  name: /login/i}).click()

        // kliknij dodaj samochód
        cy.findByRole('button', {  name: /add a new car/i}).click()
        cy.findByRole('button', {  name: /upload image/i}).click()
        cy.findByRole('textbox', {  name: /car brand/i}).type('Audi R8')
        cy.findByRole('textbox', {  name: /description/i}).type('Fast and furious')
        cy.findByRole('button', { name: /add/i }).click()


        

    })

})