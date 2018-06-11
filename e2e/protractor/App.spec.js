import {browser, by, element} from "protractor";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe("App", () => {
    let button;

    beforeEach(async () => {
        await browser.get("/");
        button = element(by.tagName("button"));
    });

    it("should display a button with FizzBuzz in the text", async (done) => {
        await sleep(5000);

        button.getText().then(buttonText => {
            expect(buttonText).toEqual("FizzBuzz");
            done();
        });
    });

    it("should add div with Fizz when button is clicked", async (done) => {
        await button.click();
        const textDisply = element(by.className("fizzbuzz"));
        textDisply.getText().then( text => {
            expect(text).toEqual("Fizz");
            done();
        });
    });
});
