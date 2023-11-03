const puppeteer = require('puppeteer');

async function getPic() {
const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({width: 1080, height: 900});
  await page.goto('https://google.com');
  await page.type('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div', 'qa engineering');
  await page.click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b');
  await page.waitForTimeout(1000)

  await page.screenshot({path: 'google.png'});
  await browser.close();
}

getPic();