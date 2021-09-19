var canvas;
var block1,block2,block3,block4;
var ball, edges;
var s1;

function preload(){
   s1 = loadSound ("sound.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,585,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,585,180,30);
    block2.shapeColor = "yellow";

    block3 = createSprite(500,585,180,30);
    block3.shapeColor = "red";

    block4 = createSprite(800,585,360,30);
    block4.shapeColor = "green";


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "black";
    ball.velocityX=(random(3,9));
    ball.velocityY=15;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    if(block1.isTouching(ball)&& ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        s1.play();
    }



    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "yellow";
        s1.play();
    }


    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor = "red";
        s1.play();
    }


    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor = "green";
        s1.play();
    }

    drawSprites();
}
