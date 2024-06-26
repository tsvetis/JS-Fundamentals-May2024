function solve(city) {
  const keys = Object.keys(city);

  for (const key of keys) {
    const value = city[key];
    console.log(`${key} -> ${value}`);
  }
}

const cityObj = {
  name: "Sofia",
  area: 492,
  asdsadsad: 123123123,
  country: "Bulgaria",
  postCode: 1000,
};

solve(cityObj);
