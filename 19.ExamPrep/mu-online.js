function solve(input) {
  let hp = 100;
  let loot = 0;

  const rooms = input.split("|");

  for (let i = 0; i < rooms.length; i++) {
    const room = rooms[i].split(" ");
    const command = room[0];
    let value = Number(room[1]);

    if (command === "potion") {
      if (hp + value > 100) {
        value = 100 - hp;
      }
      hp += value;

      console.log(`You healed for ${value} hp.`);
      console.log(`Current health: ${hp} hp.`);
    } else if (command === "chest") {
      loot += value;
      console.log(`You found ${value} bitcoins.`);
    } else {
      hp -= value;

      if (hp <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      } else {
        console.log(`You slayed ${command}.`);
      }
    }
  }
}

// Input:
// solve(`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`);
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 bitcoins.
// You died! Killed by boss.
// Best room: 6

// Input:
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
// Output:
// You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 bitcoins.
// You slayed snake.
// You found 110 bitcoins.
// You've made it!
// Bitcoins: 120
// Health: 65
