const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    defaultCommandTimeout: 20000,
    requestTimeout: 20000,
    responseTimeout: 30000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
