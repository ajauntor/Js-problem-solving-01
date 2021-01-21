var marks = [45, 81, 30, 97, 71, 94, 12];
var max = marks[0];
for (i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}

console.log("Higest Value is =", max);
