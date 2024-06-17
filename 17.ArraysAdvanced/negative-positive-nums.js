function negativePositiveNumbers(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element >= 0) {
      result.push(element); // push -> add from end
    } else {
      result.unshift(element); // unshift -> add from begining
    }
  }

  console.log(result.join("\n"));
}

// INPUT
negativePositiveNumbers([7, -2, 8, 9]); // [-2,7,8,9]
console.log("--------");
negativePositiveNumbers([3, -2, 0, -1]); // [-1,-2,3,0]
console.log("--------");
negativePositiveNumbers([-3, 2, -1, 0]); // [-1,-3,2,0]
