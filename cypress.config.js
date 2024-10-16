const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: process.env.CYPRESS_baseUrl || 'https://beko.partners.dandg.uk.euw1.uat.test.athome.domgentest.cloud/register/appliance-details#1', // Default to localhost if not set
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
