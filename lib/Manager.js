const Employee = require("./Employee");
const inquirer = require("inquirer");

module.exports = class Manager extends Employee{
	constructor(name, employeeId, email, officeNumber) {
		super(name, employeeId, email);
		this.officeNumber = officeNumber;
	}
	static from(data) {
		return new Manager(data.name, data.employeeId, data.email, data.officeNumber);
	}
	getRole() {
		return "Manager";
	}
	static async prompt() {
		const answers = await inquirer.prompt([
			{
				type: "input",
				name: "name",
				message: "What is the name of the manager?",
			},
			{
				type: "input",
				name: "employeeId",
				message: "What is the employee ID of the manager?",
				validate: (v) => !Number.isNaN(+v),
			},
			{
				type: "input",
				name: "email",
				message: "What is the email of the manager?",
			},
			{
				type: "input",
				name: "officeNumber",
				message: "What is the office number of the manager?",
				validate: (v) => !Number.isNaN(+v),
			},
		]);
		return new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
	}

}