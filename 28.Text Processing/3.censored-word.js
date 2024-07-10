function solve(text, word) {
  const censoredWord = "*".repeat(word.length);

  while (text.includes(word)) {
    text = text.replace(word, censoredWord);
  }

  console.log(text);
}

solve("A small sentance with some words.small small", "small");
