// Given a string and a non-negative int n, return a larger
// string that is n copies of the original string.
//
// Example input and output:
//
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

let string = "";

function stringTimes(str, n) {
  for (i = 0; i < n; i++) {
    string += str;
  }
  return string;
}

stringTimes("Hi", 3);