function solve(firstName, lastName, age) {
  const person = {
    firstName: firstName,
    lastName,
    age,
  };

  //   person.firstName = firstName;
  //   person.lastName = lastName;
  //   person.age = age;

  return person;
}

console.log(solve("Peter", "Pan", 20));
