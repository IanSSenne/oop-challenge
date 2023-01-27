const Employee = require("../lib/Employee");
describe("The Employee", () => {
	it("should reflect the values provided to it", () => {
		const employee = new Employee("John Doe", 1, "email@email.email");
		expect(employee.name).toBe("John Doe");
		expect(employee.id).toBe(1);
		expect(employee.email).toBe("email@email.email");
	});
	it("should be able to get the name", () => {
		const employee = new Employee("John Doe", 1, "email@email.email");
		expect(employee.getName()).toBe("John Doe");
	});
	it("should be able to get the id", () => {
		const employee = new Employee("John Doe", 1, "email@email.email");
		expect(employee.getId()).toBe(1);
	});
	it("should be able to get the email", () => {
		const employee = new Employee("John Doe", 1, "email@email.email");
		expect(employee.getEmail()).toBe("email@email.email");
	});
	it("should be able to get the role", () => {
		const employee = new Employee("John Doe", 1, "email@email.email");
		expect(employee.getRole()).toBe("Employee");
	});
})