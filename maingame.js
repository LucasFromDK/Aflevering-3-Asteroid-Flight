let difficulty = 1

let score = 0
let gameOver = false

let images = []
let asteroids = []
let coins = []

function preload() {
  images.coin = loadImage("resources/coin.png")
  images.asteroid = loadImage("resources/asteroid.png")
  images.background = loadImage("resources/space.png")
  images.spaceship = loadImage("resources/spaceship.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(mouseX, height-50, 75, images.spaceship)

  //Test Segment, spawner 5 asteroider
  for (let i = 0; i < 5; i++) {
    let x = random(50, 200)*i;
    asteroids.push(new Asteroid(x*2*i, 0, 100, images.asteroid));
  }

  //Test, 5 coins
  for (let i = 0; i < 5; i++) {
    let x = random(50, 200)*i;
    coins.push(new Coin(x*2*i, 0, 30, images.coin));
  }
}

function draw() {
  background(0);
  // Opgave 3.1.4 - background
  imageMode(CORNER)
  image(images.background, 0, 0, windowWidth, windowHeight)

  for (let asteroid of asteroids) {
    asteroid.display();
    asteroid.move();
  }

  for (let coin of coins) {
    coin.display();
    coin.move();
  }

  //Tjekker om asteroiden rammer spilleren
  for (let asteroid of asteroids) {
    if (player.intersects(asteroid)) {
      console.log("Spaceship Hit!")
      gameOver = true;
      break;
    }
  }

  for (let coin of coins) {
    if (player.collision(coin)) {
        console.log("Coin Grabed!")
        score = score + 5
        break;
      }
    }
  
  player.move()
  player.display()

  // Opgave 3.5.2 "is game over?"
  //if( ... ) {
    
    // ...
    // ...
    
    tickObjects()
    tickSpawning()
    tickScore()
    tickDifficulty()
  //}
  
  //Opgave 3.4.4 drawUI
  drawUI()
}

  
function spliceAll(array, splices) {
}
  
function tickScore() {
}

function tickDifficulty() {
}

function drawUI() {
  fill("white")
  strokeWeight(2)
  text("Score: " + score, 5, 20)
}

function tickObjects() {

}

function spawnNewObject(type) {
}

function tickSpawning() {
}