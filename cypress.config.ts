import { defineConfig } from 'cypress';

import { plugins } from 'cypress-social-logins';

const GoogleSocialLogin = plugins.GoogleSocialLogin;

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        GoogleSocialLogin: GoogleSocialLogin,
      });
    },
  },
});
