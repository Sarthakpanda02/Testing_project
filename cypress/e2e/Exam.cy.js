describe("EXAM VIEW", () => {

  beforeEach(() => {
    // Handle uncaught exceptions from the application
    cy.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      if (err.message.includes('accountType') || err.message.includes('Network Error')) {
        return false
      }
      return true
    })
  })

  it("Login to OneSaz", () => {

    cy.visit("https://onesaz.com/sign-in")


    cy.get('[name="userId"]', { timeout: 10000 })
     .type('1100888')

     cy.get('[name="password"]', { timeout: 10000 })
     .type('1100888')

    cy.get('.MuiButtonBase-root')
        .click()

    // Wait for login to complete and redirect
    cy.url().should('not.include', '/sign-in')
    cy.wait(2000) // Allow time for user data to load

    cy.visit("https://onesaz.com/home")


    cy.get('.MuiToolbar-root > :nth-child(1)')
        .click({ force: true })

        cy.get('.MuiList-root > :nth-child(1)')
        .click({ force: true })

        cy.get('.MuiTabs-flexContainer > :nth-child(2)')
        .click()

        cy.get('.MuiTabs-flexContainer > :nth-child(3)')
        .click()
        cy.wait(2000)

        cy.get('.MuiTabs-flexContainer > :nth-child(3)')
        .click()
        cy.wait(500)

        cy.get('.MuiFormGroup-root > :nth-child(2)')
        .click()
        cy.wait(500)

        cy.get('.MuiTabs-flexContainer > :nth-child(2)')
        .click()
        cy.wait(500)

        cy.get('.MuiFormGroup-root > :nth-child(1)')
        .click({ force: true })
        cy.wait(1000)

        cy.get(':nth-child(2) > :nth-child(3) > .jss187 > .MuiPaper-root > .MuiButtonBase-root > .MuiCardContent-root')
        .click({ force: true })
      
        cy.scrollTo('bottom', { duration: 15000 })




        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(1) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(300)

       
        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(2) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(300)

     

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(3) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(300)


        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(4) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(300)


        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(5) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(300)
         

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(6) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(300)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(7) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(8) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)    

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(9) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)    

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(10) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(11) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(12) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)    

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(13) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(14) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true    })
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(15) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true    })
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(16) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true})
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(17) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)    

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(18) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(19) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(20) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true})
        cy.wait(500 )

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(21) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)    


        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(22) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(23) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(24) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)    

        cy.get(':nth-child(3) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(25) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)


        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(1) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true }) 
        cy.wait(500)


        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(2) > .MuiPaper-root')
        .scrollIntoView()       
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(3) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(4) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true    })
        cy.wait(500)


        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(5) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true    })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(6) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true})
        cy.wait(500)    

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(7) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(8) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)    

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(9) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)


        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(10) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true})
        cy.wait(500 )


        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(11) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)


        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(12) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(13) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(14) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true    })
        cy.wait(500)


        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(15) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true    })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(16) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true})
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(17) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(18) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(19) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(20) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true})
        cy.wait(500 )

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(21) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(22) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(23) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(24) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

        cy.get('.jss3152 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(25) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)


        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(1) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true }) 
        cy.wait(500)    

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(2) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(3) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)    

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(4) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true    })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(5) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true    })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(6) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true})
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(7) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)    

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(8) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(9) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(10) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true})
        cy.wait(500 )


        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(11) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(12) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(13) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(14) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true    })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(15) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true    })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(16) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true})
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(17) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(18) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)


        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(19) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(20) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true})
        cy.wait(500 )

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(21) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(21) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(23) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(24) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

        cy.get('.jss3161 > :nth-child(2) > :nth-child(1) > .jssjnhzdn > .jssea2ngs > :nth-child(1) > .jss10xubij > :nth-child(25) > .MuiPaper-root')
        .scrollIntoView()
        .click({ force: true  })
        cy.wait(500)

       cy.get(':nth-child(19) > .MuiDialog-container > .MuiDialog-paper > :nth-child(1) > .MuiTypography-h6 > .MuiGrid-container > :nth-child(3) > .MuiTypography-root')
         .first()
         .click({ force: true })

         cy.get(':nth-child(18) > .MuiDialog-container > .MuiDialog-paper > :nth-child(1) > .MuiTypography-h6 > .MuiGrid-container > :nth-child(3) > .MuiTypography-root')
            .first()
            .click({ force: true })

            cy.get('.MuiGrid-container > :nth-child(3) > .MuiTypography-root')
            .first()
            .click({ force: true })

            cy.get('.MuiList-root > :nth-child(2)')
            .click({ force: true  })
            cy.wait(2000)





         

        





  })
})
