function solve(input) {
  let msg = input.shift();

  while (input[0] !== "Reveal") {
    const line = input.shift();
    const tokens = line.split(":|:");
    const cmd = tokens[0];

    switch (cmd) {
      case "InsertSpace":
        const index = Number(tokens[1]);
        const firstPart = msg.slice(0, index);
        const secondPart = msg.slice(index);
        msg = `${firstPart} ${secondPart}`;
        break;

      case "Reverse":
        const substring = tokens[1];
        const firstIndex = msg.indexOf(substring);

        if (firstIndex === -1) {
          console.log("error");
          continue;
        }

        const left = msg.slice(0, firstIndex);
        const indexToContinueFrom = firstIndex + substring.length;
        const right = msg.slice(indexToContinueFrom);
        const strToArr = substring.split("");
        const reversedArr = strToArr.reverse();
        const reversedSubstr = reversedArr.join("");
        msg = `${left}${right}${reversedSubstr}`;
        break;

      case "ChangeAll":
        const [_, match, replacement] = tokens;
        msg = msg.split(match).join(replacement);
        break;
    }

    console.log(msg);
  }

  console.log(`You have a new text message: ${msg}`);
}

solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
// Output:
// hellodar!gnil
// hellodarling!
// hello darling!
// You have a new text message: hello darling!
