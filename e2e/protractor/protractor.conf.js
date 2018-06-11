exports.config = {
    specs: ['*.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:3000',
    framework: 'jasmine',
    onPrepare: function () {
        // don't wait for angular
        browser.ignoreSynchronization = true;
    }
};
