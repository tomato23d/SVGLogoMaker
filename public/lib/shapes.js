
class Shape {
    constructor(shape, color, text, output){
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.output = printLogoShape()
    }
    printLogoShape(){
        if(this.shape ==="circle"){this.output = (`<g>
        <circle cx="150" cy="150" r="75" fill="${this.color}" />
        <text x="60" y ="80">hello world${this.text}</text>
        </g>`)}
        else if(this.shape ==="square"){this.output = (`<g opacity = 0.5>
        // <rect x="70" y="70" width="160" height="160" fill="${this.color}" stroke-width="4" stroke="pink" />
        // <text x="60" y ="80">hello world${this.text}</text>
        // </g>`)}
        else if(this.shape ==="triangle"){this.output = (`<g>
        // <polygon points="150,20 150,150 10,80 150,20" stroke="${this.color}" stroke-width="10" fill="none" />
        //   <text x="60" y ="80">hello world${this.text}</text>
        // </g>`)}
        };
    };

module.exports = Shape;

///////////////////////////////////////////

class Triangle  extends Shape {
    constructor(shape, color, text, output){
        super(color, text, output);
        this.shape = "triangle";
    }
};

class Circle  extends Shape {
    constructor(shape, color, text, output){
        super(color, text, output);
        this.shape = "circle";
    }
};

class Square  extends Shape {
    constructor(shape, color, text, output){
        super(color, text, output);
        this.shape = "square";
    }
};
///
const shape1 = new Triangle("triangle", color, output);
const shape2 = new Circle("circle", color, output);
const shape3 = new Square("square", color, output);


