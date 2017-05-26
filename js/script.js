
// I sposób

var a = 8;
var h = 6;
var triangleAreaFirst = a*h/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleAreaFirst);

// II sposób - z wykorzystaniem funkcji prompt

var side = prompt('Enter the side of the triangle','8');
var height = prompt('Enter the height of the triangle','6');
var triangleAreaSecond = side*height/2;
console.log('Triangle field with base a: ' + side + ' and height h: ' + height + ' is equal to: ' + triangleAreaSecond);
