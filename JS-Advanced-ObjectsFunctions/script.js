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

/*
var years = [1998, 1876, 1979, 2015, 1936];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}
function isFullAge(el) {
    return el >= 18;
}
function checkMaxHR(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return 'Outside range!'
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxHeartRate = arrayCalc(ages, checkMaxHR);

console.log(ages);
console.log(fullAges);
console.log(maxHeartRate);
*/


/*
******************************************* Functions returning functions *************************************
*/

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ' could you explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var otherQuestion = interviewQuestion('coder');

teacherQuestion('Cloud');
designerQuestion('Tifa');
otherQuestion('Vincent');

interviewQuestion('teacher')('Barret') // call returned function immediately by passing 'name' argument straight away


// solidyfing knowledge
function whatMateria(name) {
    if (name === 'Cloud') {
        return function(weapon) {
            console.log('Based on your ' + weapon + ' you should have ultima and meteor materia in it.')
        }
    } else if ('Barret') {
        return function(weapon) {
            console.log('You have ' + weapon + ' , so you should have fire and ice materia.')
        }
    } else {
        return function(weapon) {
            console.log('I don\'t know you but you have ' + weapon + ' so you have all materia connected to sleep materia, nice!')
        }
    }
}

var cloudMateria = whatMateria('Cloud');
var barretMateria = whatMateria('Barret');
var tifaMateria = whatMateria('Tifa');

cloudMateria('Ultima Weapon');
barretMateria('Pulse Cannon');
tifaMateria('Thunder GLoves');

whatMateria('Cid')('Super Needle');
*/


/*
******************************************* IIFE *************************************
*/





































