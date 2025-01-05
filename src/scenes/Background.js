import Phaser from "phaser";

export default class Background extends Phaser.Scene {
  constructor() {
    super({ key: "Background", active: true }); // Active by default
  }

  preload() {
    // Load the background image
    this.load.image("background", "/shop-elements/game_background.jpg");
  }

  create() {
    // Add the background image
    this.add
      .image(400, 400, "background")
      .setOrigin(0.5, 0.5)
      .setDisplaySize(800, 800);
  }
}
