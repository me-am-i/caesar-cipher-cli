const fs = require('fs').promises;
const path = require('path');
const args = require('./input');

if (args.output) {
    var fileName = path.normalize(args.output);
}
// module.exports = async () => {
//     const asyncFunc = async () => await fs.appendFile('output.txt', 'demo text', 'utf8');
//     //asyncFunc().then(console.log)
//     return await asyncFunc();
// };

const toWrite = async (content) => {
    try {
        return await fs.appendFile(fileName, content + "\r\n");
    }
    catch (error) {
        console.error("error: File can't be write, please ensure that path is correct and filesystem is writable", error.path)
        process.exit(1);
    }
};

module.exports = toWrite;
