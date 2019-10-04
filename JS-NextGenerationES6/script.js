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

/*
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
// Lecture: Arrow functions 2 - Lexical this keyword
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

function Person(name) {
	this.name = name;
}

// ES5
Person.prototype.myFriends = function(friends) {
	
	var arr = friends.map(function(el) {
		return this.name + ' is friends with ' + el;
	}.bind(this));
	console.log(arr);
}

var friends = ['Bob', 'John', 'Amy', 'Leon'];

a = new Person('Jacob');

a.myFriends(friends);

// ES6
Person.prototype.myFriends = function(friends) {
	
	var arr = friends.map(el =>
		`${this.name} is friends with ${el}`);
	console.log(arr);
}

new Person('Cass').myFriends(friends);
*/


/////////////////////////
// Lecture: Destructuring
/////////////////////////


/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6
const [name, age] = john;
console.log(name);
console.log(age);

const obj = {
	firstName: 'John',
	lastName: 'Smith',
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
	const ages = new Date().getFullYear() - year;
	return [ages, 65 - ages];
}

const [ages, retirement] = calcAgeRetirement(1990);

console.log(ages);
console.log(retirement);
*/


/////////////////////////
// Lecture: Arrays
/////////////////////////

/*
const boxes = document.querySelectorAll('.box');

// ES5

const boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
	cur.style.backgroundColor = 'gold';
})


// ES6
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'darkgreen');

// ES5
/*
for (var i = 0; i < boxesArr5.length; i++) {
	
	if (boxesArr5[i].className === 'box green') {
		continue;
	}
	
	boxesArr5[i].textContent = 'I changed to green';
}
*/

/*
// ES6
for (const cur of boxesArr5) {
	
	if (cur.className.includes('green')) {
		continue;
	}
	
	cur.textContent = 'I changed to dark green.';
}

// ES5

var ages = [11, 16, 18, 19, 21, 34];

var full = ages.map(function(cur) {
	return cur >= 18;
})
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6

console.log(ages.findIndex(cur => cur >= 18));

console.log(ages.find(cur => cur >= 18));
*/

/////////////////////////
// Lecture: Spread operator
/////////////////////////

/*
function addFourAges(a, b, c, d) {
	return a + b + c + d;
}

var sum1 = addFourAges(18, 92, 15, 25);
console.log(sum1);

// ES5
var ages = [18, 27, 39, 40];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

familySmith = ['John', 'Bob'];
familyMiller = ['Max', 'Kelly'];

bigFamily = [...familySmith, 'Jane', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');

const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

console.log(all);

Array.from(all).forEach(cur => cur.style.color = 'brown');
*/

/////////////////////////
// Lecture: Rest parameters
/////////////////////////

// ES5
function isFullAge5() {
//	console.log(arguments);
	var arrArg = Array.prototype.slice.call(arguments);
	arrArg.forEach(function(cur) {
		console.log((2019 - cur) >= 18);
	})
} 

isFullAge5(2009, 1965, 2015);

// ES6
function isFullAge6(...years) {
	years.forEach(cur => console.log((new Date().getFullYear() - cur) >= 18));
}

isFullAge6(2007, 1897, 1567, 1987, 2004, 1984, 2007);
































































































