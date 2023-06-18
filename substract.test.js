const { substract } = require("./math");

test("it substracts two numbers", () => {
  expect(substract(1, 2)).toBe(-1);
});
