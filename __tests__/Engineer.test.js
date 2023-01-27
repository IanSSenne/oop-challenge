const Engineer = require("../lib/Engineer");
describe("The Engineer", () => {
	it("should reflect the values provided to it", () => {
		const engineer = new Engineer("John Doe", 1, "email@email.email", "github");
		expect(engineer.name).toBe("John Doe");
		expect(engineer.id).toBe(1);
		expect(engineer.email).toBe("email@email.email");
		expect(engineer.github).toBe("github");
	});
	it("should be able to get the github username", () => {
		const engineer = new Engineer("John Doe", 1, "email@email.email", "github");
		expect(engineer.getGithub()).toBe("github");
	});
	it("should be able to get the role", () => {
		const engineer = new Engineer("John Doe", 1, "email@email.email", "github");
		expect(engineer.getRole()).toBe("Engineer");
	});
});