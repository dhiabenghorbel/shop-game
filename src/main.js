import Phaser from "phaser";
import Shop from "./scenes/Shop.js"; // Import the ShopScene class
import ShopButton from "./scenes/ShopButton.js"; // Import the ShopButton class
import Background from "./scenes/Background.js"; // Import the Background class

// Game configuration
const config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 800,
  canvas: gameCanvas,
  Physics: {
    default: "arcade",
  },
  scene: [Background, Shop, ShopButton],
};

// Initialize the game
const game = new Phaser.Game(config);
