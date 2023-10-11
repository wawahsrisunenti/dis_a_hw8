// question1.js

const geometry = require('./modGeometry');

const squareSideLength = 5;
console.log(`The area of a square with side length ${squareSideLength} is ${geometry.calculateSquareArea(squareSideLength)}`);
console.log(`The perimeter of a square with side length ${squareSideLength} is ${geometry.calculateSquarePerimeter(squareSideLength)}`);

const rectangleLength = 6;
const rectangleWidth = 4;
console.log(`The area of a rectangle with length ${rectangleLength} and width ${rectangleWidth} is ${geometry.calculateRectangleArea(rectangleLength, rectangleWidth)}`);
console.log(`The perimeter of a rectangle with length ${rectangleLength} and width ${rectangleWidth} is ${geometry.calculateRectanglePerimeter(rectangleLength, rectangleWidth)}`);
