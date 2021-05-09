const fs = require('fs').promises;
const path = require('path');
const args = require('./input');

const fileName = path.normalize(args.input);

module.exports = async () => {
    try {
        return await fs.readFile(fileName, 'utf8');
    } catch (error) {
        console.error("error: File doesn't exist or not accessible, please ensure that path is correct", error.path) // from creation or business logic
        process.exit(1);
  }
};