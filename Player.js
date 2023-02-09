class Player extends gameObject {
  constructor(x, y, r, sprite = null) {
    super(x, y, r, 0, 0, true, sprite, "green")
  }

  move() {
    this.x = mouseX
    this.y = this.y
  }

  display() {
    imageMode(CENTER);
    image(this.sprite, mouseX, this.y, this.r , this.r);
  }

  //Tjekker om dit Rumskib bliver ramt af en Asteroide
  intersects(asteroid) {
    let distance = dist(this.x, this.y, asteroid.x, asteroid.y);
    return distance < this.r / 2 + asteroid.r / 2;
  }

  collision(coin) {
    let distance = dist(this.x, this.y, coin.x, coin.y);
    return distance < this.r / 2 + coin.r / 2;
  }
}