# HTML Document Template Processor

This Node.js application processes HTML document templates using JSON file data. The primary purpose of this app is to automate the generation of customized HTML documents by merging template files with dynamic data stored in JSON files.

## Project Structure

The project is organized into the following folders:

```
html-template-processor/
│
├── src/
│   ├── templates/
│   │   ├── source_template_1.html
│   │   └── source_template_2.txt
│   ├── data/
│   │   ├── data_file_1.json
│   │   └── data_file_2.json
│   ├── scripts/
│   │   ├── processTemplate.js
│   │   └── utils.js
│   └── index.js
│
├── temp/
│   └── processed/
│       ├── output_1.html
│       └── output_2.html
│
├── package.json
└── README.md
```

### Folder Descriptions

- **src/**: Contains the source code for the application.
  - **assets/**: Stores the HTML document templates and json data files.
  - **scripts/**: Contains the JavaScript files for processing the templates.
    - `processTemplate.js`: Script for processing the templates with JSON data.
  - `index.js`: Entry point for the application.

- **temp/**: Stores temporary files generated during processing.
  - **processed/**: Contains the processed HTML files after merging with JSON data.

- **package.json**: Contains the project metadata and dependencies.

- **README.md**: This file, providing an overview of the project.

## Usage

1. **Install Dependencies**: Run `npm install` to install the required dependencies.
2. **Run the Application**: Execute `node src/index.js` to process the templates with the JSON data.
3. **View Processed Files**: The processed HTML files will be available in the `temp/output/` directory.

## Example

1. See that the temp/output folder is empty
2. Run the command 'node src/index.js ResumeTemplates/simple_resume.html joe_shmos_profile.json joe_shmos.html'. This command reads the simple_resume.html template file and the joe_shmos_profile.json data file and injects the data into the template in order to generate the output html resume file.
3. Check the output under temp/output to see the result.

## Scripts

- **processTemplate.js**: This script reads an HTML template and a corresponding JSON file, merges the data, and outputs the processed HTML file.