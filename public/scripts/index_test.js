const inquirer = require('inquirer');

const fs = require('fs');

class logoHTML{
    constructor(shape, color, text){
    this.shape = shape;
    this.color = color;
    this.text = text;
    this.print = [];
};
    drawShape(){shapeRender(this.shape)}

}


// shape1 = "circle";
// color1 = "green";
// text1 = "hello";

const askShape = ({shape})=>
`<g> ${shape}
<circle cx="90" cy="90" r="75" fill="orange" />
<text x="60" y ="80">hello world</text>
</g>`

const questions = [
    {
      type: 'list',
      name: 'shape',
      message: 'Please select the logo shape',
      choices: ["circle", "rect", "polygon"]
    },];

inquirer.prompt(questions)
.then((answers)=>{
    theFile = askShape(answers);
    const filename = "logoShow1.html";
 fs.writeFile(filename, theFile, (err) =>
{ err ? console.log(err) : console.log('Success!')});

})

const logo1 = new logo("square", "red", "hello");

function shapeRender(){
    if (shape1 === "circle"){printCircle}
    else if (shape1 === "square"){printSquare};
}

function printCircle(){
    const gSection = `<g>
    <circle cx="90" cy="90" r="75" fill="orange" />
    <text x="60" y ="80">hello world</text>
  </g>`
};

function printSquare(){
    `<g>
    <rect x="10" y="50" width="150" height="100" fill="lime" stroke-width="4" stroke="pink" />
    <text x="60" y ="80">hello world</text>
    </g>`
};


const heyDoc = 
`<!DOCTYPE html svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<head>
  <meta charset="UTF-8" />
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./styles/style1.css"/>
  <title>HTML Display</title>
</head>
<body>
  <header> 
       <h5>exercises for the week</h5>
       </header>  

<svg width="300" height="200" viewBox="0 0 298 198" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect fill="white" stroke="white" x="-70" y="-10" width="295" height="195"/>

<g>
  <circle cx="90" cy="90" r="75" fill="orange" />
  <text x="60" y ="80">hello world</text>
</g>

<g>
<rect x="10" y="50" width="150" height="100" fill="lime" stroke-width="4" stroke="pink" />
<text x="60" y ="80">hello world</text>
</g>

<g>
  <polygon points="150,20 150,150 10,80 150,20" stroke="red" stroke-width="10" fill="none" />
	<text x="60" y ="80">hello world</text>
</g>

</svg>

</body>
</html>`

const filename = "logoShow.html";
 fs.writeFile(filename, logoHTML, (err) =>
{ err ? console.log(err) : console.log('Success!')});
            