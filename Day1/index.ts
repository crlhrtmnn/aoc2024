import * as fs from "fs";

const filePath = "puzzle.txt";
const file = fs.readFileSync(filePath, "utf-8");
const lines = file.split("\n");

const list1: number[] = [];
const list2: number[] = [];

lines.forEach((element) => {
  const [a, b] = element.split("   ");
  list1.push(Number(a));
  list2.push(Number(b));
});

function calculateTotalDistance() {
  list1.sort();
  list2.sort();

  let totalDistance = 0;

  list1.forEach((element, index) => {
    totalDistance += Math.abs(Number(element) - Number(list2[index]));
  });

  console.log(totalDistance);
}

function calculateSimilarityScore() {
  let similarityScore = 0;
  list1.forEach((elementL1) => {
    let numberOfSimilarNumbers = 0;
    list2.forEach((elementL2) => {
      if (elementL1 === elementL2) numberOfSimilarNumbers++;
    });
    similarityScore += elementL1 * numberOfSimilarNumbers;
  });
  console.log(similarityScore);
}

calculateTotalDistance();
calculateSimilarityScore();
