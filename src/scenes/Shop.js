import "../style.css";
import Phaser from "phaser";

export default class Shop extends Phaser.Scene {
  constructor() {
    super({ key: "Shop", active: true }); // Active by default
  }

  preload() {
    // load webfont
    this.load.script(
      "webfont",
      "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
    );

    // Load images
    for (let i = 1; i <= 8; i++) {
      this.load.image(`item${i}`, `/Assets/${i}.png`);
    }
    this.load.image("shop", "/shop-elements/shop_title.png");
    this.load.image("shopBg", "/shop-elements/SHOP_BG_WITHTITLE.png");
    this.load.image("shopTitle", "/shop-elements/shop title.png");
    this.load.image("closeBtn", "/shop-elements/Close.png");
    this.load.image("buyBtn", "/shop-elements/Buy_Button02.png");
    this.load.image("itemBox", "/shop-elements/Itemsbox1_shop.png");
    this.load.image("itemBox2", "/shop-elements/Itemsbox2_shop.png");
    this.load.image("gas", "/shop-elements/GAS_shop.png");
  }

  create() {
    WebFont.load({
      custom: {
        families: ["ChubbyChooRegular"],
      },
      active: () => {
        // Add background shop image
        this.add.image(400, 330, "shopBg").setDisplaySize(600, 650);

        // Add close button
        const closeBtn = this.add
          .image(655, 80, "closeBtn")
          .setInteractive({ useHandCursor: true })
          .setDisplaySize(50, 50);

        closeBtn.on("pointerover", () => {
          closeBtn.setScale(0.65); // change the size of the button when pointerover
        });

        closeBtn.on("pointerout", () => {
          closeBtn.setScale(0.6);
        });

        closeBtn.on("pointerdown", () => {
          this.scene.stop(); // close scene when clicking on the close button
        });

        // Add gas image
        this.add.image(405, 170, "gas").setDisplaySize(240, 60);

        // Shop items
        const items = [
          { key: "item1", name: "item1", price: 100 },
          { key: "item2", name: "item2", price: 250 },
          { key: "item3", name: "item3", price: 400 },
          { key: "item4", name: "item4", price: 500 },
          { key: "item5", name: "item5", price: 600 },
          { key: "item6", name: "item6", price: 650 },
          { key: "item7", name: "item7", price: 700 },
          { key: "item8", name: "item8", price: 750 },
          { key: "item6", name: "item9", price: 800 },
          { key: "item7", name: "item10", price: 900 },
        ];

        // Create a container for the items
        const itemContainer = this.add.container(0, 0);
        itemContainer.setPosition(50, 0);
        itemContainer.setScale(0.9);

        const itemHeight = 120;
        const visibleItems = 2.8;
        const visibleHeight = visibleItems * itemHeight;

        // Add mask to the container to adjust it
        const maskShape = this.add.graphics();
        maskShape.fillRect(120, 205, 700, visibleHeight);
        itemContainer.setMask(maskShape.createGeometryMask());

        items.forEach((item, index) => {
          const baseY = 280 + index * itemHeight;

          // alternate between two item box based on the index (even or odd) and add it to the container
          if (index % 2 === 0) {
            const itemBox = this.add
              .image(390, baseY + 30, "itemBox")
              .setDisplaySize(420, 150);
            itemContainer.add(itemBox);
          } else {
            const itemBox = this.add
              .image(390, baseY + 30, "itemBox2")
              .setDisplaySize(420, 150);
            itemContainer.add(itemBox);
          }

          // Add item image and add it to the container
          const itemImage = this.add
            .image(255, baseY, item.key)
            .setDisplaySize(40, 40);
          itemContainer.add(itemImage);

          // Add item text and add it to the container
          const textItem = this.add.text(
            310,
            baseY - 20,
            `level ${index + 1}`,
            {
              fontSize: "40px",
              color: "#ffffff",
              fontFamily: "ChubbyChooRegular",
            }
          );
          itemContainer.add(textItem);

          // Add item button and add it to the container
          const buyBtn = this.add
            .image(520, baseY, "buyBtn")
            .setInteractive({ useHandCursor: true })
            .setDisplaySize(130, 70);
          itemContainer.add(buyBtn);

          buyBtn.on("pointerover", () => {
            buyBtn.setTint(0xaaaaaa); // Change the tint to indicate hover
          });

          buyBtn.on("pointerout", () => {
            buyBtn.clearTint(); // Remove the tint
          });

          // Add price item and add it to the container
          const priceItem = this.add.text(480, baseY - 18, `${item.price}`, {
            fontSize: "28px",
            color: "white",
            fontFamily: "ChubbyChooRegular",
          });
          itemContainer.add(priceItem);

          // Display alert text when clicking on the item button
          buyBtn.on("pointerdown", () => {
            const alertText = this.add
              .text(400, 585, `Item ${item.name} is purchased!`, {
                font: "28px ChubbyChooRegular",
                fill: "#ffffff",
                backgroundColor: "#ecf0f1",
                padding: { x: 20, y: 15 },
                stroke: "#000000",
                strokeThickness: 4,
              })
              .setOrigin(0.5);

            this.tweens.add({
              targets: alertText,
              alpha: 0,
              duration: 3000,
              onComplete: () => {
                alertText.destroy(); // Remove the alert after the duration completed
              },
            });
          });
        });

        // Scroll logic
        this.input.on(
          "wheel",
          (pointer, gameObjects, deltaX, deltaY, deltaZ) => {
            itemContainer.y -= deltaY * 0.5;
            itemContainer.y = Phaser.Math.Clamp(
              itemContainer.y,
              -itemHeight * (items.length - visibleItems),
              0
            );
          }
        );
      },
    });
  }
}
