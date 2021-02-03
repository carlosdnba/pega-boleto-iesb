const puppeteer = require('puppeteer');
require('dotenv').config();

const login = process.env.LOGIN;
const senha = process.env.SENHA;
const user = process.env.USER;

const filePath = {
    windows: `C:\\Users\\${user}\\Desktop\\boletao.pdf`,
    ubuntu: `/home/${user}/Downloads/boletao.pdf`,
};

const browserPath = {
    windows: `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`,
    ubuntu: `/usr/bin/google-chrome`,
};

(async () => {
    const browser = await puppeteer.launch({
        executablePath: browserPath.ubuntu,
    });

    const page = await browser.newPage();
    await page.goto('http://aonline.iesb.br/aonline/logon.asp?dual=s');
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

    await page.waitForNavigation();
    page.click('tr.font01n > td > a');

    await page.waitForTimeout(1200);
    const pages = await browser.pages();
    await pages[2].pdf({
        path: filePath.ubuntu,
        format: 'A4',
        printBackground: true,
    });
    await browser.close();

    console.log('Downloaded.');
})();