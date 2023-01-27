const Manager = require("../lib/Manager");
describe("The Manager", () => {
	it("should reflect the values provided to it", () => {
		const manager = new Manager("John Doe", 1, "email@email.email", 1);
		expect(manager.name).toBe("John Doe");
		expect(manager.id).toBe(1);
		expect(manager.email).toBe("email@email.email");
		expect(manager.officeNumber).toBe(1);
	});
	it("should be able to get the office number", () => {
		const manager = new Manager("John Doe", 1, "email@email.email", 1);
		expect(manager.officeNumber).toBe(1);
	})
	it("should be able to get the role", () => {
		const manager = new Manager("John Doe", 1, "email@email.email", 1);
		expect(manager.getRole()).toBe("Manager");
	});
});
