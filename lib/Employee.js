module.exports = class Employee{
	constructor(name, employeeId, email) {
		this.name = name;
		this.id = employeeId;
		this.email = email;
	}
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return "Employee";
	}
}