import Assets from "./utils/assets.js";
import Sprites from "./components/Sprites.js";

const canvas = document.getElementById("base_layer");
const context = canvas.getContext("2d");

const bgCanvas = document.getElementById("bg_layer");
const bgContext = canvas.getContext("2d");

// load and store assets
const assetsList = [
  {
    name: "background",
    url: "./assets/bg_stage_1.jpg",
  },
  {
    name: "box_bin",
    url: "./assets/box_bin.png",
  },
  {
    name: "chemical_bin",
    url: "./assets/chemical_bin.png",
  },
  {
    name: "metal_bin",
    url: "./assets/metal_bin.png",
  },
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
    if (asset.name === "background") {
      drawBackground(asset.image);
    } else {
      drawBins(asset);
    }
  });
}

function drawTrash(image) {
  new Sprites(image, 150, 100, 50, 50).draw(context);
}

function drawBackground(image) {
  new Sprites(image, 0, 0, bgCanvas.width, bgCanvas.height).draw(bgContext);
}

function drawBins({name, image}) {
  if (name === "box_bin") {
    new Sprites(image, canvas.width * 0.25, canvas.height - 105, 100, 100).draw(
      context
    );
  } else if (name === "chemical_bin") {
    new Sprites(image, canvas.width * 0.45, canvas.height - 105, 100, 100).draw(
      context
    );
  } else if (name === "metal_bin") {
    new Sprites(image, canvas.width * 0.65, canvas.height - 105, 100, 100).draw(
      context
    );
  }
}

window.addEventListener("load", startGame);
