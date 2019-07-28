/*********************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will be married soon.')
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will be married soon.')
}
*/

/*********************
* Boolean logic
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy!')
} else if (13 <= age && age < 20) {
    console.log(firstName + ' is a teenager!')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man!')
} else {
    console.log(firstName + ' is a man!')
}
*/

/***************************************
* The ternary operator and switch statements
*/

var firstName = 'John';
var age = 24;

// Ternary operator
age >= 24 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 16 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink + '.' );

/*
if (age >= 16) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

// Switch statement
var job = 'cop'
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' design houses.');
        break;
    default:
        console.log(firstName + ' does something else.')
}

age = 10;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy!');
        break;
    case 13 <= age && age < 20:
        console.log(firstName + ' is a teenager!');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man!');
        break;
    default:
        console.log(firstName + ' is a man!');
}

















































































