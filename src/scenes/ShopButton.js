import "../style.css";
import Phaser from "phaser";

export default class ShopButton extends Phaser.Scene {
  constructor() {
    super({ key: "ShopButton" });
  }

  preload() {
    // Load images
    this.load.image("shop", "/shop-elements/shop_title.png");
  }

  create() {
    const shopButton = this.add
      .image(200, 730, "shop")
      .setInteractive({ useHandCursor: true })
      .setDisplaySize(130, 100);

      shopButton.on("pointerover", () => {
        shopButton.setScale(0.55); 
      });

      shopButton.on("pointerout", () => {
        shopButton.setScale(0.5); 
      });

    shopButton.on("pointerdown", () => {
      this.scene.launch("Shop");
    });
  }
}
