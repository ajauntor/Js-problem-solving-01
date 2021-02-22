var number = 4.40;
var result = Math.floor(number);
console.log(result);

var number = 4.40;
var result = Math.ceil(number);
console.log(result);

var number = 4.510;
var result = Math.round(number);
console.log(result);

for (var i = 0; i < 10; i++) {
    var randomNumber = Math.random() * 50;
    var result = Math.round(randomNumber);
    console.log(result);
}