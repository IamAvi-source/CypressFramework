// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import './commands'
   Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
 // failing the test
   return false
   })
// The below command is mandatory to use Xpath functionality in our class file
   require('cypress-xpath')

// This is for generating HTML report (Mochaawesome Report)
import 'cypress-mochawesome-reporter/register';  

//Below command need to be added in this folder otherwise we have add this command in each class to import all the cypress methods
///<reference types='Cypress'/>

//Below command will enable the xpath functionality in Cypress
///<reference types='Cypress-xpath'/>    

//Below command will enable using the Iframe switching functionality
import 'cypress-iframe'

//Below command will enable using Drag and Drop 
require('@4tw/cypress-drag-drop')

//Below command will enable using File Upload
import 'cypress-file-upload'


