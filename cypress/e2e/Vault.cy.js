 

describe('Vault Subtracter webapp', () => {

  //hook block to fetch date
  let dateval

  before(function(){
    cy.fixture('example').then(function(data){

      dateval = data;
      return dateval
    })
  })

  it('testcase for vault app', () => {
   
      cy.visit("https://substractor.web.app/")
      cy.get('#select_date').should('be.visible').should('be.enabled').type(dateval.dateForBooking)
      cy.get('#startBy').should('be.visible').should('be.enabled').type(dateval.moveTime)
      cy.get(':nth-child(2) > :nth-child(1) > .bg-white > .p-1').should('be.visible').type(dateval.movingFrom)
      cy.wait(400)
      cy.get(':nth-child(2) > :nth-child(1) > .bg-white > .p-1').type('{downarrow}').click();
      //cy.get(':nth-child(2) > :nth-child(1) > .bg-white > .p-1').select('Quakers Hill NSW, Australia')
      //cy.get(':nth-child(2) > :nth-child(1) > .bg-white > .p-1').type('{enter}')
      cy.get(':nth-child(2) > :nth-child(2) > .bg-white > .p-1').should('be.visible').type(dateval.movingTo)
      cy.wait(800)
      cy.get(':nth-child(2) > :nth-child(2) > .bg-white > .p-1').type('{downarrow}').click();
     
      //cy.get(':nth-child(2) > :nth-child(2) > .bg-white > .p-1').type('{enter}')
      cy.get('.text-base').should('be.enabled').click()
      cy.wait(400)
      cy.get('.text-base').should('be.enabled').click()
      cy.get('#first_name').should('be.visible').should('be.enabled').type(dateval.firstName)
      cy.get('#last_name').should('be.visible').should('be.enabled').type(dateval.lastName)
      cy.get('#phone_number').should('be.visible').should('be.enabled').type(dateval.cellNumber)
      cy.get('#email').should('be.visible').should('be.enabled').type(dateval.emailval)
      cy.get('.flex-auto > .text-base').should('be.enabled').click()
      
      
  
  })
})