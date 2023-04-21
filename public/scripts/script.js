const shapeChoices = ["circle", "square", "triangle"];

class logo {
    constructor(shape, color, output){
        this.shape = shape;
        this.color = color;
        this.output = output;
    }
    
printLogoShape(){
if(this.shape ==="circle"){this.output = (`<g>
<circle cx="150" cy="150" r="75" fill="orange" />
<text x="60" y ="80">hello world</text>
</g>`)}
else if(this.shape ==="square"){drawSquare()}
else if(this.shape ==="triangle"){drawTriangle()}
};}

// drawCircle(){output = (`<g>
// <circle cx="150" cy="150" r="75" fill="orange" />
// <text x="60" y ="80">hello world</text>
// </g>`) ; console.log(output)}

// drawSquare(){output = (`<g opacity = 0.5>
// <rect x="70" y="70" width="160" height="160" fill="lime" stroke-width="4" stroke="pink" />
// <text x="60" y ="80">hello world</text>
// </g>`); console.log(output)}

// drawTriangle(){output = (`<g>
// <polygon points="150,20 150,150 10,80 150,20" stroke="red" stroke-width="10" fill="none" />
//   <text x="60" y ="80">hello world</text>
// </g>`); console.log(output)}
// };

const logo1 = new logo("circle", "green");
console.log(logo1);
console.log(logo1.printLogoShape());