import fs from "fs";

const path = "example.txt";
const file = fs.readFileSync(path, "utf-8");
const lines = file.split("\n");

let safeReports = 0;

for (let line of lines) {
  const chars = line.split(" ");
  const numbers = chars.map(Number);
  console.log("hello");

  let increases = false;
  let couldBeSafe = true;
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      if (numbers[i] - numbers[++i] > 0) {
        increases = false;
      } else {
        increases = true;
      }
    }
    if (!isSafe(increases, numbers[i], numbers[++i])) {
      couldBeSafe = false;
      break;
    }
  }
  if (couldBeSafe) safeReports++;
}

function isSafe(
  increase: boolean,
  currentNumber: number,
  nextNumber: number
): boolean {
  if (
    Math.abs(currentNumber - nextNumber) < 4 &&
    Math.abs(currentNumber - nextNumber) > 0 &&
    currentNumber - nextNumber > 0 === increase
  ) {
  }
  return true;
}

console.log("Number of Safe Reports: ", safeReports);
