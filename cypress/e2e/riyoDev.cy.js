 

describe('Riyo webapp', () => {


  let objval

  before(function(){
    cy.fixture('example').then(function(data){

      objval = data;
      return objval
    })
  })

  it('Login for riyo app', () => {
   
      cy.visit("https://riyo-dev-au.web.app/login")
      cy.get(':nth-child(1) > .firebaseui-idp-button').should('be.visible').should('be.enabled').click()
      cy.get('.mdl-textfield__input').should('be.visible').should('be.enabled').type(objval.dispatcherName)
      cy.get('.firebaseui-id-submit').should('be.visible').should('be.enabled').click()
      cy.get(':nth-child(3) > .mdl-textfield__input').should('be.visible').should('be.enabled').type(objval.dispatcherPassword)
      cy.get('.firebaseui-id-submit').should('be.visible').should('be.enabled').click()
      cy.wait(8000)
      //cy.location('search').should('equal','?')
      cy.get('#search_field').should('be.visible').click().type(objval.firstName)
      cy.wait(2000)
       cy.get(':nth-child(1) > .flex-1 > .px-4').click()
       cy.wait(200)
     // cy.wait(2000)
  })
    //  cy.get('.mt-1 capitalize').wait(4000) .click()
   // cy.get('.form-control').should('be.visible').click()
     //cy.wait(0)

     
   
    it('Volume calculator', () => {
    cy.get('[cardno="10"] > .px-4 > .inline-flex').click({force: true})
    cy.wait(800)
    cy.get('.VueCarousel-inner > :nth-child(1) > .image-holder > .furniture-selector > .img-responsive').click()
    cy.get('.VueCarousel-slide-center > .image-holder > .furniture-selector > .img-responsive').click()
    cy.get('.justify-start > .border').click()
    cy.wait(4000)
    cy.get('.justify-start > .text-white').click()
    cy.wait(4000)
    cy.get('.absolute > .text-gray-400 > .h-6').click()
    cy.wait(400)
    cy.get(':nth-child(4) > .px-4 > :nth-child(2) > .inline-flex').click() 
    cy.wait(8000)
    })



    // if quote is already published
    //cy.get('.px-4.py-3 > :nth-child(2) > .cursor-pointer')

    it('Quote selection', () => {

    cy.get('.pr-2 > .items-center > .flex > li > .cursor-pointer').click()
    cy.wait(400)
    cy.get(':nth-child(1) > .block > .px-4 > .ml-2 > .rounded').click()
    cy.wait(5000)
    cy.get('#options-menu').click()
    cy.wait(500)
    cy.get('.rounded-md > :nth-child(1) > .cursor-pointer').click()
    cy.wait(500)
   
    })
    // publish the quote

    it('publish the quote', () => {
    cy.get('.relative > .mt-5 > .flex > .inline-flex ').contains('Confirm').click()
    cy.wait(500)
    cy.get('.border-t > .inline-flex').click()
    //assigning the resource
   // cy.get('[title="Events List"] > :nth-child(3) > .bg-white > .px-4').click()
    //cy.wait(500)
    //cy.get('.inline-block > :nth-child(2) > .relative > .capitalize').click()
    })



    // Accepting the quote
    it('Accepting the quote', () => {
    cy.get(':nth-child(4) > .px-4 > :nth-child(2) > .inline-flex').click()
    cy.wait(500)
    cy.get('#options-menu').click()
    cy.wait(200)
    cy.get('.py-1 > .cursor-pointer').click() // Accepting the quote
    cy.wait(200)
   // cy.get('.rounded-md > :nth-child(1) > .cursor-pointer').click()
    cy.get(' .z-50 > .relative > .mt-5 > .rounded-md > .inline-flex').contains('Confirm').click()
    cy.wait(200)
    // approve the quote
    //cy.get('#options-menu').click()
    //cy.wait(200)
    //cy.get('.rounded-md > :nth-child(1) > .cursor-pointer').click()
    //cy.wait(500)
    //cy.get(' .px-4 > .mt-5 > .rounded-md > .inline-flex').contains('Confirm').click()
    //cy.wait(200)
    cy.get('.-my-4 > path').click()
    })

    //modes booking
    it('Mods Booking', () => {
    cy.get('.ais-InstantSearch > .mt-8 > .py-3 > :nth-child(2) > .inline-flex').click() // open button for mod
    cy.wait(200)
    cy.get('.grid > :nth-child(1) > .justify-between').click() // first mode
    cy.wait(200)
    /*cy.get('.grid > :nth-child(2) > .justify-between').click() // second mode
    cy.wait(200)
    cy.get('.grid > :nth-child(3) > .justify-between').click() // third mode
    cy.wait(200)
    */
    cy.get('.py-3 > .text-org-700').click({force: true})

    })


    // sign out
    /*cy.get('#user-menu > .h-8').click()
    cy.wait(200)
    cy.get('.origin-top-right > .py-1 > .py-2').click()

*/


 //assigning the resource
 it('Assigning the resource/service event', () => {
    cy.get('[title="Events List"] > :nth-child(3) > .bg-white > .px-4').click()
    cy.wait(500)
    cy.get('.inline-block > :nth-child(2) > .relative > .capitalize').click()

    // form for resource

    cy.get('.col-span-2 > .mt-1 > .border > .form-control').click()
    //.should('have.value', 'Sep	25,2022')  //on selected dates
    cy.wait(200)
    cy.get('.arrowTop > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > :nth-child(34)').click()
    //cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > :nth-child(35)')
    //cy.get('.arrowTop > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > :nth-child(33)')
    cy.wait(400)
    
   // cy.get('.col-span-2 > .mt-1 > .border > .form-control').type('{esc}'), {force: true};
   cy.get(':nth-child(3) > .mt-1 > .border > .form-control').click()
   cy.wait(200)
   cy.get('.open > .flatpickr-time > :nth-child(1) > .numInput').type('5')
   cy.wait(200)
   cy.get('.open > .flatpickr-time > :nth-child(3) > .numInput').type('30')
   cy.wait(200)
   cy.get(':nth-child(4) > .mt-1 > .border > .form-control').click()
   cy.wait(200)
   cy.get('.open > .flatpickr-time > :nth-child(1) > .numInput').type('8')
   cy.wait(200)
   cy.get('.open > .flatpickr-time > :nth-child(3) > .numInput').type('40')
   cy.get(':nth-child(3) > .z-0').click(5,5)
   cy.wait(4000)
  //  cy.get(':nth-child(3) > .mt-1 > .border > .form-control').type('2:00 PM', {force: true})
  //  .should('have.value', '2:00 PM')// start after
    //cy.get('.arrowTop > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > :nth-child(19)').type('5:00 PM', {force: true})
    //.should('have.value', '5:00 PM') // start date value
   // cy.get(':nth-child(4) > .mt-1 > .border > .form-control').type('5:00 PM', {force: true})
    //.should('have.value', '5:00 PM') // end after
    cy.get('.relative > div.flex > .flex > .inline-flex').click()//event type
    cy.wait(200)
    cy.get('.rounded-md > :nth-child(1) > :nth-child(2) > .w-full > .flex-1').click() //list value from events list
   // cy.get(':nth-child(6) > .inline-block > .ais-InstantSearch > .ais-Hits > :nth-child(1) > .relative > :nth-child(1) > div.w-full > .inline-flex').type('Service', {force: true})
    //.should('have.value', 'Service') //resources
    cy.wait(200)
    cy.get(':nth-child(6) > .inline-block > .ais-InstantSearch > .ais-Hits > :nth-child(1) > .relative > :nth-child(1) > div.w-full > .inline-flex').click() //resource field
    cy.wait(200)
    cy.get('.ais-SearchBox-input').type("vaibhav gulati")
    cy.wait(200)
    cy.get('.overflow-y-scroll > .justify-between > .flex-1').click()
    cy.wait(800)
    cy.get('.grid-cols-1 > :nth-child(1) > [data-v-3dd675fe=""] > .mt-1 > .form-input').type("quakers")
    cy.wait(400)
    cy.get('.grid-cols-1 > :nth-child(1) > [data-v-3dd675fe=""] > .mt-1 > .form-input').type('{downarrow}').click();
    cy.wait(600)
    cy.get('.mt-6 > .justify-center').click()
    cy.wait(1000)
    cy.get('.mt-6 > .justify-center').click()


    //cy.get('.px-4 > capitalize block > text-gray-400').click()
    
    
      //cy.get('.form-control').dblclick('bottom')
    /*  cy.get('.form-control').should('be.visible').click({force:true});
      cy.contains('24').click({force:true});


      */
      
  
  })


})