 class PrimeNubmers
{
    getPrimeNumber(num)
    {
        for(let i=2; i<=num ;i++){

            let isPrime = true;
        
            for(let j=2; j<i; j++){
                if(i%j === 0 && i !== j){
                    isPrime = false;
                }
            }
            if(isPrime === true){
                console.log(i);
            }
        }
    }
}
let pNumber =new PrimeNubmers();
pNumber.getPrimeNumber(100);


 
    