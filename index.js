import Assets from "./utils/assets.js";
import Sprites from "./components/Sprites.js";

const canvas = document.getElementById("base_layer");
const context = canvas.getContext("2d");

// load and store assets
const assetsList = [
  {
    name: "box_1",
    url: "./assets/box_1.png",
  },
];

const assets = new Assets().loadImages(assetsList);

function startGame() {
  draw();
}

function draw() {
  assets.gameAssets.forEach((asset) => {
    if (asset.name === "box_1") {
      drawTrash(asset.image);
    }
  });
}

function drawTrash(image) {
  new Sprites(image, 150, 100, 50, 50).draw(context);
}

window.addEventListener("load", startGame);
