// Lecture: let and const


// ES5
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

//ES6 
function driversLicence6(passedTest) {
	 
	if (passedTest) {
		let firstName = 'John';
		const year = 1990;

	}
	console.log(firstName + year);
}

driversLicence6(true);
