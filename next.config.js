const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssModules: true,
  publicRuntimeConfig: {
    APP_NAME: "SEOBLOG",
    API_DEVELOPMENT: "http://localhost:8000/api",
    // API_PRODUCTION: 'http://seoblog:8000/api',
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: "http://locatlhost:3000",
    // DOMAIN_PRODUCTION: 'https://seoblog.com',
    FB_APP_ID: "2564453657152083",
  },
});
