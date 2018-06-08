import faker from "faker";
import puppeteer from "puppeteer";

const app = "http://localhost:3000";

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
});
afterAll(() => {
    browser.close();
});

describe("App", () => {
    beforeEach(async () => {
        await page.goto(app);
        await page.waitForSelector("button");
    }, 16000);

    test("should display a button with FizzBuzz in the text", async () => {
        const buttonText = await page.$eval("button", el => el.textContent);
        expect(buttonText).toEqual("FizzBuzz");
    }, 16000);

    test("should add div with Fizz when button is clicked", async () => {
        await page.click("button");
        const fizzText = await page.$eval(".fizzbuzz", el => el.textContent);
        expect(fizzText).toEqual("Fizz");
    });
});
