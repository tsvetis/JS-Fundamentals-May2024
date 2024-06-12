// Function Declaration -> no HOISTING!
// const echo2 = function (data) {
//   if (typeof data === "string" || typeof data === "number") {
//     console.log(typeof data);
//   } else {
//     console.log("Parameter is not suitable for printing");
//   }
// };

// Function Declaration -> BEING HOISTED!
function echo(param) {
  const dataType = typeof param;
  console.log(dataType);

  if (dataType === "string" || dataType === "number") {
    console.log(param);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}

// echo("Hello, World");
// echo(-55);
// echo({});
echo(null);
// echo("Kircho");
// echo(undefined);
