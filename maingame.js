let difficulty = 1

let score = 0
let gameOver = false

let images = []

function preload() {
  images.coin = loadImage("resources/coin.png")
  images.asteroid = loadImage("resources/asteroid.png")
  images.background = loadImage("resources/space.png")
  images.spaceship = loadImage("resources/spaceship.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  new Player(10, 10, 100, images.spaceship)
}

function draw() {
  background(0);
  // Opgave 3.1.4 - background
  imageMode(LEFT)
  image(images.background, 0, 0, windowWidth, windowHeight)

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