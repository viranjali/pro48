var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var obstacle,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6, obstaclesGroup;
var rand;
var food, foodImage,foodsGroup;
var form, player, game;

var players, player1, player2,bground;

var bgImage, form_bg, fish1_img, fish2_img;

function preload(){
  bgImage = loadImage("images/bg.jpg");
  form_bg = loadImage("images/game_bg.jpg");

  fish1_img = loadImage("images/fish1.png");
  fish2_img = loadImage("images/fish2.png");

  foodImage = loadImage("images/food1.png");

  obstacle1 = loadImage("images/stone1.png");
  obstacle2 = loadImage("images/stone2.png");
  obstacle3 = loadImage("images/stone3.png");
  obstacle4 = loadImage("images/stone4.png");
  obstacle5 = loadImage("images/stone5.png");
  obstacle6 = loadImage("images/stone6.png");
  
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  obstaclesGroup = new Group();
  foodsGroup = new Group();
  

}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    game.spawnObstacles();
    game.spawnFood();
    
    
  }
  if(gameState === 2){

    game.end();
  }
  if(gameState === 3){

    form.display();
  }

}
