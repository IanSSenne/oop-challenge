const inquirer = require("inquirer");
const Employee = require("./Employee");

module.exports = class Intern extends Employee {
	constructor(name, employeeId, email, school) {
		super(name, employeeId, email);
		this.school = school;
	}
	getSchool() {
		return this.school;
	}
	getRole() {
		return "Intern";
	}
	static async prompt() {
		const answers = await inquirer
			.prompt([
				{
					type: "input",
					name: "name",
					message: "What is the name of the intern?",
				},
				{
					type: "input",
					name: "employeeId",
					message: "What is the employee ID of the intern?",
					validate: (v_1) => !Number.isNaN(+v_1),
				},
				{
					type: "input",
					name: "email",
					message: "What is the email of the intern?",
				},
				{
					type: "input",
					name: "school",
					message: "What school does the intern attend?",
				},
			]);
		return new Intern(
			answers.name,
			answers.employeeId,
			answers.email,
			answers.school
		);
	}
};
