/*
******************************************* Hoisting *************************************
*/

// functions
calculateAge(1987); // function hoisted as it is function declaration
// retirement(56); // doesn't work as it is function expression

function calculateAge(year) {
    console.log(2019 - year);
}

// calculateAge(1987);

var retirement = function(year) {
    console.log(65 - year);
}

retirement(56);

// variables

console.log(age); // when runs it is undefined because js recognize this variable (knows that it exists) but it is not defined yet
var age = 43;
console.log(age);

function foo() {
    console.log(age); // variable is not defined yet
    var age = 67;
    console.log(age);
}

foo();
console.log(age);
