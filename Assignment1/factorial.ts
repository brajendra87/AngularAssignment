
export class factorial
{
  getFactorial(n)
  {
    if (n === 0) {
       return 1;
     }
     return  n * this.getFactorial(n - 1);
  }
}

var fact=new factorial();
console.log(fact.getFactorial(5));
    