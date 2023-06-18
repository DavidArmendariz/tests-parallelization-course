const { add } = require("./math");

test("it adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});
