const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.uefa.com/euro2024/standings/', { waitUntil: 'networkidle2' });

  // 페이지가 로드된 후 데이터 추출
  const data = await page.evaluate(() => {
    const elements = document.querySelectorAll('.Wx1xlqbGCoOg0RWJgk8M.PLVOiHyTi_8Vr9apeREi');
    return Array.from(elements).map(element => element.innerText.trim());
  });

  console.log(data);

  await browser.close();
})();
