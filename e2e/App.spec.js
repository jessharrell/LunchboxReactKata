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
    test("Should display a button", async () => {
        await page.goto(app);
        await page.waitForSelector("button");
        // await page.click("input[name=name]");
        // await page.type("input[name=name]", lead.name);
    }, 16000);
});
