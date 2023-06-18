const { add } = require("./math");

test("it adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("it adds two decimal numbers", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});
