# Template Engine - Employee Summary

This app is a software engineering team generator command line application. This can be used by managers to easily create employee profile summaries, based on a series of questions and is output into a template. 

You may begin by opening the app.js file in the terminal and typing "node app.js".
This will prompt a series of questions first asking you (the manager) the following:
  1. What is your name?
  2. What is your work ID?
  3. What is your email?
  4. What is your Office Number?
After these fields have been filled out, the next prompt will ask if you have anymore employees?
If you select 'no' the output file will be created. And no further action will be required.
If you select yes, this will prompt another series of questions relating to that employee, with different questions depending on if they are an intern or engineer.
Once all desired employees have been entered and the 'no' option has been selected for additional employees, an output file titled team.html will be created in the output folder.

Enjoy!


## Instructions

The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

* The app will run as a Node CLI to gather information about each employee.

The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

There are also unit tests to help you build the classes necessary.

```app.js         // Runs the application
```

* The different employee types should all inherit some methods and properties from a base class of `Employee`.

* In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

### Classes
The app will have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory should all pass.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The application will generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)



