class Asteroid extends gameObject {
    constructor(x, y, r, sprite = null) {
      super(x, y, r, 0, 5, true, sprite, "green")
    }
  
    move() {
      this.x = this.x
      this.y = this.y + 1
    }
  
    display() {
      imageMode(CENTER);
      image(this.sprite, this.x, this.y, this.r , this.r);

      
    }
  
    intersects() {
      
    }
  
  }