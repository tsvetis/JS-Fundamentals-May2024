function solve(setence, word) {
  let count = 0;
  const wordsArray = setence.split(" ");

  for (const w of wordsArray) {
    if (w === word) {
      count += 1;
    }
  }

  console.log(count);
}

solve("This is a new sentence that is is something for testing.", "is");
