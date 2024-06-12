function solve(nums) {
  const firstEl = nums[0];
  const lastEl = nums[nums.length - 1];
  const sum = firstEl + lastEl;
  console.log(sum);
}

solve([20, 30, 40]);
solve([5, 10]);
solve([2]);
