function solve(n, nums) {
  // reverse the array
  const reversed = [];

  for (let i = n - 1; i >= 0; i--) {
    reversed.push(nums[i]);
  }

  console.log(reversed.join(" "));
}

solve(3, [10, 20, 30, 40]);
solve(4, [-1, 20, 99, 5]);
solve(2, [123, 11, 99, 5]);
