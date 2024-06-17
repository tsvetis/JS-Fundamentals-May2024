function solve(input) {
  let food = Number(input[0]) * 1000;
  let hay = Number(input[1]) * 1000;
  let cover = Number(input[2]) * 1000;
  const weight = Number(input[3]) * 1000;
  const coverConsumption = weight / 3;
  //   const MONTH_IN_DAYS = 30;

  for (let i = 1; i <= 30; i++) {
    food -= 300;

    if (i % 2 === 0) {
      hay -= food * 0.05;
    }

    if (i % 3 === 0) {
      cover -= coverConsumption;
    }

    if (food < 0 || hay < 0 || cover < 0) {
      console.log("Merry must go to the pet store!");
      return;
    }
  }

  console.log(
    `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
      2
    )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
  );
}

// INPUT
solve([
  10, // food
  5, // hay
  5.2, // cover
  1, // weigth
]);
// OUTPUT
/**
 Everything is fine! Puppy is happy! Food: 1.00, Hay: 1.10, Cover: 1.87.
 */

solve([1, 1.5, 3, 1.5]);
solve([9, 5, 5.2, 1]);
