const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Template = require("./src/Template");
const fs = require("fs/promises");
const path = require("path");
const indexFile = new Template("index.html");
const cards = {
	Manager: new Template("./components/cards/manager.html"),
	Engineer: new Template("./components/cards/engineer.html"),
	Intern: new Template("./components/cards/intern.html"),
};
let team = [];

Manager.prompt()
	.then(async (manager) => {
		team.push(manager);
		let finished = false;
		while (!finished) {
			let results = await inquirer.prompt(
				{
					type: "list",
					name: "type",
					message: "What type of employee would you like to add or Finished to exit?",
					choices: ["Engineer", "Intern", "Finished"],
				},
			);
			switch (results.type) {
				case "Engineer":
					team.push(await Engineer.prompt());
					break;
				case "Intern":
					team.push(await Intern.prompt());
					break;
				case "Finished":
					finished = true;
					break;
			}
			let html = indexFile.evaluate({
				cards: team.map((employee) => cards[employee.getRole()].evaluate(employee)).join("\n")
			})
			fs.writeFile("./dist/index.html", html);
			fs.copyFile(path.resolve(__dirname, "./src/template/main.css"), path.resolve(__dirname, "./dist/main.css"))
		}
	});
