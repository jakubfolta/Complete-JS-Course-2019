/*
******************************************* Hoisting *************************************
*/

/*
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
*/

/*
******************************************* Scoping *************************************
*/

//Scoping example

/*
var a = 'Hello! '
first()

function first() {
    var b = 'Hi! ';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
        third();
    }
}

function third() {
    var d = 'Heyya!';
    // console.log(c); // 'c' is not in the same scope chain, cannot access it
    console.log(a + d);
}

third();
*/

/*
******************************************* this keyword *************************************
*/

// console.log(this);

/*
calcAge(1987);

function calcAge(year) {
    console.log(2019 - year);
    console.log(this);
}

*/

var john = {
    name: 'John',
    age: 26,
    calcAge: function(){ // method code happens so 'this' points to 'john' object
        console.log(this);
        console.log(this.age);

        function innerFunction() { // regular function code happens, that's why 'this' points to window object
            console.log(this);
        }
    }
}

john.calcAge();

var mike = {
    name: 'John',
    age: 43,
}

mike.calcAge = john.calcAge;
mike.calcAge();


















