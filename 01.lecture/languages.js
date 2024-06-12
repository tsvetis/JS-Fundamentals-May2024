// function solve(country) {
//   if (country === "USA") {
//     console.log("English");
//   } else if (country === "England") {
//     console.log("English");
//   } else if (country === "Spain") {
//     console.log("Spanish");
//   } else if (country === "Argentina") {
//     console.log("Spanish");
//   } else if (country === "Mexico") {
//     console.log("Spanish");
//   } else {
//     console.log("unknown");
//   }
// }

function solve(country) {
  switch (country) {
    case "USA":
    case "England":
      console.log("English");
      break;
    case "Spain":
    case "Argentina":
    case "Mexico":
      console.log("Spanish");
      break;

    default:
      console.log("unknown");
      break;
  }
}

solve("USA");
solve("Mexico");
solve("England");
solve("Spain");
solve("Bulgaria");
