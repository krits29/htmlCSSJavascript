var singer = {
    firstName: "Taylor",
    lastname: "Swift",
    age: 30,
    albums: ["Lover", "Reputation", "Red"],
    isMarried: false,
    //functions specified for an object
    //called methods
    calcAgeInTenYears: function() {
        this.ageInTenYears = this.age + 10;
    }
};

console.log(singer.firstName);
console.log(singer["lastname"]);

//mutate the data
singer.albums.push("1989");

singer.calcAgeInTenYears();

console.log(singer);

//another way to create an object

var actor = new Object();
actor.firstName = "Priyanka";
actor.lastName = "Chopra"
actor.age = 38;
actor["isMarried"] = true;

console.log(actor);

console.log("_____________________");
console.log("CHALLENGE");

var john = {
    firstName: "John",
    lastName: "Whatever",
    mass: 100,
    height: 7,
    bmiCalculator: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    firstName: "Mark",
    lastName: "Whatever",
    mass: 120,
    height: 6,
    bmiCalculator: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if(mark.bmiCalculator() > john.bmiCalculator()) {
    console.log("Mark had a higher bmi: " + mark.bmi);
    console.log(mark);
} else if(john.bmi > mark.bmi) {
    console.log("John had a higher bmi: " + john.bmi);
    console.log(john);
} else {
    console.log("They both had the same bmi: " + john.bmi);
}