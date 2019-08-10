/*
******************************************* Function constructor *************************************
*/

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































