/*
******************************************* Function constructor *************************************
*/

/*
var john = {
    name: 'John',
    yearOfBirth: '1987',
    job: 'teacher'
};

var AvalancheMember = function(name, hasMateria, weapon) {
    this.name = name;
    this.hasMateria = hasMateria;
    this.weapon = weapon;
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// prototype
Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

AvalancheMember.prototype.calcAge = function(yearOfBirth) {
    console.log(2019 - yearOfBirth);
};


// creating instances
var john = new Person('John', 1987, 'teacher');
var jane = new Person('Jane', 1990, 'designer');
var cloud = new Person('Cloud', 1989, 'soldier')

var tidus = new AvalancheMember('Cloud', true, 'Ultima Weapon');
var tifa = new AvalancheMember('Tifa', false, 'Thunder Gloves');
var barret = new AvalancheMember('Barret', true, 'Plasma Cannon');


// inheritance
john.calculateAge();
jane.calculateAge();
cloud.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(cloud.lastName);


barret.calcAge(1985);
*/


/*
******************************************* Object.create *************************************
*/


/*
// create prototype object
var avalancheProto = {
    calcAge: function() {
        console.log(2019 - this.birthYear);
    }
};

// inheritance
var cloud = Object.create(avalancheProto);

console.log(cloud);

cloud.name = 'Cloud';
cloud.birthYear = 1987;
cloud.job = 'Soldier';

// add second parameter to 'Object.create'
var tifa = Object.create(avalancheProto, {
    name: {value: 'Tifa'},
    birthYear: {value: 1993},
    job:  {value: 'Avalanche member'}
});
*/


/*
******************************************* Primitives vs objects *************************************
*/


/*
// Primitives
var a = 23;
var b = a;
a = 45;

console.log(a, b);

// Objects
var obj1 = {
    name: 'John',
    age: 23
};
var obj2 = obj1;

obj1.age = 34;

console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 30;
var obj = {
    name: 'Squall',
    age: 43
};

function change(a, b) {
    a = 43;
    b.name = 'Auron';
};

change(age, obj);

console.log(age);
console.log(obj.name);
*/


/*
******************************************* Passing functions as arguments *************************************
*/
























