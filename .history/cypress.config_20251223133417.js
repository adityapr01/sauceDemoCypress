const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
       on('after:run', (results) => {
         const data = `Environment=${process.env.ENVIRONMENT}\nBrowser=${results.browserName}\nBrowserVersion=${results.browserVersion}` 
         fs.writeFile('allure-results/environment.properties', data, (err) => {
          if (err) throw err;
         });
       })
       return config;
      // implement node event listeners here
    },
  },
});

export default {
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
};
