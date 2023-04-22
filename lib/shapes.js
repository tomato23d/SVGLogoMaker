
class Shape {
    constructor(){
        this.color = "";
    }
    setColor(color){
        this.color = color;
    }
    };

 class Triangle extends Shape {
    constructor(text){
        super();
         this.text = text;
     }
     render(){return `
     <svg width="300" height="200" viewBox="0 0 298 298" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
     <polygon points="150,20 150,150 10,80 150,20" stroke="${this.color}" stroke-width="10" fill="none" />
     <text x="80" y ="90">${this.text}</text>
     </svg>
      `
    }
 };

 class Circle extends Shape {
    constructor(text){
       super();
       this.text = text;
     }
     render(){return `
     <svg width="300" height="200" viewBox="0 0 298 298" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
     <circle cx="150" cy="150" r="75" fill="${this.color}" />
     <text x="140" y ="150">${this.text}</text>
     </svg>`
 };
 };

 class Square extends Shape {
    constructor(text){
        super();
        this.text = text;
     }
     render(){return `
     <svg width="300" height="200" viewBox="0 0 298 298" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
     <rect x="70" y="70" width="160" height="160" fill="${this.color}" stroke-width="4" stroke="pink" />
     <text x="140" y ="150">${this.text}</text>
     </svg>`
 };
};

 module.exports = {Triangle, Circle, Square} ;

