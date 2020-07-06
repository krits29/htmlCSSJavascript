function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageKriti = calculateAge(2003);
var ageSaumya = calculateAge(2012);
console.log(ageKriti, ageSaumya);

function yearsUntilGraduation(birthYear, firstName) {
    var years = 18 - calculateAge(birthYear);

    if(years > 0) {
        console.log(firstName + " graduates in " + years + " years");
    } else {
        console.log(firstName + " has already graduated");
    }
}

yearsUntilGraduation(2003, "Kriti");
yearsUntilGraduation(2012, "Saumya");
yearsUntilGraduation(1975, "Papa");

var names = ["Bob", "Mark"];
var years = new Array(2003, 2012);
console.log(years[1]);
console.log(years);
console.log(names.length);

//adding to the end
names.push("Billy");
//adding to the beginning
names.unshift("Robby");
console.log(names);

//remove from the end
names.pop();
console.log(names);

//remove from the front
names.shift();
console.log(names);

console.log(years.indexOf(2012));

console.log("___________________________");
console.log("Challenge");

function allTips (bill1, bill2, bill3) {
    var calculatedTips = new Array();
    calculatedTips.push(tipCalculator(bill1));
    calculatedTips.push(tipCalculator(bill2));
    calculatedTips.push(tipCalculator(bill3));
    return calculatedTips;
}

function tipCalculator(bill) {
    if(bill < 50) {
        return (0.2 * bill);
    } else if(bill >= 50 && bill < 200) {
        return (0.15 * bill);
    } else {
        return (0.1 * bill);
    }
}

function completeBill (bill1, bill2, bill3) {
    var calculatedBill = new Array;
    calculatedBill.push(bill1 + tipCalculator(bill1));
    calculatedBill.push(bill2 + tipCalculator(bill2));
    calculatedBill.push(bill3 + tipCalculator(bill3));
    return calculatedBill;
}

console.log(allTips(124, 48, 268));
console.log(completeBill(124, 48, 268));

