const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

const templateDir = path.join(__dirname, '../assets/templates');
const dataDir = path.join(__dirname, '../assets/data');
const outputDir = path.join(__dirname, '../../temp/output');

function processTemplate(templateName, dataName, outputName) {
    const templatePath = path.join(templateDir, templateName);
    const dataPath = path.join(dataDir, dataName);
    const outputPath = path.join(outputDir, outputName);

    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    const processedContent = mergeDataIntoTemplate(templateContent, jsonData);

    fs.writeFileSync(outputPath, processedContent, 'utf-8');
    console.log(`Processed template saved to ${outputPath}`);
    return processedContent;
}

function mergeDataIntoTemplate(templateContent, jsonData) {
    return mustache.render(templateContent, jsonData);
}

if (require.main === module) {
    processTemplate();
}

module.exports = { processTemplate };