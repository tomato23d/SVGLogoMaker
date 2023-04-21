const drawShape = require('../public/scripts/index.js');

describe('drawShape', () => {
    const shape1 = new Shape("triangle", "green", "AB");
    expect(shape1.printLogoShape()).toEqual(
        `<g>
        <polygon points="150,20 150,150 10,80 150,20" stroke="green" stroke-width="10" fill="none" />
         <text x="60" y ="80">AB</text>
        </g>`);

})