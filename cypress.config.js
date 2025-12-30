const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://admin.onesaz.com",
    supportFile: "cypress/support/e2e.js",
    video: false
  }
});
