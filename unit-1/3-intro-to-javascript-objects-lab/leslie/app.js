const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

const pokemon = [
  { number: 1, name: "Bulbasaur", type: "grass", hp: 45, starter: true },
  { number: 2, name: "Ivysaur", type: "grass", hp: 60, starter: false },
  { number: 3, name: "Venusaur", type: "grass", hp: 80, starter: false },
  { number: 4, name: "Charmander", type: "fire", hp: 39, starter: true },
  { number: 5, name: "Charmeleon", type: "fire", hp: 58, starter: false },
  { number: 6, name: "Charizard", type: "fire", hp: 78, starter: false },
  { number: 7, name: "Squirtle", type: "water", hp: 44, starter: true },
  { number: 8, name: "Wartortle", type: "water", hp: 59, starter: false },
  { number: 9, name: "Blastoise", type: "water", hp: 79, starter: false },
  { number: 10, name: "Caterpie", type: "bug", hp: 45, starter: false },
  { number: 11, name: "Metapod", type: "bug", hp: 50, starter: false },
  { number: 12, name: "Butterfree", type: "bug", hp: 60, starter: false },
  { number: 13, name: "Weedle", type: "bug", hp: 40, starter: false },
  { number: 14, name: "Kakuna", type: "bug", hp: 45, starter: false },
  { number: 15, name: "Beedrill", type: "bug", hp: 65, starter: false },
  { number: 16, name: "Pidgey", type: "normal", hp: 40, starter: false },
  { number: 17, name: "Pidgeotto", type: "normal", hp: 63, starter: false },
  { number: 18, name: "Pidgeot", type: "normal", hp: 83, starter: false },
  { number: 19, name: "Rattata", type: "normal", hp: 30, starter: false },
  { number: 20, name: "Raticate", type: "normal", hp: 55, starter: false },
  { number: 21, name: "Spearow", type: "normal", hp: 40, starter: false },
  { number: 22, name: "Fearow", type: "normal", hp: 65, starter: false },
  { number: 23, name: "Ekans", type: "poison", hp: 35, starter: false },
  { number: 24, name: "Arbok", type: "poison", hp: 60, starter: false },
  { number: 25, name: "Pikachu", type: "electric", hp: 35, starter: true },
  { number: 26, name: "Raichu", type: "electric", hp: 60, starter: false },
  { number: 27, name: "Sandshrew", type: "ground", hp: 50, starter: false },
  { number: 28, name: "Sandslash", type: "ground", hp: 75, starter: false },
  { number: 29, name: "Nidoran♀", type: "poison", hp: 55, starter: false },
  { number: 30, name: "Nidorina", type: "poison", hp: 70, starter: false },
  { number: 31, name: "Nidoqueen", type: "poison", hp: 90, starter: false },
  { number: 32, name: "Nidoran♂", type: "poison", hp: 46, starter: false },
  { number: 33, name: "Nidorino", type: "poison", hp: 61, starter: false },
  { number: 34, name: "Nidoking", type: "poison", hp: 81, starter: false },
  { number: 35, name: "Clefairy", type: "fairy", hp: 70, starter: false },
  { number: 36, name: "Clefable", type: "fairy", hp: 95, starter: false },
  { number: 37, name: "Vulpix", type: "fire", hp: 38, starter: false },
  { number: 38, name: "Ninetales", type: "fire", hp: 73, starter: false },
  { number: 39, name: "Jigglypuff", type: "normal", hp: 115, starter: false },
  { number: 40, name: "Wigglytuff", type: "normal", hp: 140, starter: false },
  { number: 41, name: "Zubat", type: "poison", hp: 40, starter: false },
  { number: 42, name: "Golbat", type: "poison", hp: 75, starter: false },
  { number: 43, name: "Oddish", type: "grass", hp: 45, starter: false },
  { number: 44, name: "Gloom", type: "grass", hp: 60, starter: false },
  { number: 45, name: "Vileplume", type: "grass", hp: 75, starter: false },
  { number: 46, name: "Paras", type: "bug", hp: 35, starter: false },
  { number: 47, name: "Parasect", type: "bug", hp: 60, starter: false },
  { number: 48, name: "Venonat", type: "bug", hp: 60, starter: false },
  { number: 49, name: "Venomoth", type: "bug", hp: 70, starter: false },
  { number: 50, name: "Diglett", type: "ground", hp: 10, starter: false },
  { number: 51, name: "Dugtrio", type: "ground", hp: 35, starter: false },
  { number: 52, name: "Meowth", type: "normal", hp: 40, starter: false },
  { number: 53, name: "Persian", type: "normal", hp: 65, starter: false },
  { number: 54, name: "Psyduck", type: "water", hp: 50, starter: false },
  { number: 55, name: "Golduck", type: "water", hp: 80, starter: false },
  { number: 56, name: "Mankey", type: "fighting", hp: 40, starter: false },
  { number: 57, name: "Primeape", type: "fighting", hp: 65, starter: false },
  { number: 58, name: "Growlithe", type: "fire", hp: 55, starter: false },
  { number: 59, name: "Arcanine", type: "fire", hp: 90, starter: false },
  { number: 60, name: "Poliwag", type: "water", hp: 40, starter: false },
  { number: 61, name: "Poliwhirl", type: "water", hp: 65, starter: false },
  { number: 62, name: "Poliwrath", type: "water", hp: 90, starter: false },
  { number: 63, name: "Abra", type: "psychic", hp: 25, starter: false },
  { number: 64, name: "Kadabra", type: "psychic", hp: 40, starter: false },
  { number: 65, name: "Alakazam", type: "psychic", hp: 55, starter: false },
  { number: 66, name: "Machop", type: "fighting", hp: 70, starter: false },
  { number: 67, name: "Machoke", type: "fighting", hp: 80, starter: false },
  { number: 68, name: "Machamp", type: "fighting", hp: 90, starter: false },
  { number: 69, name: "Bellsprout", type: "grass", hp: 50, starter: false },
  { number: 70, name: "Weepinbell", type: "grass", hp: 65, starter: false },
  { number: 71, name: "Victreebel", type: "grass", hp: 80, starter: false },
  { number: 72, name: "Tentacool", type: "water", hp: 40, starter: false },
  { number: 73, name: "Tentacruel", type: "water", hp: 80, starter: false },
  { number: 74, name: "Geodude", type: "rock", hp: 40, starter: false },
  { number: 75, name: "Graveler", type: "rock", hp: 55, starter: false },
  { number: 76, name: "Golem", type: "rock", hp: 80, starter: false },
  { number: 77, name: "Ponyta", type: "fire", hp: 50, starter: false },
  { number: 78, name: "Rapidash", type: "fire", hp: 65, starter: false },
  { number: 79, name: "Slowpoke", type: "water", hp: 90, starter: false },
  { number: 80, name: "Slowbro", type: "water", hp: 95, starter: false },
  { number: 81, name: "Magnemite", type: "electric", hp: 25, starter: false },
  { number: 82, name: "Magneton", type: "electric", hp: 50, starter: false },
  { number: 83, name: "Farfetch'd", type: "normal", hp: 52, starter: false },
  { number: 84, name: "Doduo", type: "normal", hp: 35, starter: false },
  { number: 85, name: "Dodrio", type: "normal", hp: 60, starter: false },
  { number: 86, name: "Seel", type: "water", hp: 65, starter: false },
  { number: 87, name: "Dewgong", type: "water", hp: 90, starter: false },
  { number: 88, name: "Grimer", type: "poison", hp: 80, starter: false },
  { number: 89, name: "Muk", type: "poison", hp: 105, starter: false },
  { number: 90, name: "Shellder", type: "water", hp: 30, starter: false },
  { number: 91, name: "Cloyster", type: "water", hp: 50, starter: false },
  { number: 92, name: "Gastly", type: "ghost", hp: 30, starter: false },
  { number: 93, name: "Haunter", type: "ghost", hp: 45, starter: false },
  { number: 94, name: "Gengar", type: "ghost", hp: 60, starter: false },
  { number: 95, name: "Onix", type: "rock", hp: 35, starter: false },
  { number: 96, name: "Drowzee", type: "psychic", hp: 60, starter: false },
  { number: 97, name: "Hypno", type: "psychic", hp: 85, starter: false },
  { number: 98, name: "Krabby", type: "water", hp: 30, starter: false },
  { number: 99, name: "Kingler", type: "water", hp: 55, starter: false },
  { number: 100, name: "Voltorb", type: "electric", hp: 40, starter: false },
  { number: 101, name: "Electrode", type: "electric", hp: 40, starter: false },
  { number: 102, name: "Exeggcute", type: "grass", hp: 60, starter: false },
  { number: 103, name: "Exeggutor", type: "grass", hp: 95, starter: false },
  { number: 104, name: "Cubone", type: "ground", hp: 50, starter: false },
  { number: 105, name: "Marowak", type: "ground", hp: 60, starter: false },
  { number: 106, name: "Hitmonlee", type: "fighting", hp: 50, starter: false },
  { number: 107, name: "Hitmonchan", type: "fighting", hp: 50, starter: false },
  { number: 108, name: "Lickitung", type: "normal", hp: 90, starter: false },
  { number: 109, name: "Koffing", type: "poison", hp: 40, starter: false },
  { number: 110, name: "Weezing", type: "poison", hp: 65, starter: false },
  { number: 111, name: "Rhyhorn", type: "ground", hp: 80, starter: false },
  { number: 112, name: "Rhydon", type: "ground", hp: 105, starter: false },
  { number: 113, name: "Chansey", type: "normal", hp: 250, starter: false },
  { number: 114, name: "Tangela", type: "grass", hp: 65, starter: false },
  { number: 115, name: "Kangaskhan", type: "normal", hp: 105, starter: false },
  { number: 116, name: "Horsea", type: "water", hp: 30, starter: false },
  { number: 117, name: "Seadra", type: "water", hp: 55, starter: false },
  { number: 118, name: "Goldeen", type: "water", hp: 45, starter: false },
  { number: 119, name: "Seaking", type: "water", hp: 80, starter: false },
  { number: 120, name: "Staryu", type: "water", hp: 30, starter: false },
  { number: 121, name: "Starmie", type: "water", hp: 60, starter: false },
  { number: 122, name: "Mr. Mime", type: "psychic", hp: 40, starter: false },
  { number: 123, name: "Scyther", type: "bug", hp: 70, starter: false },
  { number: 124, name: "Jynx", type: "ice", hp: 65, starter: false },
  { number: 125, name: "Electabuzz", type: "electric", hp: 65, starter: false },
  { number: 126, name: "Magmar", type: "fire", hp: 65, starter: false },
  { number: 127, name: "Pinsir", type: "bug", hp: 65, starter: false },
  { number: 128, name: "Tauros", type: "normal", hp: 75, starter: false },
  { number: 129, name: "Magikarp", type: "water", hp: 20, starter: false },
  { number: 130, name: "Gyarados", type: "water", hp: 95, starter: false },
  { number: 131, name: "Lapras", type: "water", hp: 130, starter: false },
  { number: 132, name: "Ditto", type: "normal", hp: 48, starter: false },
  { number: 133, name: "Eevee", type: "normal", hp: 55, starter: false },
  { number: 134, name: "Vaporeon", type: "water", hp: 65, starter: false },
  { number: 135, name: "Jolteon", type: "electric", hp: 130, starter: false },
  { number: 136, name: "Flareon", type: "fire", hp: 65, starter: false },
  { number: 137, name: "Porygon", type: "normal", hp: 65, starter: false },
  { number: 138, name: "Omanyte", type: "rock", hp: 35, starter: false },
  { number: 139, name: "Omastar", type: "rock", hp: 70, starter: false },
  { number: 140, name: "Kabuto", type: "rock", hp: 30, starter: false },
  { number: 141, name: "Kabutops", type: "rock", hp: 60, starter: false },
  { number: 142, name: "Aerodactyl", type: "rock", hp: 80, starter: false },
  { number: 143, name: "Snorlax", type: "normal", hp: 160, starter: false },
  { number: 144, name: "Articuno", type: "ice", hp: 90, starter: false },
  { number: 145, name: "Zapdos", type: "electric", hp: 90, starter: false },
  { number: 146, name: "Moltres", type: "fire", hp: 90, starter: false },
  { number: 147, name: "Dratini", type: "dragon", hp: 41, starter: false },
  { number: 148, name: "Dragonair", type: "dragon", hp: 61, starter: false },
  { number: 149, name: "Dragonite", type: "dragon", hp: 91, starter: false },
  { number: 150, name: "Mewtwo", type: "psychic", hp: 106, starter: false },
  { number: 151, name: "Mew", type: "psychic", hp: 100, starter: false },
];

