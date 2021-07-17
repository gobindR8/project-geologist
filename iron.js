class iron{
constructor(x,y,width,height){
 var options={
   restitutions:0.8,
   friction:3,
   density:30
 }
this.x=x
this.y=y
this.width=width
this.height=height


this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
World.add(world,this.body)
}
display(){
 
    var posbody=this.body.position
    push()
    translate(posbody.x,posbody.y)
    rectMode(CENTER)
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    rect(0,0,this.width,this.height)
    pop()




}





}