const program = require('commander');

program
    .storeOptionsAsProperties(false)
    .requiredOption('-a, --action <type>', 'an action encode/decode')
    .requiredOption('-s, --shift <number>', 'a shift')
    .option('-i, --input <path_to_file>', 'an input file')
    .option('-o, --output <path_to_file>', 'an output file');

program.parse(process.argv);

let { shift, action, input, output } = program.opts();

if (action !== 'encode' && action !== 'decode') {
    process.stderr.write(`error: wrong value for action\r\n`);
    process.exit(1);
}

if (isNaN(Number(shift))) {
    process.stderr.write(`error: wrong value for shift\r\n`);
    process.exit(1);
}

shift = Number(shift);

module.exports = { shift, action, input, output };//program.opts();
