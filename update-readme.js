const fs = require('fs');

// Read the README file contents
const readmePath = './README.md';
const readmeContent = fs.readFileSync(readmePath, 'utf8');

// Replace the age value with the current age
const birthYear = 2003;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
const updatedContent = readmeContent.replace(/(\d+)\+years\+old/, `${age}+years+old`);

// Update the README file with the new content
fs.writeFileSync(readmePath, updatedContent);

console.log('README file updated successfully.');
