const Manager = require("./lib/Manager");

const manager = new Manager();

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const html = require("./lib/htmlRenderer");

const employees = []

const initialPrompts = [{
        type: 'input',
        name: 'managerName',
        message: "Hello. What's your name?",
        validate: function validateName(name) {
            var reg = /^[a-zA-Z ]+$/;
            return reg.test(name) || "Please enter a valid name"
        }
    },
    {
        type: 'input',
        message: "What's your work Id?",
        name: 'id',
        validate: function validateID(ID) {
            var reg = /^\d+$/;
            return reg.test(ID) || "Please enter a valid number";
        }
    },
    {
        type: 'input',
        message: "What's your email?",
        name: 'email',
        validate: function (email) {
            var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return reg.test(email) || "Please enter a valid email";
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your Office Number?',
        validate: function validateNum(num) {
            var reg = /^\d+$/;
            return reg.test(num) || "Please enter a valid number";
        }
    }
]

const employeePrompts = [{
        type: 'input',
        message: "What's your employee's name?",
        name: 'name',
        validate: function validateName(name) {
            var reg = /^[a-zA-Z]+$/;
            return reg.test(name) || "Please enter a valid name"
        }
    },
    {
        type: 'input',
        message: "What's is their work ID?",
        name: 'id',
        validate: function validateID(ID) {
            var reg = /^\d+$/;
            return reg.test(ID) || "Please enter a valid number";
        }

    },
    {
        type: 'input',
        message: "What's your employee's email?",
        name: 'email',
        validate: function (email) {
            var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return reg.test(email) || "Please enter a valid email";
        }
    },
    {
        type: 'list',
        name: 'jobtitle',
        message: 'What is their job title?',
        choices: ['Engineer', 'Intern']
    }
]


const engineerPrompt = {
    type: 'input',
    name: 'github',
    message: "what is your engineer's github username?",
    validate: function validateName(name) {
        var reg = /^[a-zA-Z0-9]+$/;
        return reg.test(name) || "Please enter a valid username"
    }

};

const internPrompt = {
    type: 'input',
    name: 'school',
    message: 'What school does your intern go to?',
    validate: function validateName(name) {
        var reg = /^[a-zA-Z ]+$/;
        return reg.test(name) || "Please enter a valid School name"
    }
};

function managerQuestion() {
    inquirer.prompt(initialPrompts).then(function (answers) {
        let employee = new Manager(answers.managerName, answers.id, answers.email, answers.officeNumber)
        employees.push(employee)
        console.log(employees)
        moreEmployees(employees);
    })
}

function employeeQuestions() {
    inquirer.prompt(employeePrompts).then(function (answers) {
        if (answers.jobtitle === 'Engineer') {
            inquirer.prompt(engineerPrompt).then((answers2) => {
                let employee = new Engineer(answers.name, answers.id, answers.email, answers2.github)
                employees.push(employee)
                console.log(employees)
                moreEmployees(employees);
            })

        } else if (answers.jobtitle === 'Intern') {
            inquirer.prompt(internPrompt).then((answers2) => {
                let employee = new Intern(answers.name, answers.id, answers.email, answers2.school)
                employees.push(employee)
                console.log(employees)
                moreEmployees(employees);
            })
        }

    })
}

function moreEmployees(employees) {
    inquirer.prompt({
        type: 'confirm',
        name: 'continue',
        message: 'Do you you have more Employees to enter?'
    }).then((answers) => {
        if (answers.continue) {
            employeeQuestions();
        } else {
            fs.writeFile(outputPath, render(employees), (err) => err ? console.log("That did not work.") : console.log("Success! Your team.html page has been created in the Output folder!"))
        }
    })

}

managerQuestion()