// Your code goes here
var a = prompt('Enter number for triangle side length');
var b = prompt('Enter number for triangle side length');
var c = prompt('Enter number for triangle side length');

if (a === null || a.length === 0 || isNaN(+a) ||
    b === null || b.length === 0 || isNaN(+b) ||
    c === null || c.length === 0 || isNaN(+c) 
) {
        console.log('Input values should be ONLY numbers');
    } else if (a <= 0 || b <= 0 || c <= 0) {
        console.log('A triangle must have 3 sides with a positive definite length ');
    } else if (a + b <= c || a + c <= b || b + c <= a) {
        console.log('Triangle doesn’t exist');
    } else if (a === b && b === c) {
        console.log('Equilateral triangle')
    }
      else if (a === b|| a === c || b === c) {
        console.log('Isosceles triangle')
    } else {
        console.log('Scalene triangle');
    }

