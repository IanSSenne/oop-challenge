const fs = require('fs');
const path = require('path');
module.exports = class Template{
	constructor(filePath) {
		this.filePath = path.resolve(__dirname, 'template', filePath);
		this.content = fs.readFileSync(this.filePath, 'utf8');
	}
	evaluate(params = {}) {
		let evaluatedContent = this.content;
		let keys = Object.keys(params).sort((a, b) => b.length - a.length);
		for (let key of keys) {
			evaluatedContent = evaluatedContent.replace(new RegExp(`{{${key}}}`, 'g'), params[key]);
		}
		return evaluatedContent;
	}
}