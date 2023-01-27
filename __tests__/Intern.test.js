const Intern = require("../lib/Intern");
describe("The Intern", () => {
	it("should reflect the values provided to it", () => {
		const intern = new Intern("John Doe", 1, "email@email.email", "school");
		expect(intern.name).toBe("John Doe");
		expect(intern.id).toBe(1);
		expect(intern.email).toBe("email@email.email");
		expect(intern.school).toBe("school");
	});
	it("should be able to get the school", () => {
		const intern = new Intern("John Doe", 1, "email@email.email", "school");
		expect(intern.getSchool()).toBe("school");
	});
	it("should be able to get the role", () => {
		const intern = new Intern("John Doe", 1, "email@email.email", "school");
		expect(intern.getRole()).toBe("Intern");
	});
});