import puppeteer from "puppeteer";
import { getBravePath } from "./utils";
const bravePath = getBravePath();

(async () => {
  const browser = await puppeteer.launch({
    executablePath: bravePath,
    headless: false,
  });
  const page = await browser.newPage();

  const searchQuery = "yeasin2002";
  await page.goto(
    `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`
  );

  await page.waitForSelector("h3");

  const links = await page.evaluate(() => {
    const results = Array.from(document.querySelectorAll("h3")).map(
      (element) => ({
        title: element.textContent,
        url: element.parentElement?.getAttribute("href"),
      })
    );
    return results;
  });

  console.log(links);

  await browser.close();
})();
