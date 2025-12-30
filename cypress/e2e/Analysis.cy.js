describe("ANALYSIS", () => {

  const STUDENT_ID = '1100884'

  it("Login to OneSaz", () => {

    cy.visit("https://admin.onesaz.com/sign-in")

     cy.get('.css-lq0d4 > .MuiPaper-root > .css-12pub1d > form.MuiBox-root > :nth-child(1) > .MuiInputBase-root > [name="employeeId"]', { timeout: 10000 })
      .type('public')
      
    cy.get('.css-lq0d4 > .MuiPaper-root > .css-12pub1d > form.MuiBox-root > :nth-child(1) > .MuiInputBase-root > [name="employeeId"]')
      .click({ force: true })

    cy.get('.css-lq0d4 > .MuiPaper-root > .css-12pub1d > form.MuiBox-root > :nth-child(2) > .MuiInputBase-root > [name="password"]', { timeout: 10000 })
      .type('1105')
      
    cy.get('.css-lq0d4 > .MuiPaper-root > .css-12pub1d > form.MuiBox-root > :nth-child(2) > .MuiInputBase-root > [name="password"]')
      .click({ force: true })
  
       cy.get('.css-lq0d4 > .MuiPaper-root > .css-12pub1d > form.MuiBox-root > .css-1t4e8g5 > .MuiButtonBase-root')
      .click({ force: true })

    cy.get('.css-x7xwsi > .MuiButtonBase-root')
     .click({ force: true })


     cy.get(':nth-child(7) > a.MuiListItem-root > .MuiBox-root')
     .click()


     cy.get(':nth-child(1) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
     .type('ADILABAD')

     cy.wait(1000)
     
     cy.contains('ADILABAD').click({ force: true })


    cy.get(':nth-child(2) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .type('ADB')
    cy.wait(1000)
     cy.contains('ADB').click({ force: true })

    cy.wait(1000)

    cy.get(':nth-child(3) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
        .type('11')
        
    cy.wait(1000)
    
    cy.contains('11').click({ force: true })




    cy.get(':nth-child(4) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .type('JUNIOR MPC')
    cy.wait(1000)
     cy.contains('JUNIOR MPC').click({ force: true })


     cy.get('.MuiGrid-grid-md-1 > .MuiButtonBase-root')
     .click()


     cy.get('.css-atgpxs > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
     .type('JEE_MAIN_22_12_2025')
    cy.wait(1000)
     cy.contains('JEE_MAIN_22_12_2025').click({ force: true })

     cy.get('.css-5eqo8z')
        .click()


        cy.get(`[data-id="${STUDENT_ID}"] > .MuiDataGrid-cell--withRenderer > .MuiBox-root > .MuiButtonBase-root`)
        .click()
        cy.wait(2000)


// Assert bottom content is visible
cy.get('body')
  .find('*')
  .last()
  .should('be.visible')


        cy.wait(1000)

        cy.get('.css-0 > .MuiGrid-container > :nth-child(2)')
        .click()


        cy.get('#simple-tab-1')
        .click()

        cy.wait(1000)
       
        cy.get('#simple-tab-2')
        .click()
         cy.wait(2000)
        
       cy.get('#simple-tab-3')
  .click()
   cy.wait(2000)

  cy.get('table').first().scrollIntoView();

// Instead of cy.wait(2000), use a smooth scroll to the bottom 
// or to the specific element to trigger lazy loading
cy.get('table').last().scrollIntoView({ duration: 5000 });
cy.get('table').last().should('be.visible');

        cy.get('#simple-tab-4')
        .click()

        cy.wait(2000)

        cy.get('[data-id="1"] > [data-field="PHYSICS_D"]').first()
        .click({ force: true })

        cy.wait(1000)

        cy.get('[data-id="1"]').find('svg, button, a').first()
        .click({ force: true })

        cy.wait(2000)

        cy.scrollTo('bottom', { duration: 3000, ensureScrollable: false });
        cy.wait(2000)

        cy.get('.css-1tsmbea > :nth-child(2) > .MuiGrid-container > :nth-child(3)')
            .click()

         cy.get('button[aria-label="Go back."]').first().click({ force: true })

         cy.wait(2000)

      
         cy.get(':nth-child(7) > a.MuiListItem-root > .MuiBox-root')
     .click()


cy.get('.css-5eqo8z')
    .click()
    cy.get('#simple-tab-5')
    .click()


    cy.get('#simple-tab-6')
    .click()

    cy.get('.css-ocfo13 > .MuiInputBase-root')
    .click()

    cy.get('.css-4bz6em > .MuiButtonBase-root')
    .click()
       
    cy.window().scrollTo(0, document.body.scrollHeight, { duration: 4000, ensureScrollable: false })

    cy.wait(1000)

  cy.get('#simple-tab-7')
    .click() 
    cy.get('[name="No of Students"]')
    .click()
    cy.get('.css-4bz6em > .MuiButtonBase-root')
    .click()

    cy.get('.css-4bz6em > .MuiButtonBase-root')
    .click()



cy.get('#simple-tab-8')
    .click()

    cy.get('.MuiDialogContent-root > :nth-child(3) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click()

    cy.wait(500)

    cy.get('[role="option"]').first().click({ force: true })

    cy.wait(3000)


cy.get('.css-6e32jn > .MuiButton-root')
    .click()
cy.wait(3000)

    cy.get('#simple-tab-9')
    .click()

    cy.wait(1000)

    
        
    cy.get('.css-srlppw > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click()

    cy.wait(500)

    cy.get('[role="option"]').first().click({ force: true })

    cy.wait(1000)

    cy.get('.css-lbgtl2 > .MuiButton-contained')
    .click()
    cy.wait(4000)

cy.get('.css-1c6zurw > :nth-child(1)')
.click({ force: true })
cy.wait(3000)

cy.get('.css-1c6zurw > :nth-child(1)')
.click()

cy.get('.css-1c6zurw > :nth-child(2)')
.click()
cy.wait(3000)


  cy.get('.active > .MuiBox-root')
    .click()
    
   cy.get('[href="/app/analysis/all-tests"] > .MuiBox-root > .MuiListItemText-root > .MuiTypography-root')
    .click()

    cy.get('.MuiInputBase-root')
    .type('JUNIOR SPARK')
    
    cy.get('.MuiInputBase-root')
    .click()

    cy.wait(2000)

      cy.get('[href="/app/analysis/progress-report"]', { timeout: 10000 })
    .should('be.visible')
    .click()

    cy.get('.MuiFormControlLabel-root')
    .click()

    // Select branch - type and select from dropdown
    cy.get('.MuiInputBase-root')
    .first()
    .type('ADB')
    
    // Wait for dropdown and select the option
    cy.contains('.MuiAutocomplete-option', 'ADB', { timeout: 5000 })
    .click()

    cy.wait(1000)

    // Now select the second field (Class/Course)
    cy.get('.MuiAutocomplete-root').eq(1).find('.MuiInputBase-root')
    .should('be.visible')
    .click()
    .type('JUNIOR MPC')
    
    // Select from dropdown
    cy.contains('.MuiAutocomplete-option', 'JUNIOR MPC', { timeout: 5000 })
    .click()

    cy.get('.css-5eqo8z')
    .click()

    // Click on the Tests/Topics field to open dropdown
    cy.get(':nth-child(4) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click()
    
    // Wait for dropdown to open and click "Select All"
    cy.get('[role="option"]', { timeout: 5000 })
    .contains('Select All')
    .click({ force: true })

    // Wait for dropdown to close
    cy.wait(500)
    
    // Click outside to ensure dropdown is closed
    cy.get('body').click(0, 0)
    
    cy.get('.css-1b122rb')
    .should('be.visible')
    .click()
    
    cy.scrollTo('bottom', { duration: 6000, ensureScrollable: false })
    cy.wait(2000)


    cy.get('.css-1tsmbea > :nth-child(1) > .MuiButtonBase-root')
    .click()

  

    
    cy.get('[href="/app/analysis/progress-report"]', { timeout: 60000 })
    .should('be.visible')
    .click()

    cy.get('.MuiInputBase-input').first().clear()
    
    cy.get('.MuiInputBase-input').first().type(STUDENT_ID)
    
    cy.get('.MuiInputBase-input').first().click()

    cy.get('.MuiGrid-grid-xs-3 > .MuiButtonBase-root')
    .click()

    cy.get('.MuiFormControl-root > .MuiInputBase-root').first()
    .type('JEEMAIN_2025')
    
    cy.wait(2000)
    
    cy.get('[role="option"]').contains('JEEMAIN_2025').click({ force: true })

    cy.wait(500)

    // Click button to view progress report data
    cy.get('.MuiGrid-root > .MuiButtonBase-root').last().click({ force: true })

    cy.wait(2000)

    // Now navigate to student-wise error report - using direct URL
    cy.visit('https://admin.onesaz.com/app/analysis/student-wise-error-report')

    cy.wait(2000)

    cy.get('.MuiInputBase-input').first().clear()
    
    cy.get('.MuiInputBase-input').first().type(STUDENT_ID)
    
    cy.get('.MuiInputBase-input').first().click()

    cy.get('.MuiGrid-grid-xs-3 > .MuiButtonBase-root')
    .click()

    cy.get(':nth-child(3) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click()
    
    cy.get(':nth-child(3) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .type('JEEMAIN_2025')
    
    cy.wait(1000)
    
    cy.get('[role="option"]').contains('JEEMAIN_2025').click({ force: true })
    
    cy.wait(500)

    cy.get('.css-nxuki0 > .MuiButtonBase-root')
    .click()
    
    cy.wait(2000)


   

    cy.get('.css-x7xwsi > .MuiButtonBase-root > .material-icons-round')
    .click()

    cy.wait(2000)

cy.get('.MuiCollapse-wrapperInner > .MuiList-root > .active')
    .click()

    cy.get('.MuiInputBase-root input').first().clear({ force: true })
    
    cy.get('.MuiInputBase-root input').first().type(STUDENT_ID, { force: true })
    
    cy.get('.MuiInputBase-root').first().click({ force: true })

    cy.get('.MuiGrid-grid-xs-3 > .MuiButtonBase-root')
    .click()

    cy.wait(2000)

    cy.get('.MuiFormControl-root > .MuiInputBase-root')
    .first()
    .click()

    cy.wait(2000)

    
    

   cy.get('[href="/app/analysis/student-answer"] > .MuiBox-root')
    .click()

    cy.get('.MuiFormControlLabel-root')
    .click()

    cy.wait(500)

    cy.get('.MuiInputBase-root').first().click()
    
    cy.get('.MuiInputBase-root').first().type('ADB')
    
    cy.wait(1000)
    
    cy.contains('ADB').click({ force: true })

    cy.get(':nth-child(2) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    
    cy.get(':nth-child(2) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('JUNIOR MPC')
    
    cy.wait(1000)
    
    cy.contains('JUNIOR MPC').click({ force: true })


    cy.get(':nth-child(3) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    
    cy.get(':nth-child(3) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    cy.get('[role="option"]').first().click({ force: true })
    
    cy.wait(1000)

    cy.get('.css-5eqo8z')
    .click()

    cy.get('.css-atgpxs > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .click()
    
     cy.get('[role="option"]').first().click({ force: true })


    cy.get('.MuiGrid-grid-md-10 > .MuiButtonBase-root')
    .click()
    
    cy.wait(2000)
    
    cy.scrollTo('bottom', { duration: 8000, ensureScrollable: false })


  cy.get('[href="/app/analysis/board-test-analysis"] > .MuiBox-root')
    .click()
     
    cy.wait(1000)

    cy.get('.css-atgpxs > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').first().click()
    
    cy.get('.css-atgpxs > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').first().type('ADILABAD')
    
    cy.wait(1000)
    
    cy.contains('ADILABAD').click({ force: true })
     
    cy.get('.css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    
    cy.get('.css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('ADB')
    
    cy.wait(1000)
    
    cy.contains('ADB').click({ force: true })

    cy.wait(1000)

    // Click on batches field and select all
    cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').eq(2).click()
    
    cy.wait(500)
    
    cy.get('[role="option"]').first().click({ force: true })

    cy.wait(500)

    cy.get('.css-5eqo8z')
    .click()

    cy.get('.MuiGrid-grid-md-3 > .css-atgpxs > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    
    cy.get('.MuiGrid-grid-md-3 > .css-atgpxs > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('JEE_MAINS')
    
    cy.wait(1000)
    
    cy.contains('JEE_MAINS').click({ force: true })
   cy.scrollTo('bottom', { duration: 7000, ensureScrollable: false })
    cy.wait(2000)


    cy.get('[href="/app/analysis/question-error-analysis"] > .MuiBox-root')
    .click()

    cy.get('.css-atgpxs > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').first()
    .type('ADILABAD')
     cy.wait(500)
     cy.contains('ADILABAD').click({ force: true })
   

          cy.get('.css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('ADB')
    
    cy.wait(500)
    cy.contains('ADB').click({ force: true })

    cy.wait(500)

    // Click on batches field and select all
    cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').eq(2).click()
    
    cy.wait(500)
    
    cy.get('[role="option"]').first().click({ force: true })

    cy.wait(500)

    cy.get('.css-5eqo8z')
    .click()


    cy.get(':nth-child(5) > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .type('JEEMAIN_2025')
    cy.wait(500)
    cy.contains('JEEMAIN_2025').click({ force: true })


    cy.get('.MuiGrid-grid-md-3 > .css-ocfo13 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    .type('Select All')
    cy.wait(500)
    cy.contains('Select All').click({ force: true })

    cy.get('.css-8kj8bh > .MuiButtonBase-root')
    .click()

    cy.get('[href="/app/analysis/topicwise-analysis"] > .MuiBox-root')
    .click()

    cy.wait(500)

    cy.get('.MuiInputBase-root input').first().clear()
    
    cy.get('.MuiInputBase-root input').first().type(STUDENT_ID)
    
    cy.get('.MuiInputBase-root input').first().click()
    
    cy.get('.css-1cmi76 > .MuiButtonBase-root')
    .click()

    cy.wait(1000)

    // Click on Tests dropdown (using autocomplete selector)
    cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').first().click()
    
    cy.wait(500)
    
    // Select first option (Select All)
    cy.get('[role="option"]').first().click({ force: true })
    
    cy.wait(500)
    
    // Click Get Topicwise Analysis button
    cy.get('.MuiGrid-grid-md-2 > .MuiButtonBase-root').click()

    cy.wait(2000)


      cy.get('.MuiFormControl-root > .MuiInputBase-root')
      cy.scrollTo('bottom', { duration: 5000, ensureScrollable: false })






        })

  })

