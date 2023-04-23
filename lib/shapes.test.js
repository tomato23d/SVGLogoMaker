const Triangle = require('./shapes');

describe('Triangle', () => {
    const shape1 = new Triangle("AAA");
    shape1.setColor("blue");
    expect(shape1.render()).toEqual('<svg width="300" height="200" viewBox="0 0 298 298" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="150,20 150,150 10,80 150,20" stroke="blue" stroke-width="10" fill="none" /><text x="80" y ="90">AAA</text></svg>'
        );

})