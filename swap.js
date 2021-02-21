// My Village vs My Mom Village Swap............!
var ourVillage = "Hossenpur";
var myMomVillage = "Donaitori"
var villageChanger = myMomVillage;
myMomVillage = ourVillage;
ourVillage = villageChanger;
console.log("Our village name is:", ourVillage, "My Mom village Name is:", myMomVillage);


// My Total Salary vs Samira's Total Salary Swap....................!
var myTotalSalary = 100;
var samiraTotalSalary = 70;
[myTotalSalary, samiraTotalSalary] = [samiraTotalSalary ,myTotalSalary];
console.log("Auntor's Total Salary is:", myTotalSalary , "Samira's Total Salary is:", samiraTotalSalary);

//Price Swap......................!
var applePrice = 25;
var grapPrice = 10;
applePrice = applePrice + grapPrice;
grapPrice = applePrice - 10;
applePrice = grapPrice - 15;
console.log("apple:",applePrice , "grap:", grapPrice);