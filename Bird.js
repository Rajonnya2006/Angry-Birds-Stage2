class Bird extends BaseClass{//all properties of base class will be there in bird class
  constructor(x,y){//constructor takes x and y
    super(x,y,50,50);//give the x, y, width, height to super(BaseClass)
    this.image = loadImage("sprites/bird.png");//LOAD the image of the bird
  }
  display(){
    this.body.position.x = mouseX;//moving the bird with the mouse
    this.body.position.y = mouseY;//"       "
    super.display();//display the bird as per super(BaseClass)
  }
}