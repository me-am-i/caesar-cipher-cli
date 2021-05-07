const input = require('./caesar-cipher-cli');

const file = require('./caesar-cipher-cli/src/readfile.js');

//file().then(console.log)
(async () => {
    let b = await file();
    console.log(b)
})(file)
//console.log(file())


if (input.action == 'encode'){
;
}
