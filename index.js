"use strict";
var fizzBuzz = function (numbers) {
    return numbers.map(function (num) {
        if (num % 5 === 0 && num % 3 === 0) {
            return "FizzBuzz";
        }
        else if (num % 3 === 0) {
            return "Fizz";
        }
        else if (num % 5 === 0) {
            return "Buzz";
        }
        else {
            return num.toString();
        }
    });
};
var array = [];
for (var i = 1; i <= 100; i++) {
    array.push(i);
}
console.log(fizzBuzz(array));
