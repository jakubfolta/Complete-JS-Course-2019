/////////////////////////
// Lecture: let and const
/////////////////////////

// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;

//name6 = 'Jane Miller';
//console.log(name6);

// ES5
function driversLicence5(passedTest) {
	 
	if (passedTest) {
		var firstName = 'John';
		var year = 1990;

	}
	console.log(firstName + year);
}

driversLicence5(true);

// ES6 
function driversLicence6(passedTest) {
	 
	let firstName;
	const year = 1990;
	
	if (passedTest) {
		firstName = 'John';
	}
	console.log(firstName + year);
}

driversLicence6(true);


let i = 23;

for (let i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i);

/////////////////////////
// Lecture: Blocks and IIFEs
/////////////////////////

// ES6

{
	
	const a = 6;
	let b = 3;
	var c = a + b;
	
}

console.log(c);
*/

/////////////////////////
// Lecture: Strings
/////////////////////////

let firstName = 'John';
let lastName = 'Smith';
const year = 1990;

function calcAge(year) {
	return 2016 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + year + ' and he is ' + calcAge(year) + ' years old.')























































