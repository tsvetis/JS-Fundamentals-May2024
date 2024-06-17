function calcFirstAndLastNumber(arr) {
  const firstNum = Number(arr.shift());
  const lastNum = Number(arr.pop());
  console.log(firstNum + lastNum);
}

calcFirstAndLastNumber(["5"]);
calcFirstAndLastNumber(["5", "10"]);
calcFirstAndLastNumber(["20", "30", "40"]);
