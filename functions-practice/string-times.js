// Given a string and a non-negative int n, return a larger
// string that is n copies of the original string.
//
// Example input and output:
//
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

// FOR LOOP

let string = "";

function stringTimes(str, n) {
  for (i = 0; i < n; i++) {
    string += str;
  }
  return string;
}

stringTimes("Hi", 3);

// WHILE LOOP
let string = "";

function stringTimes(str, n) {
  let i = 0;
  while (i < n) {
    string += str;
    i++;
  }
  return string;
}

stringTimes("Hi", 3);