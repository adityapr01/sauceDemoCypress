const { defineConfig } = require("cypress");
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
       });
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
