const args = require('./src/input');

const file = require('./src/readFile.js');

try {

//(async () => await file())().then(console.log)

//const writeFile = require('./src/writeFile.js');

// const encode = require('./src/coder')
//
// console.log(encode("Lazy фывфывф dog", 27));


// writeFile();
// //file().then(console.log)
// (async () => {
//     let b = await file();
//     console.log(b)
// })(file)
//console.log(file())

//
    if (input.action == 'encode'){

    }
//const toRead = require('./src/writeFile.js');

//(async () => await toRead('/home/user/RSSchool/NodeJS/task1/caesar-cipher-cli/caesar-cipher-cli/data.txt'))().then(console.log)

}

catch(error) {
    console.error("error: input error", error.path)
    process.exit(1);
}
