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
