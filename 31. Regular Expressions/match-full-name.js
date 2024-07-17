function solve(text) {
  const regexp = /\b[A-Z][a-z]+ \b[A-Z][a-z]+/g;
  const result = text.match(regexp);
  console.log(result.join(" "));
}

solve(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
