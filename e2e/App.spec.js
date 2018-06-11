import faker from "faker";
import puppeteer from "puppeteer";
import _ from "lodash";

const app = "http://localhost:3000";
const timeout = (ms => new Promise( resolve => setTimeout(resolve, ms) ));


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
    await page.setViewport({width, height});
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
        const fizzes = await page.$$(".fizzbuzz");

        const valueJsHandle = await fizzes[0].getProperty('innerText');
        const value = await valueJsHandle.jsonValue();
        expect(value).toEqual('Fizz');
    });

    test("should find multiple", async () => {
        await page.click("button");
        const fizzes = await page.$$(".fizzbuzz");
        const valueJsHandles = await Promise.all(_.map(fizzes, fizz => fizz.getProperty('innerText')));
        const values = await Promise.all(_.map(valueJsHandles, jsHandle => jsHandle.jsonValue()));
        expect(values).toEqual(['Fizz', 'Fuzz']);
    });

    test("should find multiple 2", async () => {
        await page.click("button");
        const fizzes = await page.$$(".fizzbuzz");
        const valueJsHandles = await Promise.all(_.map(fizzes, fizz => fizz.attribute('innerText')));
        const values = await Promise.all(_.map(valueJsHandles, jsHandle => jsHandle.jsonValue()));
        expect(values).toEqual(['Fizz', 'Fuzz']);
    });

    xtest("should find multiple chained", async () => {
        await page.click("button");
        const fizzes = await page.$$(".fizzbuzz");
        const values = await Promise.all(
            _.chain(fizzes)
                .map(fizz => fizz.getProperty('innerText'))
                .map(jsHandle => jsHandle.jsonValue())
        );
        expect(values).toEqual(['Fizz', 'Fuzz']);
    });

    xtest("should eval multiple", async() => {
        // const buttonTexts = page.$$eval(".fizzbuzz", fizz => fizz.getProperty('innerText'));
        await page.click("button");
        await timeout(500);
        const texts = await page.$$eval('.fizzbuzz', items => items.map( item => item.innerText));
    })
});
