const spawn = require('child_process').spawn;

console.log("Starting - npm install");
const npmInstall = spawn('npm', ['install']);
npmInstall.stderr.on('data', function(data) {
    console.log(data.toString());
});
npmInstall.on('close', () => {
    console.log("Install complete, starting build");

    const build = spawn('npm', ['build']);
    build.on('close', () => {
        console.log("Build complete, starting tests");
        const npmCI = spawn('npm', ['run', 'ci']);
        npmCI.stdout.on('data', function(data) {
            console.log(data.toString());
        });
        npmCI.stderr.on('data', function(data) {
            console.log(data.toString());
        });
        npmCI.on('close', (code) => {
            console.log("Test run complete");
            process.exit(code);
        });
    })
});
