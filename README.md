# cypress

Cypress is a end to end tool for testing. By default cypress uses Mocha framework.

```javascript
describe('My First Test', () => {  //----> First argument is the test suite name and Second argument is the function which will  wrap all test cases. 
// Multiple test cases can be defined with 'it' keyword, and it'll have two arguments. First is the test case name and second is the function where all test cases be created.
  it('Test Case 1', () => {            // test case 1
    cy.visit('https://example.cypress.io')
  })
   it('Test Case 2', () => {           // test case 2
    cy.visit('https://google.com')
  })
})

```


## Folder Structure

```bash
.
├── cypress
│   ├── e2e(contains test case files)
│   ├── fixtures(test data)
├── node_modules(modules for cypress)
├── Videos(screen recordings for test cases)
├── cypress.config.js(cypresss configuration)
├── package.json(dependencies for cypress)
│
```





## Subtracter Vaulat app
Below is the cypress automated testcase for Subtractor Vault app.

Demo video for this testcase can be found inside video folder


```javascript
 
describe('Vault Subtracter webapp', () => {
  it('testcase for vault app', () => {
   
      cy.visit("https://substractor.web.app/")
      cy.get('#select_date').should('be.visible').should('be.enabled').type('2022-09-23')
      cy.get('#startBy').should('be.visible').should('be.enabled').type('05:40')
      cy.get(':nth-child(2) > :nth-child(1) > .bg-white > .p-1').should('be.visible').type('Quakers Hill NSW, Australia')
      cy.wait(400)
      cy.get(':nth-child(2) > :nth-child(1) > .bg-white > .p-1').type('{downarrow}').click();
      //cy.get(':nth-child(2) > :nth-child(1) > .bg-white > .p-1').select('Quakers Hill NSW, Australia')
      //cy.get(':nth-child(2) > :nth-child(1) > .bg-white > .p-1').type('{enter}')
      cy.get(':nth-child(2) > :nth-child(2) > .bg-white > .p-1').should('be.visible').type('Domestic Terminal 2, Keith Smith Avenue, Mascot NSW, Australia')
      cy.wait(800)
      cy.get(':nth-child(2) > :nth-child(2) > .bg-white > .p-1').type('{downarrow}').click();
     
      //cy.get(':nth-child(2) > :nth-child(2) > .bg-white > .p-1').type('{enter}')
      cy.get('.text-base').should('be.enabled').click()
      cy.wait(400)
      cy.get('.text-base').should('be.enabled').click()
      cy.get('#first_name').should('be.visible').should('be.enabled').type('vaibhav')
      cy.get('#last_name').should('be.visible').should('be.enabled').type('gulati')
      cy.get('#phone_number').should('be.visible').should('be.enabled').type('0440237426')
      cy.get('#email').should('be.visible').should('be.enabled').type('gulativaibhavjcurve+cust01@gmail.com')
      cy.get('.flex-auto > .text-base').should('be.enabled').click()
      
      
  
  })
})

```
