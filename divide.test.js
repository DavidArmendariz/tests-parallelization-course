const { divide } = require("./math");

test("it divides two numbers", () => {
  expect(divide(1, 2)).toBe(0.5);
});
