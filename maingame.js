let difficulty = 1

let score = 0
let gameOver = false

let images = []
let asteroids = []

function preload() {
  images.coin = loadImage("resources/coin.png")
  images.asteroid = loadImage("resources/asteroid.png")
  images.background = loadImage("resources/space.png")
  images.spaceship = loadImage("resources/spaceship.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(mouseX, 75, 75, images.spaceship)

  //5 is a test value
  for (let i = 0; i < 5; i++) {
    let x = random(50, 200)*i;
    asteroids.push(new Asteroid(x*2*i, 0, 100, images.asteroid));
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
  // ...
  // ...
}

  
function spliceAll(array, splices) {
}
  
function tickScore() {
}

function tickDifficulty() {
}

function drawUI() {
}

function tickObjects() {

}

function spawnNewObject(type) {
}

function tickSpawning() {
}