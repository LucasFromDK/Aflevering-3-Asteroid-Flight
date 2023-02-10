let difficulty = 1

let score = 0
let gameOver = false

let images = []
let asteroids = []
let coins = []

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
  player = new Player(mouseX, height-50, 75, images.spaceship)
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
  } else {
    textAlign(CENTER)
    fill("red")
    textSize(48)
    text("Game Over", width/2, height/2)

    //Jeg har valgt at vise spillerens "Final Score" under Game Over for at man tydeligt kan se sin slut score
    fill("white")
    textSize(24)
    text("Final Score: " + score, width/2, height/2+50)
  }
}

function tickObjects() {

//Tjekker om spilleren samler coins op.
  for (let coin of coins) {
    if (coin.collision(player) && coin.isActive == true) {
        console.log("Coin Grabed!")
        coin.isActive = false
        score = score + 5
        break;
      }
    }

  //Tegner Coins
  for (let coin of coins) {
    if (coin.isActive == true)
    coin.display();
    coin.move();
    }

  //Tjekker om asteroiden rammer spilleren.
  for (let asteroid of asteroids) {
    if (asteroid.intersects(player)) {
    console.log("Spaceship Hit! Game Over")
    gameOver = true;
    break;
      }
    }

  //Tegner Asteroiderne
  for (let asteroid of asteroids) {
    asteroid.display();
    asteroid.move();
  }
}

function spawnNewObject(type) {
  if (type == "asteroid") {
    for (let i = 0; i < difficulty; i++ ) {
      asteroids.push(new Asteroid(random(50, width-50), 0, random(75,159), images.asteroid))
      console.log("Spawned Asteroids! ")
    }

  } else if (type == "coin") {
    coins.push(new Coin(random(50, width-50), 0, random(25, 35), images.coin))
    console.log("Spawned Coin!")
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