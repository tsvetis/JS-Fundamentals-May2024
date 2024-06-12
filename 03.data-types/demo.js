/** GLOBAL */
// const, let vs var?
var b = 7; // Global Scope

for (let i = 0; i < 10; i++) {
  /** BLOCK */
  let a = 5; // BLOCK Scope
}

if (true) {
  /** BLOCK */
  const c = 5; // BLOCK Scope
}

var b = 5; // Global Scope
console.log(b);

// Naming Conventions
// camelCase
// PascalCase
// snake_case
// kebab-case
