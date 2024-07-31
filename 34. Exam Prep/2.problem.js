function solve(input) {
  const pattern = /(#|@)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm;

  let match = pattern.exec(input);
  let pairsCount = 0;
  const result = [];

  while (match) {
    pairsCount++;
    const firstWord = match[2];
    const secondWord = match[3];

    const reversedSecondWord = secondWord.split("").reverse().join("");
    if (firstWord === reversedSecondWord) {
      result.push(`${firstWord} <=> ${secondWord}`);
    }

    match = pattern.exec(input);
  }

  if (pairsCount === 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${pairsCount} word pairs found!`);
  }

  if (result.length === 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(result.join(", "));
  }
}

solve(
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r"
);
// Output:
// 5 word pairs found!
// The mirror words are:
// Part <=> traP, leveL <=> Level, sAw <=> wAs
