module.exports = class GamePiece {
  constructor(x, y, width, src) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.src = src
    this.dx = 1;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }


  draw(ctx) {
    const { x, y, height, width, src } = this;

    const image = new Image();
    image.src = src;
    image.onload = function() {
      ctx.draw(img, x, y)
    }

    // ctx.fillStyle = color;
    // ctx.fillRect(x, y, width, height);
  }
}