export default class Sprites {
  constructor(image, x, y, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.isHeld = false;
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);

    return this;
  }

  isDragged(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      this.isHeld = true;
    }
  }
}
