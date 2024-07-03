function solve(input) {
  const phonebook = {};

  for (const personDetails of input) {
    const detailsArray = personDetails.split(" ");
    const name = detailsArray[0];
    const number = detailsArray[1];
    phonebook[name] = number;
  }

  for (const key in phonebook) {
    console.log(`${key} -> ${phonebook[key]}`);
  }
}

solve(["Tim 123", "Maria 234", "Gosho 345", "Tim 456"]);
