import * as fs from "fs";

const filePath = "puzzle.txt";
const file = fs.readFileSync(filePath, "utf-8");
console.log(file);

const fileArray = file.split("\n");
console.log(fileArray);

const list1: string[] = [];
const list2: string[] = [];

fileArray.forEach((element) => {
  const [a, b] = element.split("   ");
  list1.push(a);
  list2.push(b);
});

list1.sort();
list2.sort();

let totalDistance = 0;

list1.forEach((element, index) => {
  totalDistance += Math.abs(Number(element) - Number(list2[index]));
});

console.log(totalDistance);
