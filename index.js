const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const config = require('./module/config');

(async function run() {
    const browser = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    await browser.get(config.baseUrl);
})();
