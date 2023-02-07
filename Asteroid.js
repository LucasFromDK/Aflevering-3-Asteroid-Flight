class Asteroid extends gameObject {
    constructor(x, y, r) {
    super(x, y, r, xSpeed, ySpeed, isActive, sprite, color)
    this.x = x
    this.y = y
    this.r = r
    this.xSpeed = xSpeed
    this.ySpeed = ySpeed
    this.isActive = isActive
    this.sprite = sprite
    this.color = color
    }
}