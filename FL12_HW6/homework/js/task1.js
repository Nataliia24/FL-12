// Your code goes here
var a = prompt('Enter value a for quadratic equation (ax2 + bx + c = 0)');
var b = prompt('Enter value b for quadratic equation (ax2 + bx + c = 0)');
var c = prompt('Enter value c for quadratic equation (ax2 + bx + c = 0)');
const four = 4;
const two = 2;

if (!isNaN(parseFloat(a)) && isFinite(a) && parseFloat(a) != 0 && !isNaN(parseFloat(b)) && isFinite(b) && !isNaN(parseFloat(c)) && isFinite(c)) {
    var d = b * b -four * a * c;
    if (d < 0) {
        console.log('No solution');
    } else {
        if (d == 0) {
            var x =-b / (two * a);
            console.log(`x=${x}`);
        } else {
            var x1 = (-b - Math.sqrt(d))/(two * 2);
            var x2 = (-b + Math.sqrt(d))/(two * 2);
            console.log(`x1=${x1}, x2=${x2}`);
        }
    }
} else {
    console.log('Invalid input data');
}

