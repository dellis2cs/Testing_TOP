import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
} from "./func";

it("capitalize", () => expect(capitalize("hello")).toBe("Hello"));

it("reverse", () => expect(reverseString("hello")).toBe("olleh"));

it("add", () => expect(calculator.add(1, 2)).toBe(3));
it("subtract", () => expect(calculator.subtract(1, 2)).toBe(-1));
it("multiply", () => expect(calculator.multiply(1, 2)).toBe(2));
it("divide", () => expect(calculator.divide(2, 2)).toBe(1));

it("cipher", () => expect(ceasarCipher("xYz", 3)).toBe("aBc"));
it("cipher", () =>
  expect(ceasarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"));

it("Analyze", () =>
  expect(analyzeArray([1, 2, 3])).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  }));
