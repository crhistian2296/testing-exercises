// import the function sum from the app.js file
const { sum } = require("./app.js");

// start your first test
test("adds 14 + 9 to equal 23", () => {
  //inside the test we call our sum function with 2 numbers
  let total = sum(14, 9);

  // we expect the sum of those 2 numbers to be 23
  expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", () => {
  const { fromEuroToDollar } = require("./app.js");
  expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("10000 yen should be 62.54886630179828 pounds", () => {
  const { fromYenToPound } = require("./app.js");
  expect(fromYenToPound(10000)).toEqual(62.54886630179828);
});

test("5.5 dollars should be 586.2083333333334 yens", () => {
  const { fromDollarToYen } = require("./app.js");
  expect(fromDollarToYen(5.5)).toBe(586.2083333333334);
});
