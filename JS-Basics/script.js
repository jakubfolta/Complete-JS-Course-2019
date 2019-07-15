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
* Basic operators
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

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
