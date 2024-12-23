const { processTemplate } = require('./scripts/processTemplate');

// ...existing code...

const args = process.argv.slice(2);
if (args.length !== 3) {
    console.error('Usage: node processTemplate.js <templateName> <dataName> <outputName>');
    process.exit(1);
}
const [templateName, dataName, outputName] = args;
processTemplate(templateName, dataName, outputName);