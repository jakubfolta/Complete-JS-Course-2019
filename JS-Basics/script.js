/*******************
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith'
var age = 26;

var fullAge = true;
console.log(fullAge);

var job;

console.log(job);

job = 'Teacher';
console.log(job);
console.log(firstName + lastName + fullAge);
*/
/*
var firstName = 'John';
var age = 27;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name? ');
console.log('His last name is ' + lastName + '.')
*/

/********************************
 Basic operators
*/

/*
// Math operators

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);
console.log(now - 2);

// Logical operators

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'John');
var x;
console.log(typeof x);
*/

/*************************
* Operator precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);


// Grouping

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);
console.log(y);

x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
x--;
*/

/*************************
* Coding Challenge
*/

const markHeight = 1.89;
const markWeight = 89;
const johnHeight = 1.78;
const johnWeight = 69;

console.log('Mark height is ' + markHeight + 'cm, and his weight is ' + markWeight + 'kg.')

console.log('John height is ' + johnHeight + 'cm, and his weight is ' + johnWeight + 'kg.')


var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI, johnBMI)
compareBMI = markBMI > johnBMI;

//console.log('Does Mark has higher BMI than John?...... ' + compareBMI);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
