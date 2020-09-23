const puppeteer = require('puppeteer');
require('dotenv').config();

const login = process.env.LOGIN;
const senha = process.env.SENHA;

(async function getBoleto() {
    const browser = await puppeteer.launch({ headless: false });
    // const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://online.iesb.br/aonline/logon.asp');
    await page.type('form > input', login);
    await page.type('form > p > input', senha);

    page.click('form > p.entrar > input');

    await page.on('dialog', async dialog => {
        dialog.dismiss();
    });
    await page.waitForNavigation();

    page.click('li#M3');
    await page.waitForNavigation();
    page.click('a#M3L1');

    await page.screenshot({ path: 'print.png' });

})();