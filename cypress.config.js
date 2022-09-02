const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "watchForFileChanges": true,
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": true,
    "html": true,
    "json": true,
    "reportDir": "cypress/report/mochawesome-report"
  }
});
