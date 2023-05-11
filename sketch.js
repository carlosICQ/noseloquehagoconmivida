var player, back;
var points = 0;
var backImg;
var leftPlayerImg;
var rightPlayerImg;
var gameState= "START";
var baseImg, baseGroup;
var goodImg, goodThingsGroup;
var badImg, badThingsGroup;

//Función para cargar imágenes y animaciones
function preload() {
  backImg = loadImage("images/Clouds Back.png")
  leftPlayerImg = loadAnimation("images/willyLeft.png")
  baseImg = loadImage("images/base.png");
}
//Función para declarar Sprites y grupos
function setup() {
  createCanvas(450,800);
  back = createSprite(225,400,20,20);
  back.addImage(backImg);
  back.scale = 0.5;
  player = createSprite(225, 450, 20, 20);
  player.addAnimation("left", leftPlayerImg);
  player.scale = 0.07;
}
//Función para dibujar los Sprites y establecer reglas del juego
function draw() {
  background(220);
  drawSprites();
    
  //Puntuación 
   textSize(20);
   fill("#F05B82");
   text("Puntos: ", 50, 100);
  //Inicio del juego
  if(gameState==="START" && keyDown("up_arrow")){
      //Cambio de estado
      gameState="PLAY";
    //Velocidad y cambio de estado 
    
     }
  
  if(gameState==="PLAY"){
    //Fondo infinito
    back.velocityY = 1;
    if(back.y > 425){
      back.y = 300;
    }
   
    //gravedad
     player.velocityY = player.velocityY + 0.8;
    //Mover personaje con las flechas 
    if(keyDown("right_arrow")){
    player.x = player.x+3;
  }
  
  if(keyDown("left_arrow")){
    player.x = player.x-3;
  }
  
  if(keyDown("up_arrow")){
    player.velocityY = -4;
  }
    //Crear bases y hacer que el personaje quede sobre ellas
    createBases();
    //Aumentar puntos
    
    //Crear Cosas Malas 
      
    //Cambiar a estado GAMEOVER
    
  }
  
  //Estado GAMEOVER 
  
  if(gameState==="GAMEOVER"){
     }
  

}

//Función para crear bases 
function createBases(){
   if(frameCount % 100 === 0){
     var base = createSprite(random(50,450), 0, 70, 20);         base.velocityY = 2;
      base.addImage(baseImg);
     base.scale = 0.30;
   }
}

//Función para crear Cosas Malas 

function createBadThings(){
  var velo = 3;
  if(frameCount % 75 === 0){
     
}
}

//Función para eliminar CosasBuenas
function removeGoodThings(sprite,goodThingsGroup ){
 
}

