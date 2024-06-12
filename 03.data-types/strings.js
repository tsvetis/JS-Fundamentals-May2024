let country = "Bulgaria"; // Immutable

// country[0] = "Z"; => DOESNT WORK

country += "zdrasti!";
console.log(country);
for (let i = country.length - 1; i >= 0; i--) {
  console.log(`${country[i]} - ${i}`);
}
