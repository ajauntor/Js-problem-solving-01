
function getAllSum(marks) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        var element = marks[i];
        sum = sum + element;
    }
    return sum;
}
var marks = [63, 45, 87, 57, 14, 34, 50];
var result= getAllSum(marks)
console.log("totals of the number:", sum);