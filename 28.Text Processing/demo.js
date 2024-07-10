// let str2 = `Helo ${213 * 2}`;

// // let template = 1 + 2 + 3;
// // let str2 = "Helo " + template;

// console.log(str2);

// let str = "Hello" + ", " + "JS";
// str = str + "!";
// str += "!";
// console.log(str);
// console.log(str.length);
// console.log(str[0]);
// console.log(str[5]);
// console.log(str[str.length - 1]);

// for (let i = 0; i < str.length; i++) {
//   console.log(`index: ${i}, char: ${str[i]}`);
// }

// let greeting = "Hello" + ", ";
// greeting += "JS!";
// // str = str + "JS!";
// const heSaid = "He said: ";
// const result = heSaid.concat(greeting);
// // const result = heSaid + greeting;
// console.log(result);

// let result = "Hello, JavaScript dev!";
// // console.log(result.indexOf("!")); // Worst case -> linear O(n)
// // console.log(result.lastIndexOf("d"));
// console.log(result.substring(5, 11));

// let text = "Hello there from softuni.bg. You are welcome! abv.bg";
// const result = text.replaceAll(".bg", ".com");
// console.log(result);

// const msg = "Hello from JS Fundamentals!";
// console.log(msg.split("JS"));

// const msg = "I love fruits!";
// console.log(msg.includes("fruits"));
// console.log(msg.includes("banana"));

// for (let i = 0; i < 5; i++) {
//   console.log("*".repeat(i + 1));
// }

// function repeat(str, count) {
//   let result = "";
//   for (let index = 0; index < count; index++) {
//     result += str;
//   }

//   return result;
// }

// for (let i = 0; i < 5; i++) {
//   console.log(repeat("*", i + 1));
// }

// const trimMeStr = "    THis string needs to be trimmed         ";
// console.log(trimMeStr);
// console.log(trimMeStr.trim());

// const text = "My name is John!";
// console.log(text.endsWith(""));

// let text = "Tsveti";
// console.log(text.padEnd(100, "x"));

// function solve(input) {
//   const arr = input.split(" ");
//   const result = {};

//   for (const el of arr) {
//     const elToLowerCase = el.toLowerCase();

//     if (result[elToLowerCase]) {
//       result[elToLowerCase] += 1;
//     } else {
//       result[elToLowerCase] = 1;
//     }
//   }

//   const entries = Object.entries(result).sort((a, b) => b[1] - a[1]);
//   const output = [];

//   for (const x of entries) {
//     if (x[1] % 2 === 1) {
//       output.push(x);
//     }
//   }

//   const finalResult = [];
//   for (const x of output) {
//     finalResult.push(x[0]);
//   }

//   console.log(finalResult.join(" "));
// }

// solve("Java C# Php PHP Java PhP 3 C#  3 1 5 C#"); // c# php 1 5
// solve("Cake IS SWEET is Soft CAKE sweet Food"); // soft food

function solve(input) {
  let n = input[0];
  let rows = input.slice(1);

  let kRowIndex, kIndex;
  let lastRightRowIndex = rows[0].length - 1;
  let lastBelowRowIndex = n - 1;
  let lastAboveRowIndex = 0;
  let lastLeftRowIndex = 0;
  let steps = 0;
  let isOut = false;

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].includes("k")) {
      kRowIndex = i;
      kIndex = rows[i].indexOf("k");
      break;
    }
  }

  if (kIndex - 1 < 0) {
    isOut = true;
    steps++;
  }

  if (kIndex + 1 == lastRightRowIndex + 1) {
    isOut = true;
    steps++;
  }

  if (!isOut) {
    for (let i = 0; i < 50; i++) {
      if (isOut) break;
      if (rows[kRowIndex][kIndex - 1] == " ") {
        while (rows[kRowIndex][kIndex - 1] == " ") {
          let rowArr = rows[kRowIndex].split("");
          rowArr[kIndex - 1] = "#";
          rows[kRowIndex] = rowArr.join("");
          kIndex--;
          steps++;
          if (kIndex == 0) {
            steps++;
            isOut = true;
            break;
          }
        }
      }

      if (rows[kRowIndex][kIndex + 1] == " ") {
        while (rows[kRowIndex][kIndex + 1] == " ") {
          let rowArr = rows[kRowIndex].split("");
          rowArr[kIndex + 1] = "#";
          rows[kRowIndex] = rowArr.join("");
          kIndex++;
          steps++;
          if (kIndex == lastRightRowIndex) {
            steps++;
            isOut = true;
            break;
          }
        }
      }

      if (rows[kRowIndex - 1] && rows[kRowIndex - 1][kIndex] == " ") {
        while (rows[kRowIndex - 1] && rows[kRowIndex - 1][kIndex] == " ") {
          let rowArr = rows[kRowIndex - 1].split("");
          rowArr[kIndex] = "#";
          rows[kRowIndex - 1] = rowArr.join("");
          kRowIndex--;
          steps++;
          if (kRowIndex == 0) {
            steps++;
            isOut = true;
            break;
          }
        }
      }

      if (rows[kRowIndex + 1] && rows[kRowIndex + 1][kIndex] == " ") {
        while (rows[kRowIndex + 1] && rows[kRowIndex + 1][kIndex] == " ") {
          let rowArr = rows[kRowIndex + 1].split("");
          rowArr[kIndex] = "#";
          rows[kRowIndex + 1] = rowArr.join("");
          kRowIndex++;
          steps++;
          if (kRowIndex == lastBelowRowIndex) {
            steps++;
            isOut = true;
            break;
          }
        }
      }
    }
  }

  if (isOut) {
    console.log(`Kate got out in ${steps} moves`);
  } else {
    console.log(`Kate cannot get out`);
  }
}

solve([4, "######", "## k#", "## ###", "## ###"]);
// Kate got out in 5 moves
// solve([5, "######", "## k#", "## ###", "######", "## ###"]);
// Kate cannot get out
