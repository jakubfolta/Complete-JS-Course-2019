/*
******************************************* Function constructor *************************************
*/

var john = {
    name: 'John',
    yearOfBirth: '1987',
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
    }
};

// prototype
Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1987, 'teacher');
var jane = new Person('Jane', 1990, 'designer');
var cloud = new Person('Cloud', 1989, 'soldier')

john.calculateAge();
jane.calculateAge();
cloud.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(cloud.lastName);



