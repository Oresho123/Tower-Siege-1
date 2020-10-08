function setup() {
  createCanvas(800,800);
  var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,polygon
}
box1=new Box()
box2=new Box()
box3=new Box()
box4=new Box()
box5=new Box()
box6=new Box()
box7=new Box()
box8=new Box(330,235,30,40);
box9=new Box(360,235,30,40);
box10=new box(390,235,30,40);
box11=new Box(420,235,30,40);
box12=new Box(450,235,30,40);
box13=new Box(360,195,30,30);
box14=new Box(390,195,30,40);
box15=new Box(420,195,30,40);
box16=new Box(390,155,30,40);
polygon=new Polygon(350,350,30,40);
function draw() {
  background(242,251,62);
  drawSprites();
polygon=Bodies.circle(50,200,20);
World.add(world,polygon);


slingShot=new Slingshot(this.polygon,{x:100,y:200});
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);














































}