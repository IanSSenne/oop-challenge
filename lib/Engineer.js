const inquirer = require("inquirer");
const Employee = require("./Employee");
module.exports = class Engineer extends Employee{
	constructor(name, employeeId, email, github) {
		super(name, employeeId, email);
		this.github = github;
	}
	getGithub() {
		return this.github;
	}
	getRole() {
		return "Engineer";
	}
	static async prompt() {
		const answers = await inquirer.prompt([
			{
				type: "input",
				name: "name",
				message: "What is the name of the engineer?",
			},
			{
				type: "input",
				name: "employeeId",
				message: "What is the employee ID of the engineer?",
				validate: (v_1) => !Number.isNaN(+v_1),
			},
			{
				type: "input",
				name: "email",
				message: "What is the email of the engineer?",
			},
			{
				type: "input",
				name: "github",
				message: "What is the github username of the engineer?",
			},
		]);
		return new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
	}
}