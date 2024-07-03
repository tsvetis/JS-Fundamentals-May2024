function solve(input) {
  const result = {};

  for (const row of input) {
    const [name, address] = row.split(":");
    result[name] = address;
  }

  const entries = Object.entries(result);
  entries.sort(([keyA, valueA], [keyB, valueB]) => {
    return keyA.localeCompare(keyB);
  });

  for (const [name, address] of entries) {
    console.log(`${name} -> ${address}`);
  }
}

solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlytltlltlt",
  "Bill:Ornery Rd",
]);
