class logo {
    constructor(shape, color, text){
        this.shape = shape;
        this.color = color;
       // this.size = size;
        this.text = text;
    }
    printLogo(){console.log("my image")};

}


const logo1 = new logo("square", "red", "hello");
console.log(logo1);