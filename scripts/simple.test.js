const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

function sumTest() {
  const result = sum(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
}

function subtractTest() {
  const result = subtract(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
}

test("Sum", sumTest);
test("Subtract", subtractTest);
