function solve(jsonString) {
  const obj = JSON.parse(jsonString);
  const tuples = Object.entries(obj);

  for (const tuple of tuples) {
    console.log(`${tuple[0]}: ${tuple[1]}`);
  }
}

solve(`{"name":"George", "age":40, "town": "Sofia"}`);
