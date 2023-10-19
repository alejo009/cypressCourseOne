describe('Home de www.freerangetesters.com',()=>{
    beforeEach(()=>{
        cy.visit('https://www.freerangetesters.com/')

    })

    it('should have a title',()=>{
        cy.title().should('include','Free Range Testers')
    })

    it('hay 9 cursos con el boton para ver curso',()=>{
        cy.get('[data-testid="header-container"] > .sc-hjsqBZ > .sc-csCMJt > :nth-child(1) > .sc-kFuwaP').click()
        cy.get('.sc-fLQRDB > .sc-bALXmG > .sc-gjTGSA > .sc-eACynP > .sc-dnwKUv').should('have.length',9)

    })

    it('El campoo nnombre del formulario, posee una clase x',()=>{
        cy.get('#email-form-name').should('have.class','sc-gUrTyy dVgJFU')

    })

    it('hay un link llamado blog en la barra de navegacion',()=>{
        cy.get('[data-testid="header-container"] > .sc-hjsqBZ > .sc-csCMJt > :nth-child(3) > .sc-kFuwaP').should('have.text','Blog')
    })

    it('hay un boton  de elige un plan',()=>{
        cy.get('.sc-dlUsjx > .sc-gjTGSA > .sc-eACynP > .sc-dnwKUv').should('exist').and('have.text','Elegir Plan')
        cy.get('.mb-4').should('not.exist')

    })

    it.skip('el elemento está checked',()=>{
        cy.get('').should('be.checked')
    })

    it.skip('el elemento no está checkeado',()=>{
        cy.get('').should('not.be.checked')
    })

    it.skip('el elemento está disabled',()=>{
        cy.get('').should('be.disabled')
    })

    it.skip('el elemento no está disabled',()=>{
        cy.get('').should('not.be.disabled')
    })

    it.skip('el elemeneto deberia estar enabled',()=>{
        cy.get().should('be.enalbed')
    })
    it.skip('el elemento no deberia estar habilitado',()=>{
        cy.get().should('not.be.enabled')
    })
})