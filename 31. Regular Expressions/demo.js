// // let pattern = /(\d{2})-(\d{2})-(\d{4})/g;
// let pattern = /\S+/g;
// let text =
//   "Today is a good day and is 22-01-1999! Today is a good day and is 22-02-1999!";

// // Testing Regex
// const isDateValid = pattern.test(text);
// console.log("is date valid: ", isDateValid);

// // Matching Regex
// const matchedDate = text.match(pattern);
// for (const date of matchedDate) {
//   console.log(date);
// }

// // Exec Regex
// const text = "Peter: 123 Mark: 456";
// const pattern = /([A-Z][a-z]+): (\d+)/g;
// const firstMatch = pattern.exec(text);
// const secondMatch = pattern.exec(text);

// console.log("------Zfirst match ------");
// for (const match of firstMatch) {
//   console.log(match);
// }

// console.log("------ second match ------");
// console.log(secondMatch);
// for (const match of secondMatch) {
//   console.log(match);
// }

// // Replace Regex
// const text = "Peter: 123 Mark: 456";
// const pattern = /\d{3}/g;
// const newReplacedText = text.replace(pattern, "Kitten");
// console.log(newReplacedText);

// // MatchAll regex
// const text = "test123test356";
// let regexp = /t(e)(st(\d{3}?))/g;

// const matched = [...text.matchAll(regexp)];

// for (const m of matched) {
//   console.log(m);
// }

// Split Regex
const text = "1    23   4";
const regexp = /\s+/g;
const result = text.split(regexp);
console.log(result);
