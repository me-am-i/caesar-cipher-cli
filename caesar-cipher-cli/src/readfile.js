const fs = require('fs').promises;
const path = require('path');
const input = require('./input');

const filename = input.input;

module.exports = async () => {
 const asyncFunc = async () => await fs.readFile(filename, 'utf8');
 return await asyncFunc();
};





