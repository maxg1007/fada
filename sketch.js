var starImg,bgImg;
var star, starBody,fada,fadaImg;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
  
    //carregar animação de fada 

    fadaImg = loadAnimation('images/fairyImage1.png','images/fairyImage2.png')

}

function setup() {
    createCanvas(800, 750);
    

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    fada = createSprite(400,480,20,20,);
    fada.addAnimation('runing',fadaImg)
    fada.scale = 0.2;
    

    
    if (frameCount%70===0){
    star = createSprite(650,-10);
    star.x = Math.round(random(10,710))
	star.addImage(starImg);
	star.scale = 0.2;
    }

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

  
}

function draw(){

    background(bgImg);

    star.velocityY = 3;

    if(keyDown('left')){
     fada.x = fada.x - 15;
    }
    
    if(keyDown('right')){
        fada.x = fada.x + 15;
       }

    if(star.y > 470 && starBody.position.y > 470 ){
        Matter.Body.ssetStatic(starBody,true);
    }
    if(fada.isTouching(star)){
        star.destroy();
    }

  drawSprites(); 
}