// console.dir(pokemon, { maxArrayLength: null });

// Exercise 1: console.log the name of Pokemon with the number 59 using the index of the Pokemon in the array.
let monsterInx;
for (const monster of pokemon) {
  if (monster.number === 59) {
    monsterInx = pokemon.indexOf(monster);
    console.log("Name of Pokémon with number 59: ", pokemon[monsterInx].name);
    break;
  }
}

// console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Hard";
console.log(game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// Get pokemon of number 4
for (const monster of pokemon) {
  if (monster.number === 4) {
    monsterInx = pokemon.indexOf(monster);

    console.log("Name of Pokémon with number 4:", pokemon[monsterInx].name);
    if (monster.starter) {
      console.log(monster.name, "is a starter Pokémon");
      game.party.push(monster);
      console.log(game);
    }
    break;
  }
}

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

// I will pick 3 highest HP pokémons from type dragon, psychic and ghost
const criteriaFound = {};
for (const monster of pokemon) {
  switch (monster.type) {
    case "dragon":
    case "psychic":
    case "ghost":
      if (monster.type in criteriaFound) {
        if (monster.hp > criteriaFound[monster.type].hp) {
          criteriaFound[monster.type] = monster;
          console.log("Replacing with a higher hp", monster.type);
        }
      } else {
        criteriaFound[monster.type] = monster;
        console.log("Registering a new", monster.type);
      }
      break;
    default:
      break;
  }
}
// console.log(criteriaFound);
game.party.push(
  criteriaFound.dragon,
  criteriaFound.psychic,
  criteriaFound.ghost,
);
console.log(game);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for (const gym of game.gyms) {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
}
console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// Find Charmeleon in the pokemon array
let monsterToFind = "Charmeleon";
for (const monster of pokemon) {
  if (monster.name === monsterToFind) {
    console.log("Evolved pokémon found:", monster);
    game.party.splice(0, 1, monster);
    console.log(game.party);
    break;
  }
}

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for (const monster of game.party) {
  console.log("Name of pokémon in party:", monster.name);
}
