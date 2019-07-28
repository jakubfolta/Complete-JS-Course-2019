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

var johnTeamScore, johnTotalScore, mikeTeamScore, mikeTotalScore, maryTeamScore, maryTotalScore, johnAverage, mikeAverage, maryAverage, i;

johnTeamScore = [89, 120, 108];
mikeTeamScore = [89, 1720, 105];
maryTeamScore = [89, 8120, 103];
johnTotalScore = 0;
mikeTotalScore = 0;
maryTotalScore = 0;


for (i in johnTeamScore) {
    johnTotalScore += johnTeamScore[i];
}
johnAverage = johnTotalScore / johnTeamScore.length;
johnAverage = Math.floor(johnAverage);
console.log('John\'s team average: ' + johnAverage);

for (i in mikeTeamScore) {
    mikeTotalScore += mikeTeamScore[i];
}
mikeAverage = mikeTotalScore / mikeTeamScore.length;
mikeAverage = Math.floor(mikeAverage);
console.log('Mike\'s team average: ' + mikeAverage);

for (i in maryTeamScore) {
    maryTotalScore += maryTeamScore[i];
}
maryAverage = maryTotalScore / maryTeamScore.length;
maryAverage = Math.floor(maryAverage);
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











































































