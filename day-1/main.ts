import fs from "fs";

function countingSort(arr, max) {
  const count = new Array(max + 1).fill(0);
  const output = new Array(arr.length);

  // Count occurrences
  for (let num of arr) {
    count[num]++;
  }

  // Position each number
  let pos = 0;
  for (let i = 0; i <= max; i++) {
    while (count[i]-- > 0) {
      output[pos++] = i;
    }
  }

  return output;
}

const input = fs.readFileSync("input.txt", "utf8").split("\n");
const left = input.map((line) => parseInt(line.split(" ")[0]));
const right = input.map((line) => parseInt(line.split(" ")[3]));

// Assume we know the maximum number or can quickly scan for it
const max = Math.max(...left, ...right);
const sortedLeft = countingSort(left, max);
const sortedRight = countingSort(right, max);

let totalDistance = 0;
for (let i = 0; i < sortedLeft.length; i++) {
  totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
}

console.log(totalDistance);
