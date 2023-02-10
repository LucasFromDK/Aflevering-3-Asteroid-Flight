let difficulty = 1

let score = 0
let gameOver = false

let images = []
let objects = []
let scoreTick = 2500
let difficultyTick = 5000
let coinSpawnTick = 2000
let asteroidSpawnTick = 300
let type = ""

function preload() {
  images.coin = loadImage("resources/coin.png")
  images.asteroid = loadImage("resources/asteroid.png")
  images.background = loadImage("resources/space.png")
  images.spaceship = loadImage("resources/spaceship.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Initialiserer Spilleren
  player = new Player(width/2, height-50, 20, images.spaceship)
  console.log("Lavet af Lucas L")
}

function draw() {
  background(0);
  // Opgave 3.1.4 - background
  imageMode(CORNER)
  image(images.background, 0, 0, windowWidth, windowHeight)

  //Stopper med at tegne spilleren, asteroiderne og mønterne hvis spillet er slut.
  if (gameOver == false) {
    player.move()
    player.display()

  // Opgave 3.5.2 "is game over?"
  if(gameOver == false) {
    
    tickObjects()
    tickSpawning()
    tickScore()
    tickDifficulty()
    }
  }
  //Opgave 3.4.4 drawUI
  drawUI()
}

  
function spliceAll(array, splices) {
  for (let i = splices.length - 1; i >= 0; i--) {
    array.splice(splices[i], 1)
  }
}

function tickScore() {
  if(millis() > scoreTick && gameOver == false){
    score++
    scoreTick = scoreTick + 2500
  } 
}

function tickDifficulty() {
  if(millis() > difficultyTick && gameOver == false) {
    difficulty++
    difficultyTick = difficultyTick + 5000
  }
}

function drawUI() {
  if (gameOver == false) {
    fill("white")
    strokeWeight(2)
    text("Score: " + score, 5, 20)
    text("Difficulty: " + difficulty, 5, 35)
  } else {
    textAlign(CENTER)
    fill("red")
    textSize(48)
    text("Game Over", width/2, height/2)

    //Jeg har valgt at vise spillerens "Final Score" og "Difficulty Reached" under Game Over for at man tydeligt kan se sin slut score
    fill("white")
    textSize(24)
    text("Final Score: " + score, width/2, height/2+30)
    text("Difficulty Reached: " + difficulty, width/2, height/2+60)
  }
}

function tickObjects() {
  let nonActiveObjects = []

  // Check if player collects a coin.
  for (let object of objects) {
    if (object instanceof Coin && object.collision(player) && object.isActive == true) {
      console.log("Coin Grabbed!");
      object.isActive = false;
      score = score + 5;
      break;
    }

    // Check if player is hit by an asteroid.
    if (object instanceof Asteroid && object.intersects(player)) {
      console.log("Spaceship Hit! Game Over");
      gameOver = true;
      break;
    }

    if (object.isActive == false) {
      nonActiveObjects.push(object)
    }
  }

  //
  spliceAll(objects, nonActiveObjects)

  //Tegner Objecter.
  for (let object of objects) {
    object.display();
    object.move();
  }
}


function spawnNewObject(type) {
  if (type == "asteroid") {
    //"Laver" nye asteroider
    for (let i = 0; i < difficulty; i++ ) {
      objects.push(new Asteroid(random(50, width-50), 0, random(75,159), images.asteroid));
      console.log("Spawned Asteroids! ");
    }
  } else if (type == "coin") {
    //"Laver" nye mønter.
    objects.push(new Coin(random(50, width-50), 0, random(25, 35), images.coin));
    console.log("Spawned Coin!");
  }
}

function tickSpawning() {
  if (millis() > asteroidSpawnTick) {
    spawnNewObject("asteroid")
    asteroidSpawnTick = asteroidSpawnTick + int(random(100, 500))
  }

  if (millis() > coinSpawnTick) {
    spawnNewObject("coin")
    coinSpawnTick = coinSpawnTick + int(random(2000, 4000))
  }
}