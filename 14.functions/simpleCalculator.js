function simpleCalc(number1, number2, operator) {
  // Helper functions
  const multiply = (x, y) => x * y;
  const sum = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const divide = (x, y) => x / y;

  // Printing logic
  switch (operator) {
    case "multiply":
      console.log(multiply(number1, number2));
      break;
    case "add":
      console.log(sum(number1, number2));
      break;
    case "divide":
      console.log(divide(number1, number2));
      break;
    case "subtract":
      console.log(subtract(number1, number2));
      break;
  }
}

simpleCalc(5, 10, "multiply"); // 50
