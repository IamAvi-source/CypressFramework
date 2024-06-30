const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
     
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
  defaultCommandTimeout: 20000,
  video: true,
  uncaught:exception=true,
  failOnStatusCode: false
  
},

{
  reporter: 'mochawesome',
  reporterOptions: {
     reportDir: 'cypress/results',
     overwrite: false,
     html: false,
     json: true
  }
});

