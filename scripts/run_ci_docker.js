const kill = require('tree-kill');
const spawn = require('child_process').spawn;

console.log("Starting - npm install");
const npmInstall = spawn('npm', ['install', '--no-bin-links']);
npmInstall.stderr.on('data', function(data) {
    console.log(data.toString());
});
npmInstall.on('close', () => {
    console.log("Install complete, starting build");
    const build = spawn('npm', ['build']);
    build.on('close', () => {
        console.log("Build complete, starting tests");
        const server = startServer();
        sleep(10000).then(() => {
            const tests = startTests();
            setServerToDieWhenTestsComplete(server, tests);
        });
    })
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startServer() {
    const server =spawn('npm', ['run', 'start:ci']);
    server.stdout.on('data', function(data) {
        console.log(data.toString());
    });
    return server;
}

function startTests() {
    console.log("starting tests");
    const tests = spawn('node', ['node_modules/jest/bin/jest.js', '--env=jsdom']);
    tests.stdout.on('data', function(data) {
        console.log(data.toString());
    });
    tests.stderr.on('data', function(data) {
        console.log(data.toString());
    });
    return tests;
}

function setServerToDieWhenTestsComplete(server, tests) {
    const killServer = () => {
        kill(server.pid);
    };

    tests.on('close', (code) => {
        killServer();
        process.exit(code);
    });
    tests.on('error', () => {
        killServer();
        console.log("tests failed to run!!!");
    });
}

