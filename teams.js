'use strict';
// Data needed for a later exercise

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  whoScored() {
    let scorer = 'Goal ';
    for (const key of game.scored) {
      return (scorer += key);
    }
    console.log(scorer);
  },
};
// 1. Print the scoring players Goal 1...Goal 2...
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Calculate the average odd
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
console.log(average);
average /= odds.length;
console.log(average);

// 3. Print content of object
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game.team}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
