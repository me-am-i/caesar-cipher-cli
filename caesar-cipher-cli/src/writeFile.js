const fs = require('fs').promises;
const path = require('path');
const { output } = require('./input');

let fileName = '';
if (output) {
    fileName = path.normalize(output);
}

module.exports = async (content) => {
    try {
        if (!output) {
           return;
        }
        return await fs.appendFile(fileName, content + "\r\n");
    }
    catch (error) {
        console.error("error: File can't be write, please ensure that path is correct and filesystem is writable", error.path)
        process.exit(1);
    }
};
