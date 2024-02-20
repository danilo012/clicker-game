/**
 * Represents an item that can be purchased in the clicker game.
 * @interface
 * @property {string} name - The name of the item.
 * @property {number} cost - The cost of the item in honey.
 * @property {number} multiplier - The multiplier that the item applies to honey production.
 * @property {number} perSecond - The amount of honey produced per second by the item.
 * @property {string} description - A description of the item.
 * @property {string} [emoji] - An optional emoji representing the item.
 */
export interface Item {
  name: string;
  cost: number;
  multiplier: number;
  perSecond: number;
  description: string;
  emoji?: string;
}

/**
 * An object containing all the items that can be purchased in the game.
 * @constant
 * @type {Object<string, Item>}
 */
export const items: { [key: string]: Item } = {
  smallBee: {
    name: "Very Small Bee",
    cost: 20,
    multiplier: 0.1,
    perSecond: 1,
    description:
      "A tiny bee that doesn't produce much honey, but is a good starting point for your hive.",
    emoji: "🐝",
  },

  workerBee: {
    name: "Worker Bee",
    cost: 100,
    multiplier: 1,
    perSecond: 2,
    description:
      "The backbone of any bee colony, this bee works tirelessly to gather nectar and pollen and produce honey.",
    emoji: "🐝",
  },

  honeycomb: {
    name: "Honeycomb",
    cost: 500,
    multiplier: 2,
    perSecond: 3,
    description:
      "A hexagonal wax structure that bees build to store their honey and raise their young.",
    emoji: "🍯",
  },

  beekeepersHat: {
    name: "Beekeeper's Hat",
    cost: 1000,
    multiplier: 3,
    perSecond: 4,
    description:
      "A hat with a veil that protects the beekeeper's head and face from bee stings.",
    emoji: "🧢",
  },

  queenBee: {
    name: "Queen Bee",
    cost: 2500,
    multiplier: 4,
    perSecond: 5,
    description:
      "The ruler of the hive, the queen bee is responsible for laying all the eggs and maintaining the colony's social order.",
    emoji: "👑",
  },

  droneBee: {
    name: "Drone Bee",
    cost: 5000,
    multiplier: 5,
    perSecond: 6,
    description:
      "A male bee whose sole purpose is to mate with the queen bee. Essential for the survival of the colony.",
    emoji: "🐝",
  },

  goldenFlower: {
    name: "Golden Flower",
    cost: 12500,
    multiplier: 6,
    perSecond: 7,
    description:
      "A rare flower that produces honey with a distinct flavor and high nutritional value.",
    emoji: "🌻",
  },

  honeyPot: {
    name: "Honey Pot",
    cost: 20000,
    multiplier: 7,
    perSecond: 8,
    description:
      "A pot filled with delicious, golden honey that's ready for human consumption.",
    emoji: "🍯",
  },

  beeSuit: {
    name: "Bee Suit",
    cost: 100000,
    multiplier: 8,
    perSecond: 9,
    description:
      "A protective suit that covers the entire body and prevents bee stings.",
    emoji: "👩‍🚀",
  },

  hive: {
    name: "Hive",
    cost: 500000,
    multiplier: 9,
    perSecond: 10,
    description:
      "A structure made of wax and propolis that houses a bee colony.",
    emoji: "🏡",
  },

  royalJelly: {
    name: "Royal Jelly",
    cost: 1000000,
    multiplier: 10,
    perSecond: 11,
    description:
      "A special substance secreted by worker bees that's fed exclusively to the queen bee and her larvae.",
    emoji: "👑",
  },

  pollinatorDrone: {
    name: "Pollinator Drone",
    cost: 2500000,
    multiplier: 11,
    perSecond: 12,
    description:
      "A specialized drone that's designed to pollinate flowers in large quantities, significantly boosting the efficiency of the bee colony.",
    emoji: "🚁",
  },

  royalHive: {
    name: "Royal Hive",
    cost: 5000000,
    multiplier: 12,
    perSecond: 13,
    description:
      "A luxurious hive fit for a queen, with spacious chambers and plenty of room for her attendants.",
    emoji: "🏰",
  },

  apiary: {
    name: "Apiary",
    cost: 10000000,
    multiplier: 13,
    perSecond: 14,
    description:
      "A collection of beehives that's used for commercial honey production.",
    emoji: "🏭",
  },

  pollenCollector: {
    name: "Pollen Collector",
    cost: 25000000,
    multiplier: 14,
    perSecond: 15,
    description:
      "A machine that automatically collects pollen from flowers, making the work of the bees a little easier.",
    emoji: "🌼",
  },

  royalBee: {
    name: "Royal Bee",
    cost: 50000000,
    multiplier: 15,
    perSecond: 16,
    description:
      " A majestic bee with a crown, known for its superior pollen collection and exquisite golden wings.",
    emoji: "🐝",
  },

  diamondHive: {
    name: "Diamond Hive",
    cost: 100000000,
    multiplier: 16,
    perSecond: 17,
    description:
      "A hive made entirely of diamond, the ultimate symbol of luxury and prestige.",
    emoji: "💎",
  },

  honeyExtractor: {
    name: "Honey Extractor",
    cost: 500000000,
    multiplier: 17,
    perSecond: 18,
    description:
      "A device that spins the honeycombs and extracts the honey using centrifugal force.",
    emoji: "🍯",
  },
  beehiveObservatory: {
    name: "Beehive Observatory",
    cost: 1000000000,
    multiplier: 18,
    perSecond: 19,
    description:
      "An advanced bee observatory with high-tech cameras and sensors for studying bee behavior in their habitat.",
    emoji: "🔭",
  },
  beeMuseum: {
    name: "Bee Museum",
    cost: 5000000000,
    multiplier: 19,
    perSecond: 20,
    description:
      "A place that showcases the history, culture, and science of bees and honey.",
    emoji: "🏛️",
  },
  honeyBeeStatue: {
    name: "Honey Bee Statue",
    cost: 10000000000,
    multiplier: 21,
    perSecond: 22,
    description:
      " A statue of a honey bee made of pure gold that represents the ultimate achievement in beekeeping.",
    emoji: "🗽",
  },
  programmerBee: {
    name: "Programmer Bee",
    cost: 50000000000,
    multiplier: 22,
    perSecond: 23,
    description:
      "A highly skilled bee who knows how to write code in languages such as JavaScript, React, TypeScript, and more. She has a strong background in front-end development.",
    emoji: "🐝💻",
  },
};
