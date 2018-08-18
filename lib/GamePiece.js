module.exports = class GamePiece {
  constructor(x, y, width, src, dx, dxv) {
    this.x = x;
    this.y = y;
    this.height = 40;
    this.width = width;
    this.src = src
    this.dx = dx;
    this.dy = 0;
    this.dxv = dxv;
    this.dyv = 1;
  }

  draw(ctx) {
    const { x, y, height, width, src } = this;
    const image = new Image();
    image.src = src;
    ctx.drawImage(image, x, y);
  }
}
