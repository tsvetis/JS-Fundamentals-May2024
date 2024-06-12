function solve(word, symbol, match) {
  // Create new string and replace '_'
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "_") {
      result += symbol;
    } else {
      result += word[i];
    }
  }

  // Check if maches and print the right answer
  if (result === match) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

solve("Str_ng", "O", "String"); // Not Match!
solve("Str_ng", "i", "String"); // Matches!

for (let j = 0; j < 10; j++) {
  console.log(j);
}
