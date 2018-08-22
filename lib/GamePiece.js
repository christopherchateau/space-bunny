module.exports = class GamePiece {
  constructor(x, y, src, dx, dxv, width) {
    this.x = x;
    this.y = y;
    this.height = 40;
    this.width = width;
    this.src = src;
    this.dx = dx;
    this.dxv = dxv;
  }

  draw(ctx) {
    const { x, y, height, width, src } = this;
    const image = new Image();
    image.src = src;
    ctx.drawImage(image, x, y);
  }
}