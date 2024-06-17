function processOddNums(arr) {
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const num = arr[index];

    if (index % 2 !== 0) {
      const oddNum = num * 2;
      newArr.unshift(oddNum);
    }
  }

  console.log(newArr.join(" "));
}

processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3]);
