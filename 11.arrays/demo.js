// const numbersList = [11, 2, 2, 3, 4, 5, 12, 12, 3, 21, 3, 3, 3, 123];

// const lengthOfArray = numbersList.length;
// const firstNumberFromArray = numbersList[0];
// const lastNumberFromArray = numbersList[lengthOfArray - 1];
// console.log(firstNumberFromArray);
// console.log(lastNumberFromArray);

const nums = [1, 2, 3, 4];
nums[nums.length] = 505;
nums[nums.length] = 13;
nums[nums.length] = 13;
nums[nums.length] = 13;
nums[nums.length] = 13;
nums[nums.length] = 13;
nums.push(77);
// console.log(nums);

//               0  1  2
const numbers = [1, 2, 3];
numbers.push(14);

// for (let i = 0; i < numbers.length; i++) {
//   console.log("index: ", i, " value: ", numbers[i]);
// }

// console.log(numbers);

for (const num of numbers) {
  console.log(num);
}
