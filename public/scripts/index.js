const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('../lib/shapes');


const questions = [
    {
      type: 'list',
      name: 'shape',
      message: 'Please select the logo shape',
      choices:  ["circle", "square", "triangle"],
    },
    {
      type: 'list',
      name: 'color',
      message: 'Please select the logo color',
      choices:  ["green", "red", "blue", "orange", "pink", "yellow"],
    },
    {
      type: 'input',
      name: 'text',
      message: 'Please  enter the logo text, up to three letters',
    },
  ];

inquirer.prompt(questions)
.then((answers)=>{
    let userChoice;
    if (answers.shape ==="circle"){
      userChoice = new Circle(answers.text);
      userChoice.setColor(answers.color);
    }
    else if (answers.shape ==="triangle"){
      userChoice = new Triangle(answers.text);
      userChoice.setColor(answers.color);
    }
    else {
      userChoice = new Square(answers.text);
      userChoice.setColor(answers.color);
    }
    console.log("userChoice "+ userChoice);
    console.log("render " +userChoice.render());
    const filename = `logo_${answers.shape}_${answers.color}.svg`;
 fs.writeFile(filename, userChoice.render(), (err) =>
{ err ? console.log(err) : console.log('Success!')});

})
