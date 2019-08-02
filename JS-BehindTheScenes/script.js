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