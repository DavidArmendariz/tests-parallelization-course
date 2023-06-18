const { multiply } = require("./math");

test("it multiplies two numbers", () => {
  expect(multiply(1, 2)).toBe(2);
});
