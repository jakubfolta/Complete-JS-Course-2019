/*
******************************************* Function constructor *************************************
*/

/*
var john = {
    name: 'John',
    yearOfBirth: '1987',
    job: 'teacher'
};

var AvalancheMember = function(name, hasMateria, weapon) { // function constructor, start with capital letter
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
john.calculateAge(); // instances of Person have access to Person prototype methods
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

console.log(obj1.age); // obj1.age and obj2.age are the same because they have ...........reference............ to same object
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

/*
(function () {
    var score = Math.random() * 10;
    console.log(score <= 5);
})();

//console.log(score);

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(4);
*/


/*
******************************************* Closures *************************************
*/

/*
function retirement(retirementAge) {
    var a = ' years until retirement.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66);
var retirementIceland = retirement(66);
var retirementGermany = retirement(65);

retirementUS(1990);
retirementGermany(1994);
retirementIceland(1978);


retirement(64)(1987);

// solidifying knowledge

function interviewQuestion(job) {
    return function(name) {
        if (job ==='teacher') {
            console.log(name + ' tell me, what subject do you teach?');
        } else if (job === 'designer') {
            console.log('What is a UX design ' + name + '?');
        } else {
            console.log('What do you do ' + name + '?')
        }
    }
}

interviewQuestion('coder')('Cloud');
interviewQuestion('Avalanche member')('Barret');
interviewQuestion('designer')('Tifa');
*/


/*
******************************************* Bind, Call and Apply *************************************
*/

/*
var john = {
    name: 'John',
    age: 23,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Hello, My name is ' + this.name + '. I\'m a ' + this.job + ' and I am ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hi there, I\'m ' + this.name + '. I\'m a ' + this.job + ' and I am ' + this.age + ' years old. Have a great ' + timeOfDay + '!');
        }
    }
}

john.presentation('friendly', 'evening');


var emily = {
    name: 'Emily',
    job: 'designer',
    age: '21'
}

john.presentation.call(emily, 'formal', 'morning');

// john.presentation.apply(emily, ['friendly', 'night'])

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('evening');
johnFriendly('afternoon');

var emilyFormal = john.presentation.bind(emily, 'friendly');

emilyFormal('day');


// solidifying knowledge

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
function isFullAge(limit, el) {
    return el >= limit;
}
function checkMaxHR(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return 'Outside range!'
    }
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); // 'bind' make a copy of this function with preset first parameter

console.log(ages);
console.log(fullJapan);
*/


/*
******************************************* Coding challenge 7 *************************************
*/

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

var Question = function(question, answers, rightAnswer) {
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
    this.selectQuestion = function() {
        var number = Math.round(Math.random() * 2);
        console.log(Questions[number].question);
        var i;
        for (i in Questions[number].answers) {
            console.log(Questions[number].answers[i]);
        }
    }
    this.checkAnswer = function() {
        if (userAnswer === Questions[number].rightAnswer) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer, try again :)');
        }
    }
}

var Q1 = new Question('What is my name?', {zero : '0: John', first: '1: James', second: '2: Jacob'}, 2);
var Q2 = new Question('What place I would like to visit?', {zero: '0: Japan', second: '1: Russia', third: '2: Brazil'}, 0);
var Q3 = new Question('What is my favorite game?', {zero: '0: Borderlands', first: '1: The Witcher 3', second: '2: God of War'}, 1);

var Questions = [Q1, Q2, Q3];
Q1.selectQuestion();

var userAnswer = prompt('Please select the correct answer (just type the number)');

Q1.checkAnswer();
















/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/





























