function mathPower(number, power) {
  //   const result = number ** power;
  //   const result = Math.pow(number, power);
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }

  console.log(result);
}

mathPower(2, 8);
mathPower(3, 4);
