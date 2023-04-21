const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('../lib/shapes');


 function drawShape(shape, color, text){
  const shape1 = new Shape(shape, color, text);
  shape1.printLogoShape();
 }

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
      message: 'Please the logo text, up to three letters',
    },
  ];

inquirer.prompt(questions)
.then((answers)=>{
    section = drawShape(answers);
    const filename = "logoShow.html";
 fs.writeFile(filename, section, (err) =>
{ err ? console.log(err) : console.log('Success!')});

})
