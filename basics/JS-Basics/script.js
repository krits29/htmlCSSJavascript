var firstName = "bob";
console.log(firstName);

var lastName = "billy"
console.log(lastName);

var age = 50;
var adult = true;

console.log(adult);

console.log(firstName + " " + lastName + " is " + age + " years old");

//lastName = prompt("What is his last name?");

//alert(firstName + " " + lastName + " is " + age + " years old");

console.log(firstName + " " + lastName + " is " + age + " years old");

age += 4;
age++;

console.log(age > 50);
console.log(typeof (age > 50));
console.log(typeof age);

if(age === 40) {
    console.log("He is 40 years old");
} else {
    console.log("he is not")
}

if(age == '40') {
    console.log("Javascript does type coersion");
} else {
    console.log("not equal, but javascript does type coersion")
}

console.log("__________________________");
console.log("CHALLENGE");

var johnAvgScore = (89 + 120 + 103)/3;
var mikeAvgScore = (116 + 94 + 123)/3;
var maryAvgScore = (97 + 134 + 105)/3;
console.log(johnAvgScore, mikeAvgScore, maryAvgScore);

if(johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
    console.log("John's team had the highest average score: " + johnAvgScore);
} else if (mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore){
    console.log("Mike's team had the highest average score: " + mikeAvgScore);
} else if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore){
    console.log("Mary's team had the highest average score: " + maryAvgScore);
} else {
    console.log("All teams had equal scores: " + mikeAvgScore);
}

// console.log("____________________");
// console.log("FOR LOOPS");

// var example = ["example 1", "example 2", "example 3", "example 4", "example 5", "example 6"];

// for(var i = 0; i < example.length; i++) {
//     console.log(example[i]);
// }

// console.log("____________________");
// console.log("WHILE LOOPS");

// var counter = 0;
// while(counter < example.length) {
//     console.log(example[counter]);
//     counter++;
// }

