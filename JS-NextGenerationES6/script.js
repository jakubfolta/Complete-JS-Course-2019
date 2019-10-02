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

/*
let firstName = 'John';
let lastName = 'Smith';
const year = 1990;

function calcAge(year) {
	return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + year + ' and he is ' + calcAge(year) + ' years old.')

// ES6
 console.log(`This is ${firstName} ${lastName}. He was born in ${year}.`)

const a = `${firstName} ${lastName}`;

console.log(a.startsWith('f'));
console.log(a.endsWith('h'));
console.log(a.includes('n'));
console.log(`${firstName} `.repeat(3));
*/

/////////////////////////
// Lecture: Arrow functions
/////////////////////////


// ES5
const years = [1990, 1987, 1958, 1937];

var ages5 = years.map(function(el) {
	return 2019 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2019 - el);

ages6 = years.map((el, index) => `Age of ${index + 1} element:  ${2019 - el}`);

console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age of ${index + 1} element:  ${age}`;
});

console.log(ages6);

/////////////////////////
// Lecture: Arrow functions 2
/////////////////////////

// ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function() {
	
		var self = this;
		document.querySelector('.green').addEventListener('click', function() {
		var str = 'This is box number ' + self.position + ' and it is ' + self.color + '.';
		alert(str);
		})
	}
}
//box5.clickMe();


var box6 = {
	color: 'green',
	position: 1,
	clickMe: function() {
	
		document.querySelector('.green').addEventListener('click', () => {
		var str = `This is box number ${this.position} and it is ${this.color}.`;
		alert(str);
		});
	}
}
box6.clickMe();
































































































