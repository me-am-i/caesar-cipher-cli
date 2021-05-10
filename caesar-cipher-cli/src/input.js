const program = require('commander');

program
    .storeOptionsAsProperties(false)
    .requiredOption('-a, --action <type>', 'an action encode/decode')
    .requiredOption('-s, --shift <number>', 'a shift')
    .option('-i, --input <path_to_file>', 'an input file')
    .option('-o, --output <path_to_file>', 'an output file')
    .description('caesar cipher CLI tool');

program.parse(process.argv);

let { action, shift, input, output } = program.opts();

if (action !== 'encode' && action !== 'decode') {
    process.stderr.write(`error: wrong value for action\r\n`);
    process.exit(1);
}

else if (isNaN(Number(shift))) {
    process.stderr.write(`error: wrong value for shift\r\n`);
    process.exit(1);
}

else if (input == output && input) {
    process.stderr.write(`error: output file can\`t point to input file \r\n`);
    process.exit(1);
}

shift = Number(shift);

module.exports = { action, shift, input, output };//program.opts();
