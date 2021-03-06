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

// ES6
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

/*
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
*/

/*
// ES5
function isFullAge5(limit) {
//	console.log(arguments);
	console.log(arguments);
	var arrArg = Array.prototype.slice.call(arguments, 1);
	console.log(arrArg);
	
	arrArg.forEach(function(cur) {
		console.log((2019 - cur) >= limit);
	})
} 

isFullAge5(21, 2009, 1965, 2015);

// ES6
function isFullAge6(limit, ...years) {
	console.log(arguments);
	console.log(years);
	years.forEach(cur => console.log((new Date().getFullYear() - cur) >= limit));
}

isFullAge6(21, 2007, 1897, 1567, 1987, 2004, 1984, 2007);
*/

/////////////////////////
// Lecture: Default parameters
/////////////////////////


// ES5
/*
function SmithPerson(firstName, lastName) {

	lastName = lastName === undefined ? lastName = 'Smith' : lastName;
	
	this.firstName = firstName;
	this.lastName = lastName;
}

var john = new SmithPerson('John');
*/

/*
// ES6
function SmithPerson(firstName, lastName = 'Smith') {
	
	this.firstName = firstName;
	this.lastName = lastName;
}

var john = new SmithPerson('John');
*/

/////////////////////////
// Lecture: Maps
/////////////////////////

/*
const question = new Map();

question.set('question', 'What is the latest major JS version?');
question.set(1, 'ES5');
question.set(2, 'ES4');
question.set(3, 'ES7');
question.set(4, 'ES2015');
question.set('correct', 4);
question.set(true, 'Great!');
question.set(false, 'Wrong, please try again.');

console.log(question.get('question'));
console.log(question.size);

if (question.has(3)) {
	question.delete(3);
	
}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

for (let [key, value] of question.entries()) {
	if (typeof(key) === 'number'){
	console.log(`Answer ${key}: Value ${value}`);
	}
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/

/////////////////////////
// Lecture: Classes
/////////////////////////

/*
// ES5
var Person5 = function(name,  year) {
	this.name = name;
	this.year = year;
}

Person5.prototype.calcAge = function() {
	var age = new Date().getFullYear - this.year;
	console.log(age);
}

var john5 = new Person5('John', 1997);

/*
// ES6
class Person6 {
	constructor (name, year) {
		this.name = name;
		this.year = year;
	}
	
	calcAge() {
		const age = new Date().getFullYear() - this.year;
		console.log(age);
	}
	
	static greeting() {
		console.log('Hello world ;)');
	}
}

const john = new Person6('John', 1987);

Person6.greeting();
*/

/////////////////////////
// Lecture: Classes with subclasses
/////////////////////////

/*
// ES5
var Person5 = function(name,  year) {
	this.name = name;
	this.year = year;
}

Person5.prototype.calcAge = function() {
	var age = new Date().getFullYear() - this.year;
	console.log(age);
}

var john5 = new Person5('John', 1997);

var Athlete5 = function(name, year, olympicGames, medals) {
	
	Person5.call(this, name, year);
	this.olympicGames = olympicGames;
	this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
	this.medals ++;
	console.log(this.medals);
}


var johnAthlete5 = new Athlete5('John', 1976, 2, 4);
*/

/*
// ES6
class Person6 {
	constructor (name, year) {
		this.name = name;
		this.year = year;
	}
	
	calcAge() {
		const age = new Date().getFullYear() - this.year;
		console.log(age);
	}
	
	static greeting() {
		console.log('Hello world ;)');
	}
}

const john = new Person6('John', 1987);

class Athlete6 extends Person6 {
	constructor (name, year, olympicGames, medals) {
		super(name, year);
		this.olympicGames = olympicGames;
		this.medals = medals;
	}
	
	wonMedal() {
		this.medals++;
		console.log(this.medals);
	}
}

const johnAthlete6 = new Athlete6('John', 1987, 14, 23);
*/

/////////////////////////
// Lecture: Coding challenge
/////////////////////////

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

const townData = (() => {
	// Create class for town element and subclasses for parks and streets
	class TownElement {
		constructor(name, year) {
			this.name = name;
			this.year = year;
		}

		calcAge() {
			const age = new Date().getFullYear() - this.year;
			return age;
		}
	}

	class Park extends TownElement {
		constructor (name, year, trees, area) {
			super (name, year);
			this.trees = trees;
			this.area = area; //km2
			this.age = this.calcAge();
		}

		calcTreeDensity() {
			const density = this.trees / this.area;
			console.log(`${this.name} has a density of ${density} trees per square km.`)
		}	
	}

	class Street extends TownElement {
		constructor (name, year, length, size = 'normal') {
			super (name, year);
			this.length = length;
			this.size = size;
		}
	}

	// Set all items inside map
	const parks = new Map();
	parks.set('park1', new Park('Green Park', 1987, 1290, 10));
	parks.set('park2', new Park('Oak Park', 1968, 1200, 20));
	parks.set('park3', new Park('Revolution Park', 1948, 978, 15));

	const streets = new Map();
	streets.set('street1', new Street('Jones Street', 1998, 47, 'big'));
	streets.set('street2', new Street('Abraham Street', 1948, 27, 'small'));
	streets.set('street3', new Street('May Street', 2006, 34));
	streets.set('street4', new Street('Roy Street', 2009, 13, 'tiny'));

	const averParkAge = element => {
		let totalAge = 0;
		for (let [key, value] of element.entries()) {
			if (key.startsWith('park')) {
				totalAge += value.age;
			}	
		}
		console.log(`Average year of each park is ${Math.floor(totalAge / element.size)}.`);
	}

	const displayTreeDensity = map => 
		map.forEach(cur => cur.calcTreeDensity());

	const displayMoreThan1000 = map => {
		let ParkName = new Map();

		for (let [key, value] of map.entries()) {
			if (value.trees >= 1000) {
				ParkName.set(value.name, value.trees);
			} else continue
		}
		console.log('Parks with more than 1000 trees:');
		for (let [key, value] of ParkName) {
		console.log(`${key}: ${value} trees.`);
		}
	}

	const calculateStreetsLegths = map => {
		let lengths = [];
		let totalLength;

		for (let [key, value] of map.entries()) {
			lengths.push(value.length);
		}

		totalLength = lengths.reduce((prev, cur) => prev + cur);

		return [totalLength, totalLength / lengths.length];
	}

	const displayStreetData = map => {
		const [totalLength, average] = calculateStreetsLegths(streets); // Use of ES6 destructuring

		for (let [key, value] of map.entries()) {
			console.log(`${value.name}'s size classification is: ${value.size}. `)
		}

		console.log(`Total length of all streets is ${totalLength}km and average length is ${average}km.`)
	}

	// REPORTS
	const treesReport = () => {
		console.log('------Park Report-------');

		// Display average park age
		averParkAge(parks);

		// Display tree density in each park
		displayTreeDensity(parks);

		// Display parks with more than 1000 trees
		displayMoreThan1000(parks);
	}

	const streetsReport = () => {
		console.log('------Streets Report-------');

		// Display size classification, total length and average length of all streets
		displayStreetData(streets);
	}

	return {
		// Display annual report
		displayReport: () => {
			treesReport();
			streetsReport();
		}
	}
})();


townData.displayReport();

























