const conditionalSum = (values, condition) => {
  let sum = 0;

  for (let number of values) {
    if (number % 2 === 0) {
      sum += number;
    }
  }

  return sum;
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
