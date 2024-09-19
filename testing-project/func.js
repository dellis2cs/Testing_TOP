export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      return "can't divide by 0";
    } else {
      return a / b;
    }
  },
};

export function ceasarCipher(string, shift) {
  return string
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // For lowercase letters (a-z)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(
          ((((code - 97 + shift) % 26) + 26) % 26) + 97
        );
      }

      // For uppercase letters (A-Z)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(
          ((((code - 65 + shift) % 26) + 26) % 26) + 65
        );
      }

      return char;
    })
    .join("");
}

export function analyzeArray(arr) {
  let object = {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
  return object;
}

function getAverage(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count / arr.length;
}

function getMin(arr) {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    min = arr[0];
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function getMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = arr[0];
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
