import { Circle, Square, Triangle } from '../shapes.js';

describe('Shape classes', () => {
    test('Circle render method', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
 
    test('Square render method', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toEqual('<rect width="160" height="160" fill="blue" />');
    });

    test('Triangle render method', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    });
});