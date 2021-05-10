const { action, shift, input } = require('./src/input');
const readFile = require('./src/readFile');
const writeFile = require('./src/writeFile');
const encode = require('./src/coder')

try {
    if (action == 'encode' && input) {
        (async () => await readFile())()
            .then((str) => encode(str, shift))
            .then((content) => writeFile(content))

    }
    else if (action == 'decode' && input) {
        (async () => await readFile())()
            .then((str) => encode(str, -shift))
            .then((content) => writeFile(content))

    }

}
catch(error) {
    console.error("error: input error", error.path, error)
    process.exit(1);
}
