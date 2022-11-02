const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

console.log("Quer saber quantos iscritos algum canal do YT possui?");

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const user = readlineSync.question('Informe o nome do canal do seu "alvo": ');

  const Url = `https://www.youtube.com/c/${user}/about`;
  await page.goto(Url);
  // await page.screenshot({path: 'example.png'});

  const resSubs = await page.evaluate(() => {
    return document.querySelector("#subscriber-count").textContent;
  });

  console.log(
    `O canal ${user} possui ${resSubs}!`
  );
  await browser.close();
}

robo();
