// // // const arr = [];

// // // for (let i = 1; i <= 10; i++) {
// // //   arr.push(i);
// // //   arr.unshift(i);
// // // }
// // // console.log(arr);

// // // for (let i = 1; i <= 5; i++) {
// // //   arr.pop();
// // //   arr.shift();
// // // }

// // // console.log(arr);
// // //           0  1  2  3
// // // const arr = [1, 2, 3, 4];
// // // const clonedArray = arr.slice(1, 3);
// // // console.log("original array ", arr);
// // // console.log("cloned array ", clonedArray);

// //            0   1   2   3   4   5
// // const nums = [5, 10, 15, 20, 25, 30];

// // console.log("copy", nums.splice(3, 2, "test1", "test2", "test3"));
// // console.log("original", nums);
// // // console.log("Original nums array -> ", nums);
// // // const splicedArray = nums.splice(1, 4);
// // // console.log("Spliced array -> ", splicedArray);
// // // console.log("The original array again -> ", nums);

// // const months = ["Jan", "March", "April", "June"];
// // console.log(months);

// // //        startIndex, count, withWhat?
// // months.splice(1, 2, "Feb");
// // // Inserts at index 1
// // console.log(months);

// // [1,2,3,4]
// //          2             0                           669
// // SPLICE(START INDEX, HOW MANY ITEMS TO DELETE, ITEMS TO ADD)

// // const strArr = ["Hello", "Hi", "zdr", "Ciao"];
// // const newArray = strArr.map((x) => x.length);
// // console.log(newArray);

// // const newArr = [1, 2, 3, 4, 5].map((num) => {
// //   if (num % 2 === 0) {
// //     return "Even: " + num;
// //   }

// //   return "Odd: " + num;
// // });

// // console.log(newArr);

// // const numsArr = ["2", "3", "4", "21"].map(Number);
// // const numsArr2 = ["2", "3", "4", "21"].map((n) => {
// //   return Number(n);
// // });

// // const numsArr = ["2", "3", "4", "21"].map((n, i) => Number(n));
// // console.log(numsArr);

// // function myMap(array, callbackFn) {
// //   const output = [];

// //   for (let i = 0; i < array.length; i++) {
// //     const element = array[i];
// //     const result = callbackFn(element, i);
// //     output.push(result);
// //   }

// //   return output;
// // }

// // const x = myMap(["2", "3", "4", "21"], (e, index) => {
// //   if (index % 2 === 0) {
// //     return e * 10;
// //   }

// //   return e;
// // });
// // console.log(x);

// // const newArr = arr.filter((num, index) => index >= arr.length / 2);
// // const newArr = arr.filter((num) => num % 2 !== 0);
// // const newArr = arr.filter((num, index) => {
// //   if (index <= 2) {
// //     return true;
// //   }

// //   return false;
// // });

// // const newArr = arr.filter((num, index) => {
// //   return index <= 2;
// // });
// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // function myFilter(array, predicate) {
// //   let result = [];
// //   for (const item of array) {
// //     if (predicate(item)) {
// //       result.push(item);
// //     }
// //   }

// //   return result;
// // }

// // const getEvenNums = (n) => n % 2 === 0;
// // const getOddNums = (n) => n % 2 !== 0;

// // const x = myFilter(arr, getOddNums5);

// // console.log(x);

// // const getEvenNumsArrow = (n) => n % 2 === 0; // returns n % 2 === 0
// const doubleNumber = (n) => n * 2;

// // VOID -> DOESNT RETURN VALUE
// const dbl = function (n, i) {
//   return n * 2;
// };
// const testMap = [1, 2, 3, 4].map(dbl);

// console.log(testMap);

// // const getEvenNumsBasic = function (n) {
// //   return n % 2 === 0;
// // };

const arr = [1, 2, 13, 11, -7, 77, 19];
console.log(arr);
// const sorted = arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// NUMBERS
// const sortedASC = arr.sort((a, b) => a - b);
// console.log(sortedASC);

// const sortedDESC = arr.sort((a, b) => b - a);
// console.log(sortedDESC);

// STRING
const strArr = ["bubble", "bun", "duck", "alpha"];
// strArr.sort((a, b) => a.localeCompare(b));
strArr.sort((a, b) => b.localeCompare(a));
console.log(strArr);
