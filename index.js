const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function run() {
    const options = new chrome.Options();
    options.addArguments('--start-maximized');

    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://example.com');

        await driver.wait(until.elementLocated(By.tagName('h1')), 5000);

        const text = await driver.findElement(By.tagName('h1')).getText();
        console.log(text);

    } catch (e) {
        console.error(e);
    } finally {
        await driver.quit();
    }
})();
