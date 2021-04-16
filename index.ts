const fizzBuzz = (numbers: Array<number>): Array<string> => {
  return numbers.map((num: number) => {
    if (num % 5 === 0 && num % 3 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num.toString();
    }
  });
};

const array: Array<number> = [];

for (let i = 1; i <= 100; i++) {
  array.push(i);
}

console.log(fizzBuzz(array));
