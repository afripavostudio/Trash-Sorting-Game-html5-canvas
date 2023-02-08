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

let background,
  trash = [],
  bins = [],
  lastAnimationFrameTime = 0,
  elapsed;

const assets = new Assets().loadImages(assetsList);

function startGame() {
  draw();

  requestAnimationFrame(animate);
}

function animate(now) {
  let trashEl = trash[0];

  elapsed = (now - lastAnimationFrameTime) / 1000;
  // clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // updates
  trashEl.y += 80 * elapsed;

  if (trashEl.y > canvas.height) {
    trashEl.y = -50;
  }

  // draw();
  background.draw(bgContext);
  bins.forEach((bin) => bin.draw(context));
  trashEl.draw(context);

  lastAnimationFrameTime = now;
  requestAnimationFrame(animate);
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
  trash.push(new Sprites(image, 150, 100, 50, 50).draw(context));
}

function drawBackground(image) {
  background = new Sprites(image, 0, 0, bgCanvas.width, bgCanvas.height).draw(
    bgContext
  );
}

function drawBins({name, image}) {
  if (name === "box_bin") {
    bins.push(
      new Sprites(
        image,
        canvas.width * 0.25,
        canvas.height - 105,
        100,
        100
      ).draw(context)
    );
  } else if (name === "chemical_bin") {
    bins.push(
      new Sprites(
        image,
        canvas.width * 0.45,
        canvas.height - 105,
        100,
        100
      ).draw(context)
    );
  } else if (name === "metal_bin") {
    bins.push(
      new Sprites(
        image,
        canvas.width * 0.65,
        canvas.height - 105,
        100,
        100
      ).draw(context)
    );
  }
}

window.addEventListener("load", startGame);
