
 class Shopkeeper
{

   GetDiscount(prices: number[], discountPercentage: number)
   {
    let totalPrice = prices.reduce((a, b) => a + b, 0);
    let afterDiscount= totalPrice* discountPercentage/100;
    return afterDiscount;
   }

}
let shopkeeper=new Shopkeeper();
console.log("Price after discount: "+ shopkeeper.GetDiscount([100,200,300],50));


 
    