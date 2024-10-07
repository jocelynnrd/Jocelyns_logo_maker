import fs from 'fs'; //file system module to interact with the file system
import inquirer from 'inquirer'; // Package for user prompts
import { Circle, Square, Triangle } from './shapes.js'; // This should also point to the correct file

 export async function generate() {
    const {text, textColor, shape } = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to 3 characters):',
            validate: input => input.length <= 3 || 'Text must be up to 3 characters long.',
        },
        {
            type: 'input', 
            name: 'textColor', // This should match the variable name you use later
            message: 'Enter text color (keyword or hex code):',
            default: '#ff69b4' // Default to hot pink
        },
        {
           type: 'list',
           name: 'shape',
           message: 'choose a shape',
           choices: ['Circle', 'Square', 'Triangle'],
        }
    ]);

const shapeColor = '#FFB6C1'; // BABY PINK COLOR

let shapeInstance; 

    switch (shape) {
        case 'Circle':
            shapeInstance = new Circle();
            break;
    case 'Square':
        shapeInstace = new Square();
        break;
    case 'Triangle':
        shapeInstace = new Triangle();
        break;

}
shapeInstace.setColor(shapeColor);
const svgConent = shapeInstance.render();

const finalSVG = `
    <svg width="300" height="200">
        ${svgContent}
        <text fill="${textColor}" font-size="50" text-anchor="middle" x="150" y="100">${text}</text>
    </svg>
    `;
    fs.writeFileSync('logo.svg', finalSVG);
    console.log('Generated logo.svg');
}

