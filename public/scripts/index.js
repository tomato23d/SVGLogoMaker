const inquirer = require('inquirer');
const fs = require('fs');

const askShape = ({shape})=>
`<g>
<${shape} cx="90" cy="90" r="75" fill="orange" />
<text x="60" y ="80">hello world</text>
</g>`

const questions = [
    {
      type: 'list',
      name: 'shape',
      message: 'Please select the logo shape',
      choices: ["circle", "rect", "polygon"],
    },];

inquirer.prompt(questions)
.then((answers)=>{
    theFile = askShape(answers);
    const filename = "logoShow1.html";
 fs.writeFile(filename, theFile, (err) =>
{ err ? console.log(err) : console.log('Success!')});

})
