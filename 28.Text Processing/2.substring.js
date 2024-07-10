function solve(str, startIndex, count) {
  const endIndex = startIndex + count;
  const result = str.substring(startIndex, endIndex);

  console.log(result);
}

solve("ASentance", 1, 8);
console.log("ASentance".substring(1, 9));
solve("JavaScript", 4, 6);
console.log("JavaScript".substring(4, 10));
