import { sum } from "../sum";

test("Sum Fun Should Calc Sum of two numbers", () => {
  const result = sum(3, 5);

  expect(result).toBe(8);
});
