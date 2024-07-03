// // const stats = {
// //   "0-40": 0,
// //   "40-80": 0,
// //   "80-120": 0,
// // };

// // const ppl = [
// //   { name: "Asen", age: 45 },
// //   { name: "Gosho", age: 15 },
// //   { name: "Denko", age: 35 },
// //   { name: "Lidia", age: 99 },
// //   { name: "Angel", age: 5 },
// //   { name: "Zidan", age: 51 },
// //   { name: "Denislav", age: 53 },
// //   { name: "Denitsa", age: 11 },
// // ];

// // ppl.forEach((person) => {
// //   if (person.age >= 0 && person.age <= 40) {
// //     stats["0-40"] += 1;
// //   } else if (person.age > 40 && person.age <= 80) {
// //     stats["40-80"] += 1;
// //   } else if (person.age > 80 && person.age <= 120) {
// //     stats["80-120"] += 1;
// //   }
// // });

// const obj = {
//   //   first: 0,
//   //   second: 1,
//   //   first_num: 2,
// };
// const numsInWords = ["first", "second", "third"];

// let index = 0;
// for (const num of numsInWords) {
//   obj[num] = index;
//   index++;
// }

// // for of => array
// // for in => obj, associative arrays, dictionaries

// // for (const key in obj) {
// //   console.log(`${key}: ${obj[key]}`);
// // }

// // const person = {
// //   age: 12,
// //   name: "Ivan",
// //   address: "sofia, bg",
// // };

// const phonebook = {
//   Tim: 123456,
//   Bill: 9864,
// };

// const entries = Object.entries(phonebook);
// // a[0], a[1]   b[0], b[1]
// entries.sort(([keyA, valueA], [keyB, valueB]) => {
//   //   return valueB.localeCompare(valueA);
//   return valueB - valueA;
// });

// for (const x of entries) {
//   console.log(x);
// }

// const arr = [1, 2, 2, 3, 4, 4, 5, 4, 5];

// function uniqueArr(arr) {
//   return [...new Set(arr)];
// }

// console.log(uniqueArr(arr));

// const map = new Map();

// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);
// map.set("d", 4);
// console.log(map);

// MAP -> helps with keeping the order of the insertion of the key-value pairs
// SET -> helps with keeping unique values inside
