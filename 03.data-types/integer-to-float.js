function solve(a, b, c) {
  // sum the numbers
  const sum = a + b + c;
  const sumString = `${sum}`; // String(sum)

  // is the number float or interger?
  let isFloat = false;
  for (let i = 0; i < sumString.length; i++) {
    if (sumString[i] === ".") {
      isFloat = true;
      break;
    }
  }

  const output = isFloat ? "Float" : "Integer";
  console.log(`${sum} - ${output}`);
}

solve(9, 100, 1.1);
solve(1, 2, 3.123);
solve(100, 200, 300);
