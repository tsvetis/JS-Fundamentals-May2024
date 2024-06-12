// // // Function declarion -> being HOISTED!
// // function print1(text) {
// //   console.log(text);
// // }

// // print1("Text from Function Declaration!");

// // Function expression
// // print2("Text from Function Expression");

// // const print2 = function (text) {
// //   console.log(text);
// // };

// // print2("Text?");

// // function sum(a, b) {
// //   console.log(a + b);
// // }

// // sum(3, 4); // 7

// // function myRecursion(x) {
// //   let y = x * 2;

// //   if (y < 100) {
// //     console.log(y);
// //     myRecursion(y);
// //   }
// // }

// // myRecursion(5);
// // let a = 5;

// // function print() {
// //   console.log("Print me! ", a);
// // }

// // print();

// // function sum(a, b) {
// //   // Guard clauses
// //   if (a < 0 || b < 0) {
// //     return "One or more parameter is negative number!";
// //   }

// //   console.log(a + b);
// //   return a + b;
// // }

// // let result = sum(5, -2);
// // console.log("Result: ", result);

// // function getBiggerNum(a, b) {
// //   if (a >= b) {
// //     return a;
// //   }

// //   return b;
// // }

// // function mathPow(num) {
// //   return num ** 2;
// // }

// // const result = mathPow(getBiggerNum(5, 15) * 2);
// // console.log(result);

// // function solve(arr) {
// //   // Helper Function
// //   function doubleEvenNumber(number) {
// //     if (number % 2 === 0) {
// //       return number * 2;
// //     }

// //     return number;
// //   }

// //   // Variables
// //   const result = [];

// //   // Core Logic
// //   for (let i = 0; i < arr.length; i++) {
// //     const num = arr[i];
// //     result.push(doubleEvenNumber(num));
// //   }

// //   // Print Result
// //   //   console.log(result);
// //   return result;
// // }

// // const z = solve([1, 2, 3, 4]);
// // console.log("Result : ", z);

// const increment = (x) => x + 1;
// const incrementByNumber = (x, y) => {
//   // some
//   // logic
//   // here
//   return x + y;
// };

// // console.log(increment(5));
// // console.log(incrementByNumber(5, 2));

// function functionDeclaration() {
//   // log
//   // return
// }

// const functionExpression = () => {};

{
  /* <div class="chessboard">
  <div>
    <span class="black"></span>
    <span class="white"></span>
    <span class="black"></span>
  </div>
  <div>
    <span class="white"></span>
    <span class="black"></span>
    <span class="white"></span>
  </div>
  <div>
    <span class="black"></span>
    <span class="white"></span> <span class="black"></span>
  </div>
</div>; */
}

function printChessBoard(num) {
  let result = '<div class="chessboard">\n\r';

  for (let i = 0; i < num; i++) {
    result += " <div>\n\r";

    for (let j = 0; j < num; j++) {
      const color = j % 2 === 0 ? "white" : "black";
      result += `   <span class="${color}"></span>\n\r`;
    }
    result += " </div>\n\r";
  }

  result += "</div>";

  console.log(result);
}

printChessBoard(4);
