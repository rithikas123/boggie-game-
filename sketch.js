const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;

function preload() {
  bg = loadImage("images/bg.jpg");
}
function setup() {
  createCanvas(1200, 400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  ground = new Ground(600, 390, 1200, 10);
  boggie1 = new Boggie(50, 170, 50, 50);
  boggie2 = new Boggie(150, 170, 50, 50);
  boggie3 = new Boggie(250, 170, 50, 50);
  boggie4 = new Boggie(350, 170, 50, 50);
  boggie5 = new Boggie(450, 170, 50, 50);
  boggie6 = new Boggie(550, 170, 50, 50);
  connect1 = new Chain(boggie1.body, boggie2.body);
  connect2 = new Chain(boggie2.body, boggie3.body);
  connect3 = new Chain(boggie3.body, boggie4.body);
  connect4 = new Chain(boggie4.body, boggie5.body);
  connect5 = new Chain(boggie5.body, boggie6.body);
  rock = new Rock(1000, 350, 150, 80);
}

function draw() {
  background(bg);
  Engine.update(myEngine);
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();
  connect1.show();
  connect2.show();
  connect3.show();
  connect4.show();
  connect5.show();
  rock.show();
  var collides = Matter.SAT.collides(boggie6.body, rock.body);
  if (collides.collided) {
    textSize(30);
    fill("blue");
    stroke("black");
    text("TRAIN IS CRASHED", 600, 200);
  }
  if (keyDown(RIGHT_ARROW)) {
    Matter.Body.applyForce(boggie6.body, boggie6.body.position, {
      x: 0.1,
      y: 0,
    });
  }
}
