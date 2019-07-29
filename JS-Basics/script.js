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

/*
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

console.log('Does Mark has higher BMI than John?...... ' + compareBMI);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}

*/

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

/*

var firstName = 'John';
var age = 24;

// Ternary operator
age >= 24 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 16 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink + '.' );


if (age >= 16) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

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

*/

/***************************************
* Truthy and falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*

var height;

height = '23'

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable is not defined.');
}

// Equality operators
if (height === 23) {
    console.log('The == operator does type coercion!')
}

*/

/***************************************
* Coding Challenge 2
*/

/*
var johnTeamScore, johnTotalScore, mikeTeamScore, mikeTotalScore, maryTeamScore, maryTotalScore, johnAverage, mikeAverage, maryAverage, i;

johnTeamScore = [89, 120, 108];
mikeTeamScore = [89, 1720, 109];
maryTeamScore = [89, 8120, 103];
johnTotalScore = 0;
mikeTotalScore = 0;
maryTotalScore = 0;


for (i in johnTeamScore) {
    johnTotalScore += johnTeamScore[i];
}
johnAverage = Math.floor(johnTotalScore / johnTeamScore.length);
console.log('John\'s team average: ' + johnAverage);

for (i in mikeTeamScore) {
    mikeTotalScore += mikeTeamScore[i];
}
mikeAverage = Math.floor(mikeTotalScore / mikeTeamScore.length);
console.log('Mike\'s team average: ' + mikeAverage);


for (i in maryTeamScore) {
    maryTotalScore += maryTeamScore[i];
}
maryAverage = Math.floor(maryTotalScore / maryTeamScore.length);
console.log('Mary\'s team average: ' + maryAverage);

switch (true) {
    case johnAverage > mikeAverage && johnAverage > maryAverage:
        console.log('John has the highest average: ' + johnAverage);
        break;
    case johnAverage > mikeAverage && johnAverage === maryAverage:
        console.log('John and Mary have the same average of ' + johnAverage + ' and higher than Mike.');
        break;
    case johnAverage > maryAverage && johnAverage === mikeAverage:
        console.log('John and Mike have the same average of ' + johnAverage + ' and higher than Mary.');
        break;

    case mikeAverage > johnAverage && mikeAverage > maryAverage:
        console.log('Mike has the highest average: ' + mikeAverage);
        break;
    case mikeAverage > johnAverage && mikeAverage === maryAverage:
        console.log('Mike and Mary have the same average of ' + mikeAverage + ' and higher than John.');
        break;
    case mikeAverage > maryAverage && mikeAverage === johnAverage:
        console.log('Mike and John have the same average of ' + mikeAverage + ' and higher than Mary.');
        break;

    case maryAverage > mikeAverage && maryAverage > johnAverage:
        console.log('Mary has the highest average: ' + maryAverage);
        break;
    case maryAverage > mikeAverage && maryAverage === johnAverage:
        console.log('Mary and John have the same average of ' + maryAverage + ' and higher than Mike.');
        break;
    case maryAverage > johnAverage && maryAverage === mikeAverage:
        console.log('Mary and Mike have the same average of ' + maryAverage + ' and higher than John.');
        break;
    case johnAverage === maryAverage && johnAverage === mikeAverage:
        console.log('John, Mary and Mike have exactly the same average of: ' + johnAverage + ' !');
        break;
}

*/

/***************************************
* Functions
*/

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);












































































