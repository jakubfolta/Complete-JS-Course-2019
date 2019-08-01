'use strict';

/*
******************************************* VARIABLES AND DATA TYPES *************************************
*/

/*
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

/*
******************************************* VARIABLE MUTATION AND TYPE COERCION *************************************
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

/*
******************************************* BASIC OPERATORS *************************************
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

/*
******************************************* OPERATOR PRECEDENCE *************************************
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

/*
******************************************* CODING CHALLENGE *************************************
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
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

/*
******************************************* IF / ELSE STATEMENTS *************************************
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

/*
******************************************* BOOLEAN LOGIC *************************************
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

/*
******************************************* THE TERNARY OPERATOR AND SWITCH STATEMENTS *************************************
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

/*
******************************************* TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS *************************************
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

/*
******************************************* CODING CHALLENGE 2 *************************************
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
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

/*
******************************************* FUNCTIONS *************************************
*/

/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1998);
var ageCloud = calculateAge(1976);

console.log(ageJohn, ageMike, ageCloud);

function calculateAgeUntilRetirement(year, name) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(name + ' will retire in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired!');
    }
}

calculateAgeUntilRetirement(1987, 'Barret');
calculateAgeUntilRetirement(1999, 'Tifa');
calculateAgeUntilRetirement(1951, 'John');
*/

/*
******************************************* FUNCTIONS STATEMENTS AND EXPRESSIONS *************************************
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
/*
var whatDoYouDo = function(job, firstName) {
        switch(job) {
            case 'teacher':
                return firstName + ' teaches kids how to code.';
            case 'driver':
                return firstName + ' deliver parcels.';
            case 'designer':
                return firstName + ' designs beautiful websites.';
            default:
                return firstName + ' does something else.';
        }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Mike'));
console.log(whatDoYouDo('coder', 'Tifa'));
*/

/*
******************************************* ARRAYS *************************************
*/

/*
// Initialize new array
var names = ['John', 'Mike', 'Tifa'];
var years = new Array(1999, 2007, 1789);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Squall';
names[names.length] = 'Mary'
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

// Different array methods
john.push('blue');
john.unshift('Mr.'); // Add in the beginning
console.log(john);

john.pop(); // Remove from the end
john.pop();
john.shift() // Remove from the start
console.log(john);


console.log(john.indexOf(1990));
console.log(john.indexOf(19954)); // Return '-1' if it is not in the array - used for tests if some value is present in the array

var isDesigner = john.indexOf('designer') === -1 ? 'John IS NOT a designer.' : 'John IS a designer.';
console.log(isDesigner);
*/

/*
******************************************* CODING CHALLENGE 3 *************************************
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

/*
var bills, tips, finalAmount, tipCalculator;

bills = [124, 48, 268];
tips = [];
finalAmount = [];

console.log('Restaurant bills: ' + bills);

tipCalculator = function(amount) {
    var percentage;

    if (amount < 50) {
        percentage = .2;
    }
    else if (amount >= 50 && amount < 200) {
        percentage = .15;
    }
    else {
        percentage = .1;
    }
    return Number((amount * percentage).toFixed(2));
}
tips.push(tipCalculator(bills[0]),
          tipCalculator(bills[1]),
          tipCalculator(bills[2]));

console.log('Tips for every bill: ' + tips);

finalAmount.push(bills[0] + tips[0] + '$',
                 bills[1] + tips[1] + '$',
                 bills[2] + tips[2] + '$');

console.log('Final amounts: ' + finalAmount);
*/

/*
******************************************* OBJECTS AND PROPERTIES *************************************
*/

/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    family: ['Jane', 'Bob', 'Angela'],
    birthYear: 1987,
    job: 'Coder'
};

console.log(john);
var x = 'lastName';
console.log(john[x]);
console.log(john.family);
console.log(john['firstName']);
console.log(john.family[2]);

john.hobby = 'games';
john['sport'] = 'basketball';
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Lockhart';
jane['birthYear'] = 1988;
console.log(jane);
*/

/*
******************************************* OBJECTS AND METHODS *************************************
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1989,
    family: ['Jane', 'Bob', 'Tifa', 'Cloud'],
    job: 'teacher',
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

console.log(john);

john.calcAge();
console.log(john);
*/

/*
******************************************* CODING CHALLENGE 4 *************************************
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
var john = {
    name: 'John',
    mass: 78,
    height: 1.89,
    calcBMI: function() {
        return this.BMI = this.mass / this.height^2;
    }
};

var mark = {
    name: 'Mark',
    mass: 92,
    height: 1.97,
    calcBMI: function() {
        this.BMI = this.mass / this.height^2;
        return this.BMI;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.name + ' has a higher BMI than Mark.' );
} else if (john.BMI < mark.BMI) {
    console.log(mark.name + ' has a higher BMI than John.');
} else {
    console.log('They have the same BMI!');
}

console.log('John: ' + john.BMI, 'Mark: ' + mark.BMI);
*/

/*
******************************************* LOOPS AND ITERATION *************************************
*/

/*
// For loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 1; i <= 10; i += 2) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// Continue abd break statements
var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = 1; i <= john.length; i++) {
    console.log(john[john.length - i]);
}

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}


















































/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/




















































































