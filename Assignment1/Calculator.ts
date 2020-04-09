 class Calculator
{
   x:number; y:number;
   
   constructor(x,y){
      this.x=x;
      this.y=y;
   }
      
   add(){
      return this.x+this.y;
   }
   sub(){
      return this.x-this.y;
   }
   mul(){
      return this.x*this.y;
   }
   div() {
      return this.x/this.y;
   }
}

var calc=new Calculator(20,10)
console.log("Addition Of Number is: "+calc.add());
console.log("Subtraction Of Number is: "+ calc.sub());
console.log("Multiplication Of Number is: "+calc.mul());
console.log("Division  Of Number is: "+calc.div());

 
    