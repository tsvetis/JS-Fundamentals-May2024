function solve(name, lastName, hairColor) {
  const person = { name, lastName, hairColor };

  console.log(JSON.stringify(person));
}

solve("George", "Jones", "Brown");
