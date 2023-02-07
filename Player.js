class Player extends gameObject {
    constructor(x, y, r, sprite = null) {
    super(x,y,r,sprite)
    }
    get x() {
        return this._x
      }
      set x(x) {
        this._x = x
      }
    
      get y() {
        return this._y
      }
      set y(y) {
        this._y = y
      }
      
      get r() {
        return this._r
      }
      set r(r) {
        this._r = r
      }

      get sprite() {
        return this._sprite
      }
      set sprite(sprite) {
        this._sprite = sprite
      }

      move() {
        this.x = mouseX
        console.log("Move")
      }
}