import Phaser from "phaser";
import Shop from "./scenes/Shop.js"; // Import the ShopScene class
import ShopButton from "./scenes/ShopButton.js"; // Import the ShopButton class

// Game configuration
const config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 800,
  canvas: gameCanvas,
  backgroundColor: "#2a2a2a",
  Physics: {
    default: "arcade"
  },
  scene: [Shop,ShopButton],
};

// Initialize the game
const game = new Phaser.Game(config);
