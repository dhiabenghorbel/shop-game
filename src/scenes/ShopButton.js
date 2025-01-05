import "../style.css";
import Phaser from "phaser";

export default class ShopButton extends Phaser.Scene {
  constructor() {
    super({ key: "ShopButton", active: true }); // Active by default
  }

  preload() {
    // Load shop button image
    this.load.image("shop", "/shop-elements/shop_title.png");
  }

  create() {
    //Add the shop button image
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

    // When the button is clicked, launch the 'Shop' scene
    shopButton.on("pointerdown", () => {
      if (!this.scene.isActive("Shop")) {
        this.scene.launch("Shop");
      }
    });
  }
}
