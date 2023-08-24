describe('Booking day scenario', () => {
  it('Login for riyo app', () => {

    cy.visit("https://riyo-dev-au.web.app/login")
    cy.get(':nth-child(1) > .firebaseui-idp-button').should('be.visible').should('be.enabled').click()
    cy.get('.mdl-textfield__input').should('be.visible').should('be.enabled').type('gulativaibhavjcurve+res01@gmail.com')
    cy.get('.firebaseui-id-submit').should('be.visible').should('be.enabled').click()
    cy.get(':nth-child(3) > .mdl-textfield__input').should('be.visible').should('be.enabled').type('iamvaibhav')
    cy.get('.firebaseui-id-submit').should('be.visible').should('be.enabled').click()
    cy.wait(8000)
    //cy.location('search').should('equal','?')
    cy.get('#search_field').should('be.visible').click().type("vaibhav")
    cy.wait(2000)
     cy.get(':nth-child(1) > .flex-1 > .px-4').click()
     cy.wait(200)
  })
  it('Starts the timer', () => {
  cy.get('.py-3 > .flex > .inline-flex').click() // start timer
  cy.wait(200)
  cy.get('.mt-3 > mt-4 > w-full').select('Start') //select option
  cy.wait(200)
  cy.get('.mt-3 > mt-10').contains('Save').click()
  cy.wait(200)
  })
  it('Loading mods', () => {
  cy.get('[cardno="14"] > .px-4 > :nth-child(2) > .inline-flex').click() //module option
  cy.wait(200)

  cy.get(':nth-child(1) > .block > .pl-4 > .items-center.justify-between > .ml-2 > .inline-flex').click()
  cy.wait(200)
  cy.get('li > .cursor-pointer').click()
  cy.wait(200)
  cy.get(':nth-child(3) > .grid > .m-auto > .ml-2 > .rounded').click() // item to add in mod
  cy.wait(200)
  cy.get(':nth-child(3) > .grid > .m-auto > .ml-2 > .rounded').click()  // close button for mod A
  cy.wait(200)
  cy.get('.bg-grey-50 > .block > .pl-4 > .items-center.justify-between > .ml-2 > .inline-flex').click() // select Mod 2 
  cy.wait(200)

  cy.get(':nth-child(3) > .grid > .m-auto > .ml-2 > .rounded').click()   // close modules
  cy.wait(200)

  cy.get('.border-b > :nth-child(2) > .inline-flex').click() // resource clicks on enroute
  cy.wait(200)

  })

  it('End of job Chewcklist', () => {
  cy.get(':nth-child(1) > :nth-child(1) > .mt-3 > .inline-block > :nth-child(1) > fieldset > .bg-white > :nth-child(1) > .relative').click() // first radio
  cy.wait(200)
  cy.get(':nth-child(2) > :nth-child(1) > .mt-3 > .inline-block > :nth-child(1) > fieldset > .bg-white > :nth-child(1) > .relative').click() // second radio
  cy.wait(200)
  cy.get(':nth-child(3) > :nth-child(1) > .mt-3 > .inline-block > :nth-child(1) > fieldset > .bg-white > :nth-child(1) > .relative').click() // third radio
  cy.wait(200)




  })



 
})

