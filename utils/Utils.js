import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

// Configuration for Adjectives + Animals
const configAdjectivesAnimals = {
  dictionaries: [adjectives, animals],
  separator: "-",
  length: 2,
};

// Configuration for Colors + Animals
const configColorsAnimals = {
  dictionaries: [colors, animals],
  separator: "-",
  length: 2,
};

// Configuration for Adjectives + Colors + Animals
const configAdjectivesColorsAnimals = {
  dictionaries: [adjectives, colors, animals],
  separator: "-",
  length: 3,
};

// Array of configurations
const configs = [
  configAdjectivesAnimals,
  configColorsAnimals,
  configAdjectivesColorsAnimals,
];
const Utils = {
  getCurrentYear() {
    return new Date().getFullYear().toString();
  },

  async getRandomDpUrl() {
    const rand = Math.floor(Math.random() * 50);
    return `https://api.dicebear.com/9.x/adventurer-neutral/svg?flip=false&backgroundColor=d5663f&seed=${rand}`;
  },
  // Utility function to generate a random name
  async getRandomName() {
    // Select a random configuration
    const randomConfig = configs[Math.floor(Math.random() * configs.length)];

    // Generate and return the name using the selected configuration
    return uniqueNamesGenerator(randomConfig);
  },
};

export default Utils;
